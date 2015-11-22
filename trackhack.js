var exec = require('child_process').exec,
    config = {
        ssid: 'vanreymann',
        lockCmd: 'slock',
        unlockCmd: 'killall slock'
    },
    cmd = 'sudo iwlist wlp3s0 scan | grep ' + config.ssid,
    locked = false;


var test = function() {
    exec(cmd, function(error, stdout, stderr) {
        tested(stdout);
    });
}

var tested = function(stdout) {
console.log(stdout);
    if(!locked && !stdout) {
        exec(config.lockCmd, function(error, stdout, stderr) {
console.log(arguments);
        });
    }

    if(locked && stdout) {
        exec(config.unlockCmd, function(error, stdout, stderr) {
console.log(arguments);
        });
    }
}

test();

setInterval(function() {
    test();
}, 5000);
