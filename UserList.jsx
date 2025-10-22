// src/components/users/UserList.jsx
import React from "react";
import UserItem from "./UserItem";

export default function UserList({ users, onDelete }) {
  if (!users || users.length === 0) {
    return <p>No users to display.</p>;
  }
  return (
    <div className="table-wrapper">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <UserItem key={u.id} user={u} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
