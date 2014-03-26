var zmq = require('zmq');

var routerAddress = process.argv[2]; // first arguments is router address
var publisherAddress = process.argv[3]; // second is publisher address

// bind publisher on specific address
var publisher = zmq.socket('pub');
publisher.bind('tcp://' + publisherAddress, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Publisher listening on ' + publisherAddress);
    }
});

// bind router on specific address
var router = zmq.socket('router');
router.bind('tcp://' + routerAddress, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Router listening on ' + routerAddress);
    }
});

// resend received messages with publisher to all subscribers
router.on('message', function(envelope, request) {
    publisher.send(request);
});
