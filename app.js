import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Enter your first number:",
    }, {
        name: "num2",
        type: "number",
        message: "Enter your second number:",
    }, {
        name: "operation",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division", "reverse"],
        message: "Enter your Age:",
    },
]);
//console.log(answers);
if (answers.operation === "addition") {
    console.log(`the sum of two numbers = ${answers.num1 + answers.num2}`);
}
else if (answers.operation === "subtraction") {
    console.log(`the difference of two numbers = ${answers.num1 - answers.num2}`);
}
else if (answers.operation === "multiplication") {
    console.log(`the multiply of two numbers = ${answers.num1 * answers.num2}`);
}
else if (answers.operation === "division") {
    console.log(`the division of two numbers = ${answers.num1 / answers.num2}`);
}
else if (answers.operation === "reverse") {
    console.log(`the division of two numbers = ${answers.num1 % answers.num2}`);
}
;
//console.log(chalk.greenBright("Insha Allah, in " + (80 - answers.age) + " years you will be 80 years old."));
