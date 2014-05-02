ASE proxy
=========

Proxy for Agent Simulation Environment

Requirements
------------
- git
- node.js
- ZeroMQ 3.2.3

Install
-------
- npm install zmq
- git clone https://github.com/kolinger/ase-proxy.git

Running
-------
`node src/app.js 127.0.0.1:10000 127.0.0.1:20000` first address is for broadcaster, second for subscriber
