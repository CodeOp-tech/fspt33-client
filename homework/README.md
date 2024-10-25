# Full Stack To Do App

In this repository, you will use build the front end of full stack To Do app using React, and connect it to your back end.

## Objectives

- Create a front end.
- Connect to your API server to display and update your data.

## Setup

### Dependencies

Run `npm install` to install dependencies.

Run `npm run dev` to launch the app in your browser.

## Basic Requirements

### 1. Read through all the current code

- [ ] Review and try to understand what each line of code is doing: write comments if it helps you.
- [ ] Look at the docs and ask your instructor if you aren't sure!

### 2. Finish the front end

- [ ] Spend time reviewing the existing code in `client/src/App.jsx`.
- [ ] Finish populating `tasks` from the API call in `useEffect`.
  - Read about `useEffect` [in the React Docs](https://reactjs.org/docs/hooks-effect.html)
- [ ] Then, display your tasks in the front end. Each task should have the following:
  - The text of the task.
  - A strike through (using CSS) if the task is complete.
  - Two buttons:
    - One button to mark the task complete (this should call the updateTask function)
    - One button to delete the task (this should call the deleteTask function)
- [ ] Finish the updateTask function so it calls the server.
- [ ] Finish the deleteTask function so it calls the server.
- [ ] Add styling.

## Resources

- [Axios](https://axios-http.com/docs/intro)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React Documentation](https://react.dev/)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
