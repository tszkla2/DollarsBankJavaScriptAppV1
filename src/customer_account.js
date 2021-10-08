var readline = require('readline');
var colors = require('colors');


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
            console.log(`You chose: ${choice}`.yellow);

            if(choice == 1){
                console.log('DEPOSIT'.yellow)
                rl.close();
            }

            else if(choice == 2){
                console.log('WITHDRAW'.yellow)
                rl.close();
            }

            else if(choice == 3){
                console.log('FUNDS TRANSFER'.yellow)
                rl.close();
            }

            else if(choice == 4){
                console.log('VIEW 5 RECENT TRANSACTIONS'.yellow)
                rl.close();
            }

            else if(choice == 5){
                console.log('DISPLAY CUSTOMER INFORMATION'.yellow)
                rl.close();
            }

            else if(choice == 6){
                console.log('SIGN OUT'.yellow)
                rl.close();
            }

            else if(choice < 1 || choice > 6) {
                console.log('INCORRECT NUMBER!!! '.red)
                console.log('');
                console.log('Enter Choice (1,2,3,4,5, or 6):'.green)
            }
        });
    
    

        