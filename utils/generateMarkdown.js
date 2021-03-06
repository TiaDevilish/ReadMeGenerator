function generateMarkdown(data, avatar, email) {
  return `
  # Project Title:
  ${data.title} ![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)(https://github.com/TiaDevilish/ReadMeGenerator/tree/master/utils/)
  
  ## Installation process needed to run the program:
  ${data.install}
  
  ## How to run the project?
  ${data.runproject}
  
  ## What is the usage of this project?
  ${data.usage}

  ## Contributors:
  ${data.credits}
  
  ## Email me at:
  ${email}

  ![alt](${avatar})

  ## License
  (https://github.com/TiaDevilish/ReadMeGenerator/tree/master/utils/LICENSE)
`;
}

module.exports = generateMarkdown;
// ${data.license}