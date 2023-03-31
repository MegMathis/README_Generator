// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "Please enter your project title",
  },
  {
    name: "description",
    type: "input",
    message: "Please describe your project.",
  },
  {
    name: "installation",
    type: "input",
    message: "Please enter installation instructions",
  },
  {
    name: "license",
    type: "checkbox",
    message: "Please choose your license",
    choices: ["MIT", "ISC", "Apache", "GNU", "Other", "None"],
    validate: (projectLicense) => {
      if (projectLicense) {
        return true;
      } else {
        console.log("You must choose a license type");
        return false;
      }
    },
  },
  {
    name: "usage",
    type: "input",
    message: "Please describe the usage information",
  },
  {
    name: "contribution",
    type: "input",
    message: "Please enter contributor name(s) for this project",
  },
  {
    name: "tests",
    type: "input",
    message: "Please enter your testing instructions",
  },
  {
    name: "github",
    type: "input",
    message: "Please enter your GitHub UserName",
    validate: (gitHubInput) => {
      if (gitHubInput) {
        return true;
      } else {
        console.log("You must enter your GitHub UserName");
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "Please enter your email",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("You must enter your email");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
