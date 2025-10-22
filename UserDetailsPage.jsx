// src/pages/UserDetailsPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

export default function UserDetailsPage({ getUserById }) {
  const { id } = useParams();
  const user = getUserById(id);

  if (!user) {
    return <div className="page"><h3>User not found</h3></div>;
  }

  return (
    <div className="page">
      <div className="page-header">
        <h2>User Details</h2>
        <Link to={`/edit-user/${user.id}`} className="btn">Edit</Link>
      </div>

      <div className="card">
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>

        {user.address && (
          <>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
          </>
        )}

        {user.company && <p><strong>Company:</strong> {user.company.name}</p>}
      </div>
    </div>
  );
}
