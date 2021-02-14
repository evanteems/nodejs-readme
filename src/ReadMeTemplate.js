function ReadMeTemplate(data) {
    return `
    <h1 align='center'>${data.projectTitle}</h1>
    
    ##DESCRIPTION
        ${data.description}
        
    ## TABLE OF CONTENTS
    - [Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Contribution](#contributing)
    -[Tests](#tests)
    
    ## Installation
        ${data.installation}
        
    ## Usage
        ${data.usage}
        
    ## Credit
        ${data.credits}
        
    ## License
        This application is covered by ${data.license} license.
        
    ## Badges
    
    ## Features
        ${data.features}
        
    ## Contribution
    
    ## Tests
    
    
    `;
}

module.exports = ReadMeTemplate;