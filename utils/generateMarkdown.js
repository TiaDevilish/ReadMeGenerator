function generateMarkdown(data) {
  return `




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