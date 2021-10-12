//USES NODE.JS AND JAVASCRIPT TO RUN A BANK SYSTEM IN THE CONSOLE

const readline = require('readline');
const colors = require('colors');
const run = require('./src/bank.js');

console.log('APP.JS IS WORKING'.magenta);

//RUNS THE START MENU TO ITERATE THROUGH THE PROGRESSIONS OF THE BANK PROGRAM
// node app.js
run.startMenu();

