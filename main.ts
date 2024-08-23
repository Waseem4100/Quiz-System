
import inquirer from"inquirer"
import chalk from "chalk"

let points = 0
// Display welcome message and quiz instructions

console.log(chalk.blue("welcome to the Typescript Quiz !\n"))
console.log(chalk.blue("Each question is worth one point"))
console.log(chalk.blue("you are required a minimum of 4 points to pass the Quiz\n"))

// ------- starting confirmation-----------
let confirmation = await inquirer.prompt([{
    type: "confirm",
    name: "confirmation",
    message: "Press Enter to start the quiz",
    default : true,
}])

if (!confirmation.confirmation) {
    console.log(chalk.red("Quiz cancelled!"))
    process.exit()
    
}


let question_1 = await inquirer.prompt ([{
    type:"list",
    name:"one",
    message:chalk.green("Which of the following is the correct way to declare a variable using let in TypeScript?\n"),
    choices:["A. let x: number = 10",
             "B. let x number = 10",
             "C. let x := 10",
             "D. let x: 10",]
}])
 

if(question_1.one == "A. let x: number = 10" ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)

let question_2 = await inquirer.prompt ([{
    type:"list",
    name:"two",
    message:chalk.green(`What will be the output of the following TypeScript code?\n
typescript\n
Copy code\n
const y = 10;\n
y = 20;\n
console.log(y);\n`),
    choices:["A. 10",
             "B. 20",
             "C. undefined",
             "D. error",]
}]) 
if (question_2.two === "D. error") {
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)


let question_3 = await inquirer.prompt ([{
    type:"list",
    name:"three",
    message:chalk.green("How do you define a function with a return type number in TypeScript?\n"),
    choices:["A. function myFunction(): number { return 5; }",
             "B. function myFunction() number { return 5; }",
             "C. func myFunction(): number { return 5; }",
             "D. function myFunction(): Number { return 5; }",]
}])

