var readline = require('readline');
var colors = require('colors');
// var readline = require('linebyline'),

var rl = readline.createInterface(
    process.stdin, process.stdout);

console.log('');
console.log('');
console.log('');
console.log('');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`WELCOME TO TOM'S BANK!!!`.blue);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('');
console.log('');
rl.setPrompt(`What is your age? `.green);
rl.prompt();
rl.on('line', (age) => {
console.log(`Age received by the user: ${age}`.green);
rl.close();
});
