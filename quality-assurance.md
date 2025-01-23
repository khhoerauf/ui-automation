# Quality Assurance

## 1. About you

Tell us briefly (2-5 paragraphs) about your experience testing a commercial project.

- Company: Chartboost
Industry: Mobile Advertising
Led quality checks for ad rendering across various devices, ensuring optimal performance and user experience.

- Company: Gartner (GetApp): 
Industry: Advertising
Focused on SEO checks and UX/UI validation of the https://www.getapp.com platform.

- Company: Quad 
Industry: Printing / Advertising
Led quality checks of internal web applications tools to support production process, including printing books


## 2. Manual testing

There's a simple Node.js bookshelf app in the `qa/` directory.

To run it:

  1. [Install Node.js v20](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
  2. `cd qa/`
  3. `npm install`
  4. `npm start`
  5. The frontend will be running at http://localhost:5173/


Once the app is up and running, please perform manual adhoc testing:

  - [X] Write up any bugs you find, as if you're raising a ticket - [here](./qa/test-report.md)
  - [X] Include repro steps
  - [X] Test across multiple devices and browsers, and include this information where relevant - DONE included as precondition in bug report
  - [X] Even if they're not strictly bugs, flag any parts of the UI/UX that feel like they could be improved, and provide a possible suggestion - DONE ass suggestions in the bug report


## 3. Automated testing

Please write some automated end-to-end tests for this app.

You **should**:

  - [X] include simple instructions for running the tests, including installing any tools
  - [X] write **failing** tests for the **two highest priority bugs**
  - [X] explain why these are the highest priority bugs
  - [X] write a **passing** test for a working feature
  - [X] explain why this passing test is worthwhile
  - [X] write robust, maintainable tests

You **may**:

  - [X] use any automated testing tools you like
