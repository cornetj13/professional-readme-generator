// Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdownText = `# ${data.title}\n\n`;
  let markdownTable = '## Table of Contents\n\n';
  let markdownDescription = '';
  let markdownInstall = '';
  let markdownUsage = '';
  let markdownCredit = '';
  let markdownContribute = '';
  let markdownTest = '';
  let markdownQuestions = '';
  let markdownGithub = '';
  let markdownEmail = '';

  let markdownBadge = `![GitHub License](https://img.shields.io/badge/License-${data.license}-green?style=plastic)\n\n`

  if(data.description !== '') {
    markdownDescription = `## Description\n\n${data.description}\n\n`;
  };

  if(data.install !== '') {
    markdownInstall = `## Installation\n\n${data.install}\n\n`;
    markdownTable += `- [Installation](#installation)\n`;
  };

  if(data.usage !== '') {
    markdownUsage = `## Usage\n\n${data.usage}\n\n`;
    markdownTable += `- [Usage](#usage)\n`
  };

  if(data.credit !== '') {
    markdownCredit = `## Credits\n\n${data.credit}\n\n`;
    markdownTable += `- [Credits](#credits)\n`
  };

  if(data.contribute !== '') {
    markdownContribute = `## Contribute\n\n${data.contribute}\n\n`;
    markdownTable += `- [Contribute](#contribute)\n`
  };

  if(data.test !== '') {
    markdownTest = `## Tests\n\n${data.test}\n\n`;
    markdownTable += `- [Tests](#tests)\n`
  };

  if(data.github !== '' || data.email !== '') {
    markdownQuestions = `## Questions\n\n`;
    markdownTable += `- [Questions](#questions)\n`
    if(data.github !== '') {
      markdownGithub = `Find my GitHub at: [GitHub Profile](https://github.com/${data.github})\n\n`;
    };
    if(data.github !== '') {
      markdownEmail = `Email me at: ${data.email}\n\n`;
    };
  };

  markdownLicense = `## License\n\nThis source code is licensed under the ${data.license} license found in the
  LICENSE file in the root directory of this source tree.\n\n`;
  markdownTable += `- [License](#license)\n`
  

  markdownText += markdownBadge;
  markdownText += markdownDescription;
  markdownText += markdownTable;
  markdownText += markdownInstall;
  markdownText += markdownUsage;
  markdownText += markdownCredit;
  markdownText += markdownContribute;
  markdownText += markdownTest;
  markdownText += markdownQuestions;
  markdownText += markdownGithub;
  markdownText += markdownEmail;
  markdownText += markdownLicense;

  return markdownText;
};

module.exports = generateMarkdown;
