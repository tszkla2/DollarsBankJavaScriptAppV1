// var functions = require('./customer_account.js');

// var readline = require('readline');
// var colors = require('colors');

// var map = {};
// var funds = {};
// var money = 0;
// var accounts = {};

// const menuFunctions = {

//     //FUNCTION FOR DISPLAYING THE START MENU
//     startMenu: function(){
//         var rl = readline.createInterface(process.stdin, process.stdout);
        
//         console.log('');
//         console.log('+---------------------------+'.blue);
//         console.log(`|  TOM'S BANK Welcomes You! |`.blue);
//         console.log('+---------------------------+'.blue);
//         console.log('1. Create New Account'.blue);
//         console.log('2. Login'.blue);
//         console.log('3. Exit'.blue);
//         console.log('');

//         rl.setPrompt('Enter Choice (1,2, or 3):'.green);
//         rl.prompt();

//         rl.on('line', (choice) => {

//             if(choice == 1){
//                 console.log(`You chose: ${choice}`.yellow);
//                 rl.close();
//             }

//             else if(choice == 2){
//                 console.log(`You chose: ${choice}`.yellow);
//                 rl.close();
//             }

//             else if(choice == 3){
//                 console.log(`You chose: ${choice}`.yellow);
//                 rl.close();
//             }

//             else{
//                 console.log('INCORRECT NUMBER!!!'.red);
//                 functions.startMenu();
//             }
//         });
//     },



//     //FUNCTION FOR DISPLAYING THE MENU AFTER LOGGING IN
//     loginMenu: function (){
//         var rl = readline.createInterface(process.stdin, process.stdout);

//         console.log('');
//         console.log('+----------------------+'.blue);
//         console.log(`|  WELCOME Customer!!! |`.blue);
//         console.log('+----------------------+'.blue);
//         console.log('1. Deposit Amount'.blue);
//         console.log('2. Withdraw Amount'.blue);
//         console.log('3. Funds Transfer'.blue);
//         console.log('4. View 5 Recent Transactions'.blue);
//         console.log('5. Display Customer Inforamtion'.blue);
//         console.log('6. Sign Out'.blue);
//         console.log('');

//         rl.setPrompt('Enter Choice (1,2,3,4,5, or 6):'.green);
//         rl.prompt();

//         rl.on('line', (choice) => {
//             console.log(`You chose: ${choice}`.yellow);

//             if(choice == 1){
//                 console.log('DEPOSIT'.yellow)
//                 rl.close();
//             }

//             else if(choice == 2){
//                 console.log('WITHDRAW'.yellow)
//                 rl.close();
//             }

//             else if(choice == 3){
//                 console.log('FUNDS TRANSFER'.yellow)
//                 rl.close();
//             }

//             else if(choice == 4){
//                 console.log('VIEW 5 RECENT TRANSACTIONS'.yellow)
//                 rl.close();
//             }

//             else if(choice == 5){
//                 console.log('DISPLAY CUSTOMER INFORMATION'.yellow)
//                 rl.close();
//             }

//             else if(choice == 6){
//                 console.log('SIGN OUT'.yellow)
//                 menuFunctions.startMenu();
//             }

//             else {
//                 console.log('INCORRECT NUMBER!!! '.red)
//                 menuFunctions.loginMenu();
//             }
//         });

//     }

// }
    
// module.exports = menuFunctions;