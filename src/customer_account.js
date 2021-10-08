var readline = require('readline');
var colors = require('colors');

var rl = readline.createInterface(
        process.stdin, process.stdout);
  
rl.setPrompt('Enter Choice (1,2,3,4,5, or 6):'.green);
rl.prompt();
rl.on('line', (age) => {
    console.log(`Age received by the user: ${age}`);
    rl.close();
});