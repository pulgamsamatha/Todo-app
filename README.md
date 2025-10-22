# User Management CRUD App

## 1. Objective
The goal of this assignment is to build a complete CRUD (Create, Read, Update, Delete) application using **React**. You will manage a list of users by interacting with a public REST API. This project tests your understanding of React fundamentals, state management, API communication, routing, and modern web development practices.

---

## 2. Core Tasks & API Endpoints
We use the [JSONPlaceholder API](https://jsonplaceholder.typicode.com), a free fake online REST API for testing and prototyping.

**API Base URL:** `https://jsonplaceholder.typicode.com`

### 2.1 Fetch Users (READ)
- **Task:** Fetch a list of users and display them in a table or list.
- **Endpoint:** `GET /users`
- **Display:** Each user entry shows **Name**, **Email**, and **Phone Number**.

### 2.2 Create User (CREATE)
- **Task:** Implement a form to add a new user. Submitting the form sends the new user's data to the API.
- **Endpoint:** `POST /users`
- **Note:** The API simulates creation and returns the object you sent. Add the newly created user to your app's state so it appears in the list.

### 2.3 Update User (UPDATE)
- **Task:** Add an "Edit" button to each user. Clicking it opens a form pre-filled with that user's data. Submitting updates the user's information.
- **Endpoint:** `PUT /users/:id` (e.g., `/users/1`)
- **Note:** Update the user in the app's state to reflect changes immediately.

### 2.4 Delete User (DELETE)
- **Task:** Add a "Delete" button to each user. Clicking it removes the user.
- **Endpoint:** `DELETE /users/:id` (e.g., `/users/1`)
- **Note:** Remove the user from the app's state so they no longer appear in the list.

---

## 3. Technical Requirements

### 3.1 Framework and Core Concepts
- **React**: Build the app with React.
- **Functional Components & Hooks**: Use functional components and React Hooks (`useState`, `useEffect`, `useParams`, etc.). Class components are **not allowed**.

### 3.2 Routing
- Use **react-router-dom** for navigation.
- Routes:
  - Main user list: `/`
  - Create user: `/add-user`
  - Edit user: `/edit-user/:id`

### 3.3 Styling and Responsiveness
- **CSS:** Use plain CSS, CSS Modules, SASS, Tailwind, or Material-UI.
- **Responsiveness:** The layout should work seamlessly on **desktop and mobile devices**.

### 3.4 Error Handling & User Feedback
- **API Errors:** Notify users if an API call fails (e.g., "Failed to fetch users. Please try again.").
- **User Feedback:** Show confirmations for actions like create, update, or delete.

### 3.5 Code Quality
- **Comments:** Write clear comments explaining complex logic.
- **Structure:** Maintain a clean and organized project structure (see below).

---

## 4. Advanced Features (Bonus)
- **Loading States:** Show a spinner or skeleton while fetching data.
- **TypeScript:** Convert the project to TypeScript for static typing and better code quality.

---


## 5. Getting Started & Tooling

### Initialize Project
```bash
# For JavaScript
npx create-react-app user-management-app

# For TypeScript (Bonus)
npx create-react-app user-management-app --template typescript
Navigate to Directory
bash
Copy code
cd user-management-app
Install Dependencies
bash
Copy code
npm install axios react-router-dom
7. Usage
Start the development server:

bash
Copy code
npm start
Open the app in your browser at http://localhost:3000.

Navigate between pages to view, create, edit, and delete users.

Observe API calls in action and state updates reflected immediately.

