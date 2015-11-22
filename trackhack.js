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
    if(!locked && !stdout) {
        exec(config.lockCmd, function(error, stdout, stderr) {
        });

        /*
        setTimeout(function() {
            exec(config.unlockCmd);
        }, 25000);
        */
    }

    if(locked && stdout) {
        exec(config.unlockCmd, function(error, stdout, stderr) {
        });
    }
}

test();

setInterval(function() {
    test();
}, 5000);
