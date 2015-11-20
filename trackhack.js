var exec = require('child_process').exec;
var cmd = 'ls -al';

exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
  console.log(stdout);
});
