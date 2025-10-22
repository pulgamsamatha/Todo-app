// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import useUsers from "./hooks/useUsers";

import HomePage from "./pages/HomePage";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";
import UserDetailsPage from "./pages/UserDetailsPage";

import "./index.css";

function App() {
  const { users, loading, error, message, addUser, editUser, deleteUser, getUserById } = useUsers();

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    await deleteUser(id);
  };

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={
            <HomePage
              users={users}
              loading={loading}
              error={error}
              onDelete={handleDelete}
              message={message}
            />
          } />
          <Route path="/add-user" element={<AddUserPage addUser={addUser} />} />
          <Route path="/edit-user/:id" element={
            <EditUserPage getUserById={getUserById} editUser={editUser} loading={loading} error={error} />
          } />
          <Route path="/users/:id" element={<UserDetailsPage getUserById={getUserById} />} />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
