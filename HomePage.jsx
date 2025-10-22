// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import UserList from "../components/users/UserList";
import Spinner from "../components/common/Spinner";
import ErrorMessage from "../components/common/ErrorMessage";

export default function HomePage({ users, loading, error, onDelete, message }) {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Users</h1>
        <div>
          <Link to="/add-user" className="btn">+ Add User</Link>
        </div>
      </div>

      {message && <div className="toast">{message}</div>}
      <ErrorMessage message={error} />
      {loading ? <Spinner /> : <UserList users={users} onDelete={onDelete} />}
    </div>
  );
}
