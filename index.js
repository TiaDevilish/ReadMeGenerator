const apiKey = require("./utils/api");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const convertFactory = require('electron-html-to');

const questions = [
{
    type: "input",
    message: "What is your github username?",
    name: "username"
},
{
    type: "input",
    message: "What is the project title?",
    name: "title"
},
{
    type:"input",
    message: "What is the installation process?",
    name: "install"
},
{
    type:"input",
    message: "Explain how to run your project.",
    name:"runproject"
},
{
    type:"input", 
    message: "What is the usage of this project?",
    name: "usage"
},
{
    type:"input",
    message: "Add other contributors besides yourself, if any:",
    name: "credits"
},
{
    type:"input",
    message: "What are the licenses used for this project?",
    name:" license"
}
];

function writeToFile(fileName, data) {
}

function init() {
inquirer.prompt(questions).then(function(res){
// console.log(res)
//make api call to get user info from github,get stars etc
apiKey.getUser(username);
//connected with the data that i get from the terminal

const markdown = generateMarkdown(res)
// console.log(markdown)
})
}

init();
