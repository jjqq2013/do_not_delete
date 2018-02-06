
adb start-server
forward.js 15037 127.0.0.1:5037 > __forward.log 2>&1 < /dev/null &

cat __forward.log
echo To show more log, run tail -f __forward.log
