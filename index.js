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
    message: "Is there an installation process?",
    name: "install"
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
];

function writeToFile(fileName, data) {
}

function init() {
inquirer.prompt(questions).then(function(res){
console.log(res)
//make api call to get user info from github,get stars etc
//connected with the data that i get from the terminal

const markdown = generateMarkdown(res)
console.log(markdown)
})
}

init();
