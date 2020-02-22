function generateMarkdown(data) {
  return `
  # Project Title:
  ${data.title}
  
  ## Installation process needed to run the program:
  ${data.install}
  
  ## Running the tests
  
  Explain how to run the automated tests for this system
  
  ### Break down into end to end tests
  
  Explain what these tests test and why
  
  Give an example
  
  
  ### And coding style tests
  
  Explain what these tests test and why
  
  
  Give an example
  
  
  ## Deployment
  
  Add additional notes about how to deploy this on a live system
  
  ## Built With
  
  * [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
  * [Maven](https://maven.apache.org/) - Dependency Management
  * [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds
  
  ## Contributing
  
  Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.
  
  ## Versioning
  
  We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 
  
  ## Authors
  
  * **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)
  
  See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
  
  ## License
  
  This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
  



`;
}

module.exports = generateMarkdown;


// { username: 'TiaDevilish',
// title: 'ReadmeGen',
// install: 'Yes',
// usage: 'create readmes',
// credits: '' }



// # ${data.title}

// ## ${data.username}



// ### ${data.install}
// Live Happy is a project website that is supposed to bring to you positive, uplifting
// and funny content, while battling depression and relieving you from the daily stress.

// ### Contributors:
// ${data.credits}

// ### ${data.usage}: 
// * HTML, custom CSS, Bootstrap and jQuery were utilized in this project.
// * This project also utilizes the use of WEB API.
// * This project uses Live Server.
// * Fully responsive layout.


// ### The project has the fallowing features
// * An Index page
//     * This page has an easy navigation bar
//     * A carousel with beautiful images and inspiring quotes
//     * A hyperlink to our content through icons 
//     * Also a footer with links to social media


// <head>
// <link rel="stylesheet" href="/css/pdf.css">
// </head>
// <body>
// <h1 class="title">${data.title}</h1>

// </body>