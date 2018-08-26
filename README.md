# Personal website -v4
My personal portfolio website


[![node](https://img.shields.io/badge/node-v10.5.0-brightgreen.svg)](https://nodejs.org/en/)
[![npm](https://img.shields.io/badge/npm-v6.1.0-blue.svg)](https://www.npmjs.com/)



## Table of Contents
* [Quick Start](#quick-start)
* [Requirements](#requirements)
* [Instructions](#instructions)

## Quick Start
* Clone or download this repository
  ```
  git clone https://github.com/odelavia/react-od.com.git
  ```
* In your terminal, navigate to the root directory
  ```
  cd react-od.com
  ```
* Install dependencies
  ```
  npm install
  ```

### Development
* Run script for development build:
  ```
  npm run build:dev
  ```
* In browser, application is served at `http://localhost:8080`

### Production
* Add a `.env` file to the root of your directory
  * Add the following code to your `.env` file:
    ```
    PORT=5000
    SESSION_SECRET=<your_session_secret_here>
    ```
  * Add your own `SESSION_SECRET` value
* Run script to start up app:
  ```
  npm start
  ```
* `prestart` script will run and create `dist` directory with production build


## Requirements
* [Node](https://nodejs.org/en/) (v10+)
* [NPM](https://www.npmjs.com/) (v6+)


### Directory Structure
```
contractor-proposal-generator/             # application root directory
├── build-utils/                           # webpack utilities
│    └── webpack.common.js                 # base webpack configuration
├── client/                                # frontend directory
│    ├── src/                              # development code directory
│    │    ├── __tests__                    # jest testing directory
│    │    │    ├── NavBar.test.js          # NavBar component jest test test file
│    │    │    └── app.test.js             # initial test file
│    │    ├── actions/                     # 
│    │    │    ├── index.js                # 
│    │    │    ├── navBar.js               # 
│    │    │    └── types.js                # 
│    │    ├── assets/                      # 
│    │    ├── components/                  # react components directory
│    │    │    ├── about/                  # 
│    │    │    │    ├── About.js           # 
│    │    │    │    ├── AboutContainer.js  # 
│    │    │    │    ├── App.js             # 
│    │    │    │    ├── FileBodies.js      # 
│    │    │    │    ├── FileEnumeration.js # 
│    │    │    │    ├── FileTabs.js        # 
│    │    │    │    ├── IndexTab.js        # 
│    │    │    │    ├── Interests.js       # 
│    │    │    │    ├── Proficiency.js     # 
│    │    │    │    └── ReadMe.js          # 
│    │    │    ├── blog/                   # 
│    │    │    │    ├── Blog.js            # 
│    │    │    │    ├── BlogPostsData.json # 
│    │    │    │    └── RenderPost.js      # 
│    │    │    ├── common/                 # 
│    │    │    │    ├── AsyncComponent.js  # 
│    │    │    │    ├── Footer.js          # 
│    │    │    │    ├── NavBar.js          # 
│    │    │    │    └── OutsideAlerter.js  # 
│    │    │    ├── contact/                # 
│    │    │    │    ├── Contact.js         # 
│    │    │    │    ├── RenderField.js     # 
│    │    │    │    ├── Validate.js        # 
│    │    │    │    ├── Wizard.js          # 
│    │    │    │    ├── WizardFormPage1.js # 
│    │    │    │    ├── WizardFormPage2.js # 
│    │    │    │    └── WizardFormPage3.js # 
│    │    │    ├── projects/               # 
│    │    │    │    ├── ProjectsData.json  # 
│    │    │    │    ├── Projects.js        # 
│    │    │    │    └── RenderProject.js   # 
│    │    │    ├── Four04.js               # 
│    │    │    ├── Hero.js                 # 
│    │    │    ├── Home.js                 # 
│    │    │    └── Resume.js               # 
│    │    ├── loadingScreen/               # 
│    │    │    └── preloadingScreen.js     # 
│    │    ├── reducers/                    # 
│    │    │    ├── index.js                # 
│    │    │    └── navBar__reducer.js      # 
│    │    ├── routing/                     # 
│    │    │    └── appRoutes.js            # 
│    │    ├── store/                       # 
│    │    │    └── store.js                # 
│    │    ├── styles/                      # sass styles directory
│    │    │    ├── components/             # sass components directory
│    │    │    │    └── _app.scss          # initial styling for app component
│    │    │    ├── setup/                  # sass setup directory
│    │    │    │    ├── _base.scss         # base styling
│    │    │    │    └── _variables.scss    # sass variables
│    │    │    └── main.scss               # root sass file (import other files here)
│    │    ├── index.html                   # template HTML file
│    │    ├── index.js                     # application entry point
│    │    └── root.js                      # 
├── server/                                # backend directory
│    ├── middleware/                       # server middleware directory
│    │    ├── cors.js                      # CORS middleware
│    │    ├── index.js                     # middleware configuration file
│    │    └── session.js                   # express-session middleware
│    └── server.js                         # express server entry point
├── .babelrc                               # babel configuration file
├── bundle.js                              # 
├── .gitignore                             # 
├── bundle.js.map                          # 
├── CNAME                                  # 
├── index.html                             # 
├── package-lock.json                      # 
├── package.json                           # 
├── README.md                              # 
├── style.[hash].css                       # 
├── style.[hash].css.map                   # 
├── webpack.dev.js                         # development build webpack configuration
└── webpack.prod.js                        # production build webpack configuration
```

### Command Scripts
| npm <script>   |                     Function/Description                              |
| -------------- | --------------------------------------------------------------------- |
| prestart       | Run webpack production build script before express server             |
| start          | Starts app on express server at `localhost:5000`                      |
| test           | Runs all tests files (`.test.js` type)                                |
| test:verbose   | Displays individuals test results                                     |
| test:coverage  | Collects test coverage information and reports output                 |
| build:dev      | Runs webpack developement build (HMR enabled) at `localhost:8080`     |
| build:prod     | Runs webpack production build (`dist` directory created)              |


## Instructions
* Frontend

* Backend
  * Add a `.env` file to the root of your directory
    * Add the following code to your `.env` file:
      ```
      PORT=5000
      SESSION_SECRET=<your_session_secret_here>
      ```
    * Add your own `SESSION_SECRET` value
    * Edit .env variables however you see fit
    * Removing a variable from here may require changes throughout the app where `process.env` is called
* Testing
  * Run `npm test` to start all jest testing
  * Run `npm run test:verbose` to see jest testing details
  * Run `npm run test:coverage` to create coverage directory
    * Run `open coverage/lcov-report/index.html` to see jest testing coverage

