var exec = require('child_process').exec,
    config = {
        ssid: 'vanreymann',
        lockCmd: 'slock'
    },
    cmd = 'sudo iwlist wlp3s0 scan | grep ' + config.ssid;


var test = function() {
    exec(cmd, function(error, stdout, stderr) {
        tested(stdout);
    });
}

var tested = function(stdout) {
console.log(stdout);
    if(!stdout) {
        exec(config.lockCmd, function(error, stdout, stderr) {
console.log(arguments);
        });

        setTimeout(function() {
            exec('killall slock');
        }, 5000);
    }
}

test();

setInterval(function() {
    test();
}, 10000);
