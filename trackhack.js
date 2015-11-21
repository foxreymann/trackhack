var exec = require('child_process').exec;
var config = {
  ssid: 'vanreymann'
};
var cmd = 'sudo iwlist wlp3s0 scan | grep ' + config.ssid;
console.log(cmd);

exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
  console.log(stdout);
  console.log(stderr);
});
