// src/hooks/useUsers.js
import { useEffect, useState } from "react";
import * as api from "../api/userService";

/**
 * Custom hook to manage users state and API calls.
 * Keeps local state in sync after simulated API operations.
 */
export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null); // success / info feedback

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.getUsers();
      setUsers(res.data);
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.createUser(userData);
      // API simulates creation and returns the sent object with an id.
      // Ensure unique id for local state: JSONPlaceholder returns id 11+ on POST typically,
      // but to be safe, assign maxId+1 if missing.
      const returned = res.data;
      const maxId = users.reduce((m, u) => Math.max(m, u.id || 0), 0);
      const userToAdd = { ...returned, id: returned.id || maxId + 1 };
      setUsers((prev) => [userToAdd, ...prev]);
      setMessage("User added successfully.");
      return userToAdd;
    } catch (err) {
      setError("Failed to add user. Please try again.");
      throw err;
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 2500);
    }
  };

  const editUser = async (id, updatedData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.updateUser(id, updatedData);
      const returned = res.data;
      setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...returned } : u)));
      setMessage("User updated successfully.");
      return returned;
    } catch (err) {
      setError("Failed to update user. Please try again.");
      throw err;
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 2500);
    }
  };

  const deleteUser = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await api.deleteUserApi(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      setMessage("User deleted.");
    } catch (err) {
      setError("Failed to delete user. Please try again.");
      throw err;
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 2000);
    }
  };

  const getUserById = (id) => users.find((u) => Number(u.id) === Number(id));

  return {
    users,
    loading,
    error,
    message,
    fetchUsers,
    addUser,
    editUser,
    deleteUser,
    getUserById,
  };
}
