// src/pages/EditUserPage.jsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/users/UserForm";
import ErrorMessage from "../components/common/ErrorMessage";

export default function EditUserPage({ getUserById, editUser, loading, error }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = getUserById(id);

  const handleEdit = async (formData) => {
    try {
      await editUser(Number(id), formData);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) {
    return (
      <div className="page">
        <h3>User not found</h3>
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <h2>Edit User: {user.name}</h2>
      </div>
      <UserForm initialData={user} onSubmit={handleEdit} submitLabel="Update User" />
    </div>
  );
}
