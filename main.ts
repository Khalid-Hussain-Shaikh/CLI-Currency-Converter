#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green.bold("\tWelcome to Khalid Shaikh - Currency Converter"))

//Currencies list 
let exchange_rate:any ={
"USD":1, //Base Currency
"EUR": 0.9,
"JYP":113,
"CAD":1.3,
"AUD":1.65,
"PKR":280
}

let user_answer = await inquirer.prompt([
    {
        type: "list",
        name:"from_currency",
        message: chalk.green.bold("Select the currency to convert from:"),
        choices: ["USD", "EUR","JYP","CAD","AUD","PKR"],
    },
    {
        type: "list",
        name:"to_currency",
        message: chalk.green.bold("Select the currency to convert into:"),
        choices: ["USD", "EUR","JYP","CAD","AUD","PKR"],
    },
    {
        type:"input",
        name: "amount",
        message: chalk.green.bold("Enter the amount to convert:")
    }
]);

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount =base_amount * to_amount ;

console.log(`Converted Amount = ${chalk.yellow(converted_amount.toFixed(2))}`)
