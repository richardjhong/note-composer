# Note Composer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Note Composer Demo gif](./assets/images/demo.gif)


## Description
This app takes user input on the browser client and via the back end (Node.js and Express.js), contextual HTML routes will POST a new note, GET an existing note, or DELETE an existing note. 


## Technologies
This app is built with [Node.js](https://nodejs.org/en/), Node.js' native [filesystem](https://nodejs.org/api/fs.html) module, [Express](https://expressjs.com/) (version 4.18.2), and lastly [nodemon](https://www.npmjs.com/package/nodemon) (version 2.0.20) for convenience on restarting the server on fast iterative additions of code.


## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Architecture](#architecture)
  - [Screenshot](#screenshot)
  - [Live deployment](#deployment)
  - [License](#license)
  - [Improvements](#improvements)
  - [Questions](#questions)
  - [Addendum](#addendum)


## Installation

After cloning the repository, user should run the following command within the terminal:
```
npm install
```
Afterwards check towards the bottom within package.json; the user should see Express version 4.18.2 as a dependency and nodemon version 2.0.20 as a dependency.

```
...
  "dependencies": {
    "express": "^4.18.2",
    "nodemon": "^2.0.20"
  }
```

## Usage
After installing Express and nodemon, the user should run the following commands within the terminal:
```
npm run start
```
After running the command, the user should expect to see something similar within his/her terminal:

![screenshot](./assets/images/installation.png)

Next the user can navigate to the homepage of the app.

## Architecture
For this program, the front-end public folder was already created; however the back-end logic, components, and routes needed to completed and plugged into the front-end to create a cohesively working app. 

The back-end code uses server.js on the root level to start the server. Routes folder contains the router and performs the middleware and routing functions for retrieving notes from the mock database json, posting a new note, and deleting an existing note. Helpers contains more robust functionality built on filesystem's different methods of reading and writing to files. Lastly, uuid creates pseudo-random ids for any newly created note.

To tie both the front-end and back-end, a user interacts with the browser client and based on the interaction a specific route and request method are called. The server hosted locally then either retrieves data from the db.json file or creates new data and then writes to the db.json file. 

## Deployment
[Deployed on Heroku](https://note-composer.herokuapp.com/notes)


## Screenshot
![screenshot](./assets/images/screenshot.png)


## License
This app was licensed under the MIT License.


## Improvements
Creating unit tests to check each route would be beneficial to not have to manually use an API client such as Insomnia or Postman. 

Another improvement is to better account for uuid within notes.js post. With the current implementation, in an extreme scenario where every combination of characters from uuid.js's exported function is stored within the alreadyUsedUUID array in notes.js, the while loop within notes' post will never exit and lead to an infinite loop.


## Questions
Questions, comments, concerns? Send me an email at rhong24@gmail.com.

## Addendum
The screenshot and gif were created while [Dark Reader Chrome Extension](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh?hl=en-US) was enabled, giving a "dark theme". The base functionality of the app remains the same regardless.
