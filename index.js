const api = require("./utils/api");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const username = require("./utils/api")
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
    message: "Add contributors to this project:",
    name: "credits"
},
{
    type:"input",
    message: "What are the licenses used for this project?",
    name:" license"
}
];



function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, function(err){
        if(err)throw err
    })
}

function init() {
inquirer.prompt(questions).then(function(res){
api.getUser(res.username).then(function({email,avatar_url}){
    const markdown = generateMarkdown(res,avatar_url, email)
    writeToFile("README.md", markdown)
}).catch(function(err){
    console.log("err", err)
  })
})
}

init();

