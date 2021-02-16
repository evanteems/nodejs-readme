function ReadMeTemplate(data) {
    return `
    <h1 align='center'>${data.projectTitle}</h1>
    
    ## Description
        ${data.description}
        
    ## TABLE OF CONTENTS
    - [Description](#description)
    - [Installation](#install)
    - [Usage](#usage)
    - [License](#license)
    - [Contribution](#contribution)
    
    ## Installation
        ${data.install}
        
    ## Usage
        ${data.usage}
        
    ## Credit
        ${data.credits}
        
    ## License
        This application is covered by ${data.license} license.
        
    ## Features
        ${data.features}
        
    ## Contribution
        ${data.contribution}
`;
}

module.exports = ReadMeTemplate;