if(question_3.three === "A. function myFunction(): number { return 5; }" ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_4 = await inquirer.prompt ([{
    type:"list",
    name:"four",
    message:chalk.green("Which of the following correctly declares a TypeScript object?\n"),
    choices:[`A. let obj: object = { name: "John" };`,
             `B. let obj = { name: "John" };`,
             `C. let obj: Object = { name: "John" };`,
             `D. All of the above`,]
}]) 
if(question_4.four === `D. All of the above` ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_5 = await inquirer.prompt ([{
    type:"list",
    name:"five",
    message:chalk.green(" Which of the following is a valid tuple in TypeScript? \n"),
    choices:[`A. let tuple: [string, number] = ["hello", 10];`,
             `B. let tuple = ["hello", 10];`,
             `C. let tuple: (string, number) = ["hello", 10];`,
             `D. let tuple: [string, number];`,]

}]) 
if(question_5.five === `A. let tuple: [string, number] = ["hello", 10];` ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)


let question_6 = await inquirer.prompt ([{
    type:"list",
    name:"six",
    message:chalk.green("How do you specify a parameter of type string in TypeScript?\n"),
    choices:[`A. function greet(name: string) {}`,
`B. function greet(name: String) {}`,
`C. function greet(name: any) {}`,
`D. function greet(name) {}`,]
}]) 
if(question_6.six === `A. function greet(name: string) {}` ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_7 = await inquirer.prompt ([{
    type:"list",
    name:"seven",
    message:chalk.green("Which of the following is not a valid TypeScript type? \n"),
    choices:[`A. string`,
`B. boolean`,
`C. integer`,
`D. any`,]
}]) 
if(question_7.seven === `C. integer` ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_8 = await inquirer.prompt ([{
    type:"list",
    name:"eight",
    message:chalk.green("What is the never type used for in TypeScript?\n"),
    choices:[`A. To specify a function that never returns`,
`B. To declare a variable that can hold any value`,
`C. To create an alias for a type`,
`D. To define a variable that is never initialized`,]
}]) 
if(question_8.eight === `A. To specify a function that never returns`  ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_9 = await inquirer.prompt ([{
    type:"list",
    name:"nine",
    message:chalk.green("What is function overloading in TypeScript?\n"),
    choices:[`A. Creating multiple functions with the same name but different implementations`,
`B. Creating a function that accepts a variable number of arguments`,
`C. Creating multiple functions with different names but the same implementation`,
`D. Creating a function that returns multiple values`,]
}]) 
if(question_9.nine === `A. Creating multiple functions with the same name but different implementations` ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_10 = await inquirer.prompt ([{
    type:"list",
    name:"ten",
    message:chalk.green("Which of the following is the correct way to declare a function with rest parameters in TypeScript?\n"),
    choices:[`A. function addNumbers(...numbers: number[]): number {}`,
`B. function addNumbers(numbers: ...number[]): number {}`,
`C. function addNumbers(...numbers: number): number {}`,
`D. function addNumbers(numbers: number[]): number {}`,]
}]) 
if(question_10.ten === `A. function addNumbers(...numbers: number[]): number {} `){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_11 = await inquirer.prompt ([{
    type:"list",///==============================
    name:"eleven",
    message:chalk.green("What does the null type represent in TypeScript?\n"),
    choices:[`A. A type that can have only the value null`,
`B. A type that can have any value`,
`C. A type that cannot have any value`,
`D. A type that represents absence of value`,]
}]) 
if(question_11.eleven === `A. A type that can have only the value null` ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_12 = await inquirer.prompt ([{
    type:"list",
    name:"twelve",
    message:chalk.green("Which of the following is a valid tuple type in TypeScript?\n"),
    choices:[`A. [string, number]`,
`B. (string, number)`,
`C. {string, number}`,
`D. <string, number`,]
}]) 
if(question_12.twelve ===`A. [string, number]` ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_13 = await inquirer.prompt ([{
    type:"list",
    name:"thirteen",
    message:chalk.green("Which of the following correctly declares an enum in TypeScript?\n"),
    choices:[`A. enum Color { Red, Green, Blue }`,
`B. enum Color { "Red", "Green", "Blue" }`,
`C. enum Color { 'Red', 'Green', 'Blue' }`,
`D. enum Color = { Red, Green, Blue }`,]
}]) 
if(question_13.thirteen === `A. enum Color { Red, Green, Blue }` ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_14 = await inquirer.prompt ([{
    type:"list",
    name:"fourteen",
    message:chalk.green("What is the purpose of using const in TypeScript?\n"),
    choices:[`A. To declare a variable whose value cannot be changed`,
`B. To declare a variable that can hold any value`,
`C. To declare a variable that is block-scoped`,
`D. To declare a variable that can be changed later`,]
}]) 
if(question_14.fourteen === `A. To declare a variable whose value cannot be changed`  ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_15 = await inquirer.prompt ([{
    type:"list",
    name:"fifteen",
    message:chalk.green("How do you declare an array of numbers in TypeScript?\n"),
    choices:[`A. let arr: number[] = [1, 2, 3];`,
`B. let arr: Array<number> = [1, 2, 3];`,
`C. Both A and B`,
`D. Neither A nor B`,]
}]) 

if(question_15.fifteen ===`C. Both A and B`   ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_16 = await inquirer.prompt ([{
    type:"list",
    name:"sixteen",
    message:chalk.green(`What will be the output of the following TypeScript code?\n
typescript\n
Copy code\n
let num: never;\n
num = 10;\n
console.log(num);?\n`),
    choices:[`A. 10`,
`B. undefined`,
`C. null`,
`D. Error`,]
}]) 
if(question_16.sixteen === `D. Error` ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_17 = await inquirer.prompt ([{
    type:"list",
    name:"seventeen",
    message:chalk.green("Which of the following is not a basic data type in TypeScript?\n"),
    choices:[`A. string`,
             `B. number`,
             `C. undefined`,
             `D. character `,]
}]) 
if(question_17.seventeen ===   `D. character ` ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_18 = await inquirer.prompt ([{
    type:"list",
    name:"eighteen",
    message:chalk.green("How do you define a function with an optional parameter in TypeScript?\n"),
    choices:[`A. function greet(name?: string) {}`,
`B. function greet(?name: string) {}`,
`C. function greet(name: string?) {}`,
`D. function greet(name: string = null) {}`,]
}]) 

    
if(question_18.eighteen === `A. function greet(name?: string) {}` ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_19 = await inquirer.prompt ([{
    type:"list",
    name:"ninteen",
    message:chalk.green(`What will be the output of the following TypeScript code?\n
typescript
Copy code\n
var x = 10;\n
if (true) {\n
 var x = 20;\n
}\n
console.log(x);\n`),
    choices:[`A. 10`,
`B. 20`,
`C. undefined`,
`D. Error`,]
}]) 
if(question_19.ninteen ===`B. 20`  ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)
let question_20 = await inquirer.prompt ([{
    type:"list",
    name:"twenty",
    message:chalk.green("Which of the following is the correct syntax to define a union type in TypeScript?\n"),
    choices:[`A. let value: string | number;`,
`B. let value = string | number;`,
`C. let value: (string | number);`,
`D. let value: [string | number];`,]
}]) 
if(question_20.twenty ===`A. let value: string | number;`  ){
    console.log(chalk.green("Correct Answer!"))
    points++ 

}
else(
    console.log(chalk.red("Incorrect Answer!"))
)

if(points >= 8){
    console.log(chalk.green("Congratulations! You passed the quiz."))
    console.log(chalk.green(`you answered ${points } questions correctly `))
}
else(
    console.log(chalk.red(`Sorry, you didn't pass the quiz.\n your final score is : ${points} `))

 )