# README Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

- Built so user can generate basic README.md by answering a few questions through npm inquirer
- README docuaments are an important part of any repo and git

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Open console:

If no package.json file is present, type the command: `npm init` ,then: `npm install inquirer`

If package.json file is present then type the command: `npm install`

Below is video demonstrating the markdown generation:

https://drive.google.com/file/d/16qoigEXETBG6rqtcLhvu257zeHR2FH6n/view?usp=sharing

## Usage

Once installation is complete run: `node index.js`

![GIF of md document generated through the console](./img/README.md_Generator.gif)

## Credits

https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba - info on license badges

https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide - helped with the README guidelines

## License

MIT License

Copyright (c) 2021 Mark Lindskog

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features

- prompts will ask questions to help guide user to create basic README
- File will be generated/ overwritten if one already exists in generated folder
- Links to github, email, and license will be present in generated README
