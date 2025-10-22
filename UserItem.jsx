// src/components/users/UserItem.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function UserItem({ user, onDelete }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td className="actions">
        <Link to={`/users/${user.id}`} className="btn btn-small">Details</Link>
        <Link to={`/edit-user/${user.id}`} className="btn btn-small">Edit</Link>
        <button onClick={() => onDelete(user.id)} className="btn btn-small danger">Delete</button>
      </td>
    </tr>
  );
}
