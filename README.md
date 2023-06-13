[![Frontend CD](https://github.com/seeddhee/CSC_307_ToDoemon-/actions/workflows/azure-static-web-apps-gray-island-06e32071e.yml/badge.svg)](https://github.com/seeddhee/CSC_307_ToDoemon-/actions/workflows/azure-static-web-apps-gray-island-06e32071e.yml)

[![Backend CD](https://github.com/seeddhee/CSC_307_ToDoemon-/actions/workflows/michael-dev_taskemon-api2.yml/badge.svg)](https://github.com/seeddhee/CSC_307_ToDoemon-/actions/workflows/michael-dev_taskemon-api2.yml)

[![Node JS CI](https://github.com/seeddhee/CSC_307_ToDoemon-/actions/workflows/node.js.yml/badge.svg)](https://github.com/seeddhee/CSC_307_ToDoemon-/actions/workflows/node.js.yml)

# CSC_307_ToDoemon-

# Demo

[Here](https://youtu.be/MfEpXtCnHPY) is a link to a demo of Taskemon.

# Code Linter

In Taskemon, we will be implementing the Airbnb style guide:

- https://airbnb.io/javascript/react/

IDE Plugins that will be useful:

- ESLint
  - Simple install from Extensions if using VS Code
- Prettier - Code Formatter
  - Once installed from Extension, follow the instructions (for macOS):
    1. Code -> Settings -> Settings
    2. Check the 'Format On Save' option
    3. (Optional) If Step 2 doesn't work, might be due
       to conflicting formatters within your IDE. Another option
       that is possible in your settings is to set the Default
       Formatter to 'Prettier - Code Formatter'

# Navagation
npm install react-router react-icons


Icon gallery
https://react-icons.github.io/react-icons


react calendar
npm install --save \
  @fullcalendar/core \
  @fullcalendar/react \
  @fullcalendar/daygrid

# Project Blurb:

For the overwhelmed individual who needs extra motivation to get stuff done, the Taskemon is a productivity application that allows users to keep track of their daily tasks. Unlike Microsoft To Do, our product brings a gamified approach that allows users to feel rewarded for their completed tasks through virtual companions. 

# UI Prototype:

https://www.figma.com/file/46hGuVgBhqZlDLzligYqfO/Todo-Web?type=design&node-id=101-83&t=ScWzpH1ElqZcYvuT-0

Date Last Updated : 6/10/23

# Development environment set up:

# Built With:
- React 
- MUI
- Prettier (A mighty, modern linter that helps you avoid errors and enforce conventions in your styles).
To get a local copy up and running follow these simple example steps.

# Prerequisites for Development:
- A working browser application 
- VSCode or any other equivalent code editor
- Node Package Manager 

# Cloning the project

git clone https://github.com/seeddhee/CSC_307_ToDoemon-.git <Your-Build-Directory>

  
# Getting all packages and dependencies:
  
npm install (The package.json file provides a concise reference for all project dependencies needed for building the project.)

# Running
## To build the project run:
- npm run build

## To run the app locally
- npm start
- Executing the command will open the webpack-generated page on your localhost at port 3000, allowing you to easily view it in your browser.
  
## Unit-Testing
- npm run test
- This should run all unit test found in the _________ from the testbed folder.

# Wiki Page 
- [https://github.com/seeddhee/CSC_307_ToDoemon-.wiki.git](https://github.com/seeddhee/CSC_307_ToDoemon-/wiki)


# Deployments 
- Frontend: https://gray-island-06e32071e.3.azurestaticapps.net
- Backend: https://taskemon-api2.azurewebsites.net

## Troubleshooting Deployment
- Try loading the backend url before loading the frontend
- For the frontend, try navigating to the root URL and reloading

## Deployment Note
- The deployments are on the branch michael-dev, found at https://github.com/seeddhee/CSC_307_ToDoemon-/tree/michael-dev
- Now that we understand how to setup deployments, it would be relativly simple to set ones up for develop and/or main, but out of fear of breaking the project the night its due, we will be leaving the deployments on the michael-dev branch, but will insure that branch is up to date.

