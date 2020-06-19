process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//   const pwd = process.cwd();

//   process.stdout.write('You typed: ' + pwd);
//   process.stdout.write('\nprompt > ');
// });

// console.log(process.cwd());

const pwd = require('./pwd.js');
const ls = require('./ls.js');
