# Quality Assurance

## 1. About you

Tell us briefly (2-5 paragraphs) about your experience testing a commercial project.

- Company: Chartboost

  - Industry: Mobile Advertising
    Led quality checks for ad rendering across various devices, ensuring optimal performance and user experience.

- Company: Gartner (GetApp)

  - Industry: Advertising
    Focused on SEO checks and UX/UI validation of the https://www.getapp.com platform.

- Company: Quad
  - Industry: Printing / Advertising
    Led quality checks of internal web applications tools to support production process, including printing books.


![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTY0cDU5MTNkbGR1aHFqcTVvMzVhdTB1dWdiZTRtcXNobTFtZ3UzdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vNpHoJooVEMzfXzZqa/giphy.gif)

## 2. Manual testing

There's a simple Node.js bookshelf app in the `qa/` directory.

To run it:

1. [Install Node.js v20](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
2. `cd qa/`
3. `npm install`
4. `npm start`
5. The frontend will be running at http://localhost:5173/

Once the app is up and running, please perform manual adhoc testing:

- [x] Write up any bugs you find, as if you're raising a ticket - [here](./test-report.md)
- [x] Include repro steps
- [x] Test across multiple devices and browsers, and include this information where relevant - DONE included as precondition in bug report
- [x] Even if they're not strictly bugs, flag any parts of the UI/UX that feel like they could be improved, and provide a possible suggestion - DONE ass suggestions in the bug report

## 3. Automated testing

Please write some automated end-to-end tests for this app. - [here](cypress.md)

You **should**:

- [x] include simple instructions for running the tests, including installing any tools
- [x] write **failing** tests for the **two highest priority bugs**
- [x] explain why these are the highest priority bugs
- [x] write a **passing** test for a working feature
- [x] explain why this passing test is worthwhile
- [x] write robust, maintainable tests

You **may**:

- [x] use any automated testing tools you like
