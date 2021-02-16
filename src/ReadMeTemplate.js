function ReadMeTemplate(data) {
  return `
  ${data.projectTitle}
    
  # Description 
    ${data.description}
    
    # Table of Contents
  - [Description](#description)
  - [Installation](#install)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Contributing](#contributing)

  # Installation
    ${data.install}

  # Usage
    ${data.usage}
    
  # Credits
    ${data.credits}

  # License
    This application is covered by ${data.license} license.

  # Features
    ${data.features}

  # Contributing
    ${data.contributing}
  `;
}
  
module.exports = ReadMeTemplate;