#! /usr/bin/env node
import inquirer from "inquirer";
console.log(" Wellcome to code with maham - Cli Number Guessing Game");
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1to 5):",
    },
]);
if (answer.userGuessedNumber === randomnumber) {
    console.log("congratulation ! You guess a correct Number.");
}
else {
    console.log("Sorry You guess a wrong Number.");
}