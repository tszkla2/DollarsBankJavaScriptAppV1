var readline = require('readline');
var colors = require('colors');

console.log('');
console.log('');
console.log('');
console.log('');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~'.blue);
console.log(`WELCOME TO TOM'S BANK!!!`.blue);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~'.blue);
console.log('');
console.log('');
// rl.setPrompt(`What is your age? `.green);
// rl.prompt();
// rl.on('line', (age) => {
// console.log(`Age received by the user: ${age}`.green);
// rl.close();
// });


var functions = {

    welcome: function(){
    
    let option = 0;
    var rl = readline.createInterface(
        process.stdin, process.stdout);

    console.log('~~~~~~~~~~~~~~~~'.blue);
    console.log(`WELCOME CUSTOMER`.blue);
    console.log('~~~~~~~~~~~~~~~~'.blue);
    console.log('1. Deposit Amount'.blue);
    console.log('2. Withdraw Amount'.blue);
    console.log('3. Funds Transfer'.blue);
    console.log('4. View 5 Recent Transactions'.blue);
    console.log('5. Display Customer Inforamtion'.blue);
    console.log('6. Sign Out'.blue);
    console.log('');

    rl.setPrompt('Enter Choice (1,2,3,4,5, or 6):'.green);
    rl.prompt();

    rl.on('line', (choice) => {
        console.log(`You chose: ${choice}`);
        rl.close();
    });

        // else if(choice == 2){
        //     console.log('You chose 2'.blue);
        // }
        // else if(choice == 3){
        //     console.log('You chose 3'.blue);  
        // }
        // else if(choice == 4){
        //     console.log('You chose 4'.blue);
        // }
        // else if(choice == 5){
        //     console.log('You chose 5'.blue);
        // }
        // else if(choice == 6){
        //     console.log('You chose 6'.blue);
        // }
    
    }
}
module.exports = functions;