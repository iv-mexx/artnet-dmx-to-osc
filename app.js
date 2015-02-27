var UDP_PORT_ARTNET = 6454;
var UDP_PORT_OSC = 3333;
var HTTP_PORT = 3000;


// Setup UPD Port for Artnet
var artnetsrv = require('./artnet_server');
// Setup OSC
var osc = require('node-osc');
var oscClient = new osc.Client('0.0.0.0', UDP_PORT_OSC);

var srv = artnetsrv.listen(UDP_PORT_ARTNET, function(msg, peer) {
	console.log("-----------------");
	console.log("Sequence: " + msg.sequence);
	console.log("Physical: " + msg.physical);
	console.log("Universe: " + msg.universe);
	console.log("Length: " + msg.length);
	console.log("Data: " + msg.data);
	console.log("-----------------");

	oscClient.send('/channels/1', msg.data[0]);
});