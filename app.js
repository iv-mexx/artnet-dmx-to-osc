var UDP_PORT_ARTNET = 6454;
var UDP_PORT_OSC = 1234;
var HTTP_PORT = 3000;


// Setup UPD Port for Artnet
var artnetsrv = require('./artnet_server');

var srv = artnetsrv.listen(6454, function(msg, peer) {
	console.log("-----------------");
	console.log("Sequence: " + msg.sequence);
	console.log("Physical: " + msg.physical);
	console.log("Universe: " + msg.universe);
	console.log("Length: " + msg.length);
	console.log("Data: " + msg.data);
	console.log("-----------------");
});