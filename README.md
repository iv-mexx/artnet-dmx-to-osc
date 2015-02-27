# DMX2OSC

Web-Server that receives ArtNet DMX and translates it to OSC Messages.

Currently, 1 DMX channel is read and its value is sent as OSC message.

## Hardware Setup

The general Signal Flow is

DMX (RS232) -> Interface -> ArtNet(UDP) -> PC with this Program running -> OSC(UDP)

## Configuration

Currently, exactly 1 DMX channel is routed to exactl 1 OSC message and all configuration is hardcoded in [app.js](app.js).

All parameters are defined by variables in the _Configuration_-section in [app.js](app.js)

__Network Settings:__

* ```UDP_PORT_ARTNET```: Listening-Port for ArtNet Input - ```6454``` is standard for ArtNet
* ```UDP_PORT_OSC```: Port to which the OSC messages are sent - has to be configured to match the receiver, default is ```3333```
* ```IP_OSC_TARGET```: IP of the OSC receiver - has to be configured, default is ```127.0.0.1``` aka ```localhost```

__Routing Settings:__

* ```DMX_UNIVERSE```: Only messages in this DMX Universe are forewarded. Default is ```0```
* ```DMX_SEQUENCE```: Only messages in this DMX Sequence are forewarded. Default is ```0```
* ```DMX_PHYSICAL```: Only messages in this DMX Physical are forewarded. Default is ```0```
* ```DMX_CHANNEL```: The channel that should be mapped to the OSC message. Default is ```0``` (Which is the first channel)
* ```OSC_MSG_NAME```: The OSC message in which the value should be sent. Has to be configured to match the receiver. 


# Setup & Run

## Setup

### Prerequisites 

This program is implemented as a [node.js](http://nodejs.org)-module - therefore, [node.js](http://nodejs.org) has to be installed on the machine.

### Installation

* In a commandline terminal, go to the root folder of this project
* Install the dependencies by running ```npm install```
* Done

## RUN

* In a commandline terminal, go to the root folder of this project
* Start the program by running ```npm start```
* Done

# Debugging

Some useful Debugging Tools:

* [OSC Monitor](http://mac.softpedia.com/get/Audio/OSC-Monitor.shtml)
* [ArtNet Monitor (iPad App)](https://itunes.apple.com/de/app/iview-artnet/id494638579?mt=8)
