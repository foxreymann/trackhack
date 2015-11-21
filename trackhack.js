var exec = require('child_process').exec,
    config = {
        ssid: 'vanreymann',
        lockCmd: 'xtrlock'
    },
    cmd = 'sudo iwlist wlp3s0 scan | grep ' + config.ssid;

var test = function() {
    exec(cmd, function(error, stdout, stderr) {
        return stdout;
    });
}
