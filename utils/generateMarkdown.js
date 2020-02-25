function generateMarkdown(data, avatar, email) {
  return `
  # Project Title:
  ${data.title}
  
  ## Installation process needed to run the program:
  ${data.install}
  
  ## How to run the project?
  ${data.runproject}
  
  ## What is the usage of this project?
  ${data.usage}

  ${avatar}

  ## Contributors
  ${data.credits}
  
  ##Email:
  ${email}
  
  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
