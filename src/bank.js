var readline = require('readline');
// https://www.npmjs.com/package/colors
var colors = require('colors');
var loggedInUser = 0;

//ARRAY WHERE THE ACCOUNT INFORMATION IS STORED
var list = [
    {name: 'Tom', address: '123 Drive', phoneNumber: '123-456-7890', accountID: '001', password: 'password', balance: 500},
    {name: 'Bill', address: '456 Drive', phoneNumber: '987-654-3210', accountID: '002', password: 'password', balance: 100}
];
//ARRAY WHERE THE TRANSACTION HISTORY IS STORED
var history = [
    {accountID: 001, balance: 500, message: 'Initial Amount of $500 added to account 001. Balance = $500'},
    {accountID: 002, balance: 100, message: 'Initial Amount of $100 added to account 002. Balance = $100'}
];

//START OF BANKING APP MENUS
const functions = {
     //FUNCTION FOR DISPLAYING THE START MENU
     startMenu: function(){
        var rl = readline.createInterface(process.stdin, process.stdout);
        
        console.log('');
        console.log('+---------------------------+'.blue);
        console.log(`|  TOM'S BANK Welcomes You! |`.blue);
        console.log('+---------------------------+'.blue);
        console.log('1. Create New Account'.blue);
        console.log('2. Login'.blue);
        console.log('3. Exit'.blue);
        console.log('');

        rl.setPrompt('Enter Choice (1,2, or 3):'.green);
        rl.prompt();

        rl.on('line', (choice) => {

            if(choice == 1){
                console.log(`You chose: ${choice}`.yellow);
                rl.close();
                functions.addUser();
            }

            else if(choice == 2){
                console.log(`You chose: ${choice}`.yellow);
                rl.close();
                functions.login();
            }

            else if(choice == 3){
                console.log(`You chose: ${choice}`.yellow);
                console.log('GOODBYE!!!'.yellow);
                rl.close();
            }

            else{
                console.log('INCORRECT NUMBER!!!'.red);
                rl.close();
                functions.startMenu();
            }
        });
    },

     //FUNCTION FOR DISPLAYING THE MENU AFTER LOGGING IN
     loginMenu: function (){
        var rl = readline.createInterface(process.stdin, process.stdout);

        console.log('');
        console.log('+----------------------+'.blue);
        console.log(`|  WELCOME Customer!!! |`.blue);
        console.log('+----------------------+'.blue);
        console.log('1. Deposit Amount'.blue);
        console.log('2. Withdraw Amount'.blue);
        console.log('3. Funds Transfer'.blue);
        console.log('4. View Recent Transactions'.blue);
        console.log('5. Display Customer Information'.blue);
        console.log('6. Sign Out'.blue);
        console.log('');

        rl.setPrompt('Enter Choice (1,2,3,4,5, or 6):'.green);
        rl.prompt();

        rl.on('line', (choice) => {
            console.log(`You chose: ${choice}`.yellow);

            if(choice == 1){
                console.log('DEPOSIT'.yellow)
                rl.close();
                functions.deposit();
            }

            else if(choice == 2){
                console.log('WITHDRAW'.yellow)
                rl.close();
                functions.withdraw();
            }

            else if(choice == 3){
                console.log('FUNDS TRANSFER'.yellow)
                rl.close();
                functions.transfer();
            }

            else if(choice == 4){
                console.log('VIEW RECENT TRANSACTIONS'.yellow)
                rl.close();
                functions.showHistory();
            }

            else if(choice == 5){
                console.log('DISPLAY CUSTOMER INFORMATION'.yellow)
                rl.close();
                functions.displayInformation();
            }

            else if(choice == 6){
                console.log('SIGN OUT'.yellow)
                rl.close();
                functions.startMenu();
            }

            else {
                console.log('INCORRECT NUMBER!!! '.red)
                rl.close();
                functions.loginMenu();
            }
        });

    },

    //FUNCTION FOR CREATING A NEW USER
    addUser: function(){
        var rl = readline.createInterface(process.stdin, process.stdout);

        console.log('');

        rl.question('Enter Customer Name: '.green, (answer1) => {
            rl.question('Enter Customer Address: '.green, (answer2) => {
                rl.question('Enter Customer Phone Number: '.green, (answer3) => {
                    rl.question('Enter Account ID: '.green, (answer4) => {
                        rl.question('Enter Password: '.green, (answer5) => {
                            rl.question('Enter Initial Deposit Amount: '.green, (answer6) => {
                                
                                list.push({name: answer1, address: answer2, phoneNumber: answer3, accountID: answer4, password: answer5, balance: parseInt(answer6)});
                                history.push({accountID: answer4, balance: answer6, message: 'Initial Amount of $' + answer6 + ' to account ' + answer4 +  '. Balance = $' + answer6});
                                // console.log(list[2]);
                                rl.close();
                                functions.startMenu();
                            });
                        });
                    });
                });
            });
        });
    },

    //FUNCTION FOR LOGGING IN AS A USER
    login: function(){
        var rl = readline.createInterface(process.stdin, process.stdout);
        var found = false; 

        console.log('');
        rl.question('Enter Account ID: '.green, (answer1) => {
            rl.question('Enter Password: '.green, (answer2) => {
                for(var i=0; i<list.length; i++){
                    if(list[i].accountID == answer1 && list[i].password == answer2) {
                        found = true;
                        loggedInUser = i;
                        console.log(`Login Sucessful! Welcome ${list[i].name}`.yellow);
                        rl.close();
                        functions.loginMenu();
                        break;
                    }
                    else{
                        continue;
                    }
                }

                if(found == false)
                {
                    rl.close();
                    console.log('INCORRECT USERNAME OR PASSWORD!!! '.red)
                    functions.login();
                }
            });
        });
    },

    //MENU FOR DISPLAYING ACCOUNT INFORMATION
    displayInformation: function(){
        console.log('+----------------------+'.blue);
        console.log('|        Account       |'.blue);
        console.log('+----------------------+'.blue);
        console.log(' ACCOUNT ID: '.magenta + list[loggedInUser].accountID);
        console.log(' PASSWORD: '.magenta + list[loggedInUser].password);
        console.log(' BALANCE: $'.magenta + list[loggedInUser].balance);
        console.log('+----------------------+'.blue);
        console.log('|       Customer       |'.blue);
        console.log('+----------------------+'.blue);
        console.log(' NAME: '.magenta + list[loggedInUser].name);
        console.log(' ADDRESS: '.magenta + list[loggedInUser].address);
        console.log(' PHONE: '.magenta + list[loggedInUser].phoneNumber);

        functions.loginMenu();
    },

    //FUNCTION TO DEPOSIT MONEY INTO ACCOUNT
    deposit: function(){
        var rl = readline.createInterface(process.stdin, process.stdout);
        
        console.log('');

        rl.question('How much would you like to deposit into your account? Your current balance is $'.green + list[loggedInUser].balance + ': ', (answer1) => {
            if(answer1 >= 0){
                list[loggedInUser].balance += parseInt(answer1);
                console.log('Amount depositited into your account: '.yellow + answer1);
                console.log('New balance: $'.yellow + list[loggedInUser].balance);
                history.push({accountID: list[loggedInUser].accountID, balance: list[loggedInUser].balance, message: 'Deposited Amount of $' + answer1 + ' to account ' + list[loggedInUser].accountID +  '. Balance = $' + list[loggedInUser].balance});
                rl.close();
                functions.loginMenu();
            }
            else{
                console.log('Enter a positive amount!'.red);
                rl.close();
                functions.deposit();
            }
        });
    },

    //FUNCTION TO WITHDRAW MONEY FROM ACCOUNT
    withdraw: function(){
        var rl = readline.createInterface(process.stdin, process.stdout);
        
        console.log('');

        rl.question('How much would you like to withdraw from your account? Your current balance is $'.green + list[loggedInUser].balance + ': ', (answer1) => {
            if(answer1 <= list[loggedInUser].balance && answer1 >= 0){
                list[loggedInUser].balance -= parseInt(answer1);
                console.log('Amount withdrawn from your account: '.yellow + answer1);
                console.log('New balance: $'.yellow + list[loggedInUser].balance);
                history.push({accountID: list[loggedInUser].accountID, balance: list[loggedInUser].balance, message: 'Withdrawn Amount of $' + answer1 + ' to account ' + list[loggedInUser].accountID +  '. Balance = $' + list[loggedInUser].balance});
                rl.close();
                functions.loginMenu();
            }
            else{
                console.log('Enter a positive amount! Make sure you withdraw less than or equal to your balance!'.red);
                rl.close();
                functions.withdraw();
            }
        });
    },

    //FUNCTION TO TRANSFER MONEY TO DIFFERENT ACCOUNTS
    transfer: function(){
        var rl = readline.createInterface(process.stdin, process.stdout);
        var idFound = false;
        var transferError = false;
        var transferUser = 0;

        console.log('');
        rl.question('Enter account ID that you would like to transfer to: '.green, (answer1) => {
            rl.question('Enter the amount you would like to transfer to '.green + answer1 + ': ', (answer2) => {
                for(var i=0; i<list.length; i++){
                    if(answer1 == list[i].accountID){
                        console.log('Account ID found'.yellow);
                        console.log('');
                        rl.close();
                        idFound = true;
                        transferUser = i;
                    }
                }

                if(idFound == false){
                    console.log('ACCOUNT ID NOT FOUND IN SYSTEM!!!'.red)
                    console.log('');
                    rl.close();
                    functions.loginMenu();
                }   

                if(idFound == true){
                    if(answer2 <= list[loggedInUser].balance && answer2 >= 0) {
                    list[loggedInUser].balance -= parseInt(answer2);
                    list[transferUser].balance += parseInt(answer2);
                    console.log('Amount transfered from your account: '.yellow + answer2);
                    console.log('New balance: $'.yellow + list[loggedInUser].balance);
                    console.log('');
                    history.push({accountID: list[loggedInUser].accountID, balance: list[loggedInUser].balance, message: 'Transfered Amount of $' + answer2 + ' to account ' + list[transferUser].accountID +  '. Balance = $' + list[loggedInUser].balance});
                    history.push({accountID: list[transferUser].accountID, balance: list[transferUser].balance, message: 'Recieved Transfered Amount of $' + answer2 + ' from account ' + list[loggedInUser].accountID +  '. Balance = $' + list[transferUser].balance});
                    rl.close();
                    transferError = true;
                    functions.loginMenu();
                    } 
                    
                    if(transferError == false){
                    console.log('Enter a positive amount! Make sure you transfer less than or equal to your balance!'.red);
                    console.log('');
                    rl.close();
                    functions.loginMenu();
                }
                }
                
            });
        });
    },

    //FUNCTION TO SHOW THE TRANSACTION HISTORY FOR EACH ACCOUNT
    showHistory: function(){
        console.log('+----------------------+'.blue);
        console.log('|        HISTORY       |'.blue);
        console.log('+----------------------+'.blue);
        
        for(var i=0; i<history.length; i++){
            if(history[i].accountID == list[loggedInUser].accountID){
                console.log(history[i].message.magenta);
                console.log('');
            }
        }

        functions.loginMenu();
    }
}

module.exports = functions;
