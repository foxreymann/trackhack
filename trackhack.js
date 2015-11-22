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
console.log('lock');
        exec(config.lockCmd, function(error, stdout, stderr) {
            console.log(arguments);
        });
    }
}

test();

setInterval(function() {
    test();
}, 10000);
