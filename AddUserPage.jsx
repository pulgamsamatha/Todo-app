

// src/pages/AddUserPage.jsx
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import UserForm from "../components/users/UserForm";
import ErrorMessage from "../components/common/ErrorMessage";

export default function AddUserPage() {
  const navigate = useNavigate();
  const { addUser, error } = useUsers();

  const handleAdd = async (data) => {
    const created = await addUser(data);
    // Navigate to details or home—requirement says home update immediately
    navigate(`/users/${created.id}`);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Add User</h1>
        <Link to="/" className="btn btn--secondary">← Back</Link>
      </header>
      <ErrorMessage message={error} />
      <UserForm onSubmit={handleAdd} submittingLabel="Create User" />
    </div>
  );
}
