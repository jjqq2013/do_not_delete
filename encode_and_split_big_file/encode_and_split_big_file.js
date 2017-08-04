'use strict';

const fs = require('fs');
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Usage of parameters: input_file_path max_len_per_file [output_file_path_prefix]');
  return
}

const input_file_path = args[0];
const max_len_per_file = Number(args[1]);
const output_file_path_prefix = args[2] || input_file_path;

const all_len = fs.statSync(input_file_path).size;
if (all_len === 0) {
  return;
}

const file_name_seq_digits = Math.ceil(Math.log10(Math.ceil(all_len * 8 / max_len_per_file)));
const file_name_seq_str_padding = '0'.repeat(file_name_seq_digits);

let f_name_seq = 0;
function get_next_file_name() {
  return output_file_path_prefix + '.enc' + (file_name_seq_str_padding + (f_name_seq++)).slice(-file_name_seq_digits);
}

let f_buf = Buffer.alloc(max_len_per_file);
let f_buf_len = 0;

fs.createReadStream(input_file_path)
  .on('data', (buf) => {
    for (let i = 0; i < buf.length; i++) {
      const c = buf[i];
      //if it is not concerned with shell meta char, then use it. Get a buffer slice contains a single byte,
      // otherwise convert it to \xNN
      let enc_buf = (c == 0x5f/*underline*/ || c == 0x2f /*slash*/
      || c == 0x2e /*dot*/ //|| c == 0x26 /*hyphen*/
      || c >= 0x30 && c <= 0x39 /*0-9*/
      || c >= 0x41 && c <= 0x5a /*A-Z*/
      || c >= 0x61 && c <= 0x7a /*a-z*/)
        ? buf.slice(i, i + 1)
        : Buffer.from('\\x' + ('0' + c.toString(16)).slice(-2));

      if (f_buf_len + enc_buf.length > max_len_per_file) {
        fs.writeFileSync(get_next_file_name(), f_buf.slice(0, f_buf_len));
        f_buf_len = 0;
      }
      enc_buf.copy(f_buf, /*offset in f_buf:*/f_buf_len);
      f_buf_len += enc_buf.length
    }
  })
  .on('end', () => {
    fs.writeFileSync(get_next_file_name(), f_buf.slice(0, f_buf_len));
    console.log('OK');
  });
