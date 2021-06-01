function renderLicenseBadge(license) {
    switch (license) {
        case "Apache":
            return `![Apache license](https://img.shields.io/badge/license-GNU-brightgreen)`
            break;
        case "GNU":
            return `![GNU license](https://img.shields.io/badge/license-GNU-brightgreen)`
            break;
        case "MIT license":
            return `![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)`
            break;

        default:
            return "";
            break;
    }
}

function renderLicenseLink(license) {
    switch (license) {
        case "Apache":
            return `[Apache license](https://www.apache.org/licenses/)`
            break;
        case "GNU":
            return `[GNU license](https://www.gnu.org/licenses/gql-3.0)`
            break;
        case "MIT license":
            return `[MIT license](https://opensource.org/licenses/MIT)`
            break;

        default:
            return "";
            break;
    }
}

function renderListenSection(license) {
    switch (license) {
        case "Apache":
            return ` Copyright [yyyy] [name of copyright owner]

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at
            
                http://www.apache.org/licenses/LICENSE-2.0
            
            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.`
            break;
        case "GNU":
            return `Copyright (C) <year>  <name of author>
            
            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU General Public License as published by
            the Free Software Foundation, either version 3 of the License, or
            (at your option) any later version.
        
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU General Public License for more details.
        
            You should have received a copy of the GNU General Public License
            along with this program.  If not, see <https://www.gnu.org/licenses/>`
            break;
        case "MIT license":
            return `Copyright (C)  <YEAR>  <COPYRIGHT HOLDER>
            
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
            break;

        default:
            return "";
            break;
    }
}

function generateMarkdown(answers) {
    return `# ${answers.title}
    
## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.installation}

## License
${renderLicenseBadge(answers.licenseBadge)}
${renderLicenseLink(answers.licenseBadge)}
${renderListenSection(answers.licenseBadge)}

## Contributing
${answers.contributing}

## Tests
${answers.test}

## Question
For questiond or concerns regarding this project please contact the author of this Github via: https://github.com/${answers.questions}
`;
}

module.exports = generateMarkdown;