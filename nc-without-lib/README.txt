This utility does not need any external lib.

BusyBox v1.28.0 (2018-01-08 21:14:06 UTC) multi-call binary.

Usage: nc [OPTIONS] HOST PORT  - connect
nc [OPTIONS] -l -p PORT [HOST] [PORT]  - listen

	-e PROG	Run PROG after connect (must be last)
	-l	Listen mode, for inbound connects
	-lk	With -e, provides persistent server
	-p PORT	Local port
	-s ADDR	Local address
	-w SEC	Timeout for connects and final net reads
	-i SEC	Delay interval for lines sent
	-n	Don't do DNS resolution
	-u	UDP mode
	-v	Verbose
	-o FILE	Hex dump traffic
	-z	Zero-I/O mode (scanning)
