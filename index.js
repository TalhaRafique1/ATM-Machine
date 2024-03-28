#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userld",
        message: "Please enter your ID:",
    },
    {
        type: "number",
        name: "userPin",
        message: "Please enter your Pin:",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type:",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select your transaction type:", when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000], message: "Select your Amount:", when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your Amount:",
        when(answers) {
            return answers.transactionType;
            "Withdraw";
        },
    },
]);
if (answers.userld && answers.userPin) {
    const balance = Math.floor(Math.random() * 100000);
    console.log("Previous balance", balance);
    const enteredAmount = answers.amount;
    if (balance >= enteredAmount) {
        const remainingBalance = balance - enteredAmount;
        console.log("Your remaining balance is", remainingBalance);
    }
    else {
        console.log("Insufficient balance");
    }
}
