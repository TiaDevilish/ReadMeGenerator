function generateMarkdown(data, avatar, email) {
  return `
  # Project Title:
  ${data.title} ![GitHub license](https://img.shields.io/github/v/TiaDevilish/ReadMeGenerator)
  
  ## Installation process needed to run the program:
  ${data.install}
  
  ## How to run the project?
  ${data.runproject}
  
  ## What is the usage of this project?
  ${data.usage}

  ${avatar}

  ## Contributors
  ${data.credits}
  
  ## Email me at:
  ${email}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
