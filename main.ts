#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk";



console.log(chalk.cyan.bold("\n\t Welcome to 'Alishba Meraj' - Currency convertor Application:\n"))

// define the list of currencies and their exchange rates
let  exchange_rate: any = {
    "USD": 1,  //Base Currency
    "EUR": 0.9, //European Currency (Euro)
    "JYP": 113, //Japenese currency (Yen)
    "CAD": 1.3, //Canadian Dollar
    "AUD": 1.65, //Australian Dollar
    "PKR": 277.70, //Pakistan Rupees)
    // Add more currencies and their exchange rates
}   

// promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.magenta.dim ("\n Select the currency to convert from:"),
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.dim("\n Select the currency to convert into:"),
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"],
    },
    {
        name: "amount",
        type: "input",
        message:chalk.magenta.dim("\nEnter the amount to convert:"),
    
    }
]);

//perform currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula of conversion 
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount
console.log(`\n\n\t Converted Amount = ${chalk.greenBright(converted_amount.toFixed(2))}\t\n`);

console.log(chalk.cyan.bold.italic(" Thank you for using our Currency convertor App. Have a great day!\n\t"));