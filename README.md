# pa02
preact app two

Environment

node -v

  v10.1.0
npm -v

  6.4.1

vs code

  version: 1.27.2

bash

  GNU bash, version 4.3.48(1)-release (x86_64-pc-linux-gnu)

Create repository in Github

Clone from Github using vscode 

  Git:clone https://github.com/morandj/pa02.git
  (select top level folder, vscode create sub folder same name as repo)
  
Create default package.json

Add a .gitignore file

node_modules

build

Install development dependencies

Install Webpack

    npm install --save-dev webpack  webpack-cli --save-dev

    npm install --save-dev webpack-dev-server

Install Babel

npm install --save-dev babel-core babel-loader babel-plugin-transform-react-jsx babel-preset-env

Install Preact

npm install preact

Add npm scripts

  "scripts": {

    "build": "webpack",

    "start": "webpack-dev-server --progress --hot --inline"

Add webpack configuration

webpack-config.js

Add src folder

Add index.html in /src

Add index.js in /src

Add /src/components

Add hello.js in /src/components

Add app.js in /src/components


note: HMR preact

import reactHotLoader from 'react-hot-loader'
import preact from 'preact'
 
reactHotLoader.preact(preact)
