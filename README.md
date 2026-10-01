# Backend Technical Assessment

**Central Student Government - Committee on Website Administration**

Thank you for applying to the Committee on Website Administration. This assessment is designed to be open and low-pressure so that we can learn how you think, how you solve problems, and how well you understand your own work.

This challenge is intentionally simple in scope: build a small but functional API for a todo list application called "NotATodoList".

---

## Overview

The goal of this assessment is to create a working RESTful API for a todo list application using Node.js and Express.

You are expected to build the backend for a simple todo app that supports:

- retrieving all todo items
- creating a new todo item
- updating an existing todo item
- deleting a todo item

The project is intentionally small, but the expectation is that your implementation is clean, logical, and understandable.

---

## The Task

Build a RESTful API for the "NotATodoList" app.

Your API should be served from the project in the `NotATodoList/` directory and should run on `http://localhost:3000`.

You should implement the following routes:

- `GET /` - return all todos
- `POST /` - create a new todo
- `PUT /:id` - update a todo by its ID
- `DELETE /:id` - delete a todo by its ID

The project already includes a basic Express app and a sample in-memory database. Your job is to fill in the missing logic. You will mostly be working inside `index.js`

---

## Requirements

Your solution should meet the following expectations:

1. Use Express to create the API.
2. Handle JSON request bodies correctly.
3. Return sensible HTTP status codes.
4. Keep todos in memory for the duration of the server session.
5. Use the existing `database.js` array as the starting data source.
6. Ensure the API behaves like a standard REST API.
7. Write code that is readable and explainable.

### Suggested behavior

- `GET /` should return the full list of todos in JSON format.
- `POST /` should accept an object like:
  ```json
  {
    "title": "Write a report",
    "completed": false
  }
  ```
  and add it to the list.
- `PUT /:id` should update the matching todo item and return the updated item.
- `DELETE /:id` should remove the matching todo item.
- If an item is not found, return an appropriate error response.
- If request data is invalid, return a client error response.

### Example data shape

Each todo item should look like this:

```json
{
  "id": 1,
  "title": "Learn HTML",
  "completed": true
}
```

---

## Project Setup

From the project root:

```bash
cd NotATodoList
npm install
npm start
```

The server should start on port `3000`.

---

## Test Scripts

The project includes helper scripts for checking the API endpoints.

```bash
npm run test:get
npm run test:post
npm run test:put
npm run test:delete
```

You can also run the full set:

```bash
npm run test:all
```

These scripts are intended to help verify that your API responds correctly to the required endpoints.

---

## Notes for Applicants

This challenge is meant to evaluate your understanding of:

- JavaScript and backend logic
- API design
- HTTP methods and status codes
- Data handling and validation
- Clean, maintainable code

You do not need to build a complicated product. Simplicity, correctness, and clarity are more important than flashy features.

---

## Use of AI

You may use AI for limited purposes only, such as:

- researching concepts or syntax
- checking error messages
- looking up implementation patterns

You may not use AI to write the assessment for you.

Your final code must be your own work, and you should be able to explain how it works.

---

## Panel Explanation

During the assessment, you may be asked to explain:

- how the API routes work
- how your data is stored and updated
- why you chose specific status codes
- how your code handles validation and errors
- what trade-offs you made when designing the API

The panel is interested in your reasoning, not just whether the app runs.

---

## Disqualification

You will be disqualified if:

- your code appears to have been written by AI, or
- you cannot explain your own code to the panel

Honest, straightforward work that you understand is always better than impressive work you cannot explain.

---

## Questions

If anything in this document is unclear, you are free to ask the panel. Do not hesitate to ask for clarification.

---

Best of luck, applicants!