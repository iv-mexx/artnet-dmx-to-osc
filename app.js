////////////////////////////////////////////////////////////////////////////////////
// Configuration
//
// Network Setup
//
var UDP_PORT_ARTNET = 6454;
var UDP_PORT_OSC = 3333;
//
// Routing Filter
//
var DMX_UNIVERSE = 0;				// The DMX Universe for which messages should be routed
var DMX_SEQUENCE = 0;				// The DMX Sequence for which messages should be routed
var DMX_PHYSICAL = 0;				// The DMX Physical for which messages should be rotued
//
// Routing Setup
//
var DMX_CHANNEL = 0;				// The DMX Channel that should be routed to the OSC channel. Keep in mind that in programming, the first thing starts with index 0 ;-)
var OSC_MSG_PATH = '/channels/1';	// The OSC channel to which the value of the DMX channel should be routed.

////////////////////////////////////////////////////////////////////////////////////
// Start of the actual Program
//
// Setup UPD Port for Artnet
var artnetServer = require('./artnet_server');
// Setup OSC
var osc = require('node-osc');
var oscClient = new osc.Client('0.0.0.0', UDP_PORT_OSC);

var srv = artnetServer.listen(UDP_PORT_ARTNET, function(msg, peer) {
	if(msg.universe == DMX_UNIVERSE && msg.physical == DMX_PHYSICAL && msg.sequence == DMX_SEQUENCE) {
		var value = msg.data[DMX_CHANNEL];
		console.log("Routing DMX Channel " + DMX_CHANNEL + " to OSC path " + OSC_MSG_PATH + " with value " + value);
		oscClient.send(OSC_MSG_PATH, value);
	} else {
		console.log("ArtNet Message received, but not for the correct channel.")
	}
});