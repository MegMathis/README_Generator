// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![license](https://img.shields.io/badge/License-${data.license}-ff69b4)](https://shields.io)

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [License](#license)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## License
  ${data.license}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  Any questions, please contact me at:
  - GitHub:
  [${data.github}](http://github.com/${data.github})
  - Email:
  [${data.email}](mailto:${data.email})`;
}

module.exports = generateMarkdown;
