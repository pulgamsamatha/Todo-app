// src/components/users/UserForm.jsx
import React, { useState, useEffect } from "react";

/**
 * UserForm is reusable for Add and Edit.
 * props:
 * - initialData: object with fields (name, email, phone, username, website)
 * - onSubmit: async function that accepts form data
 * - submitLabel: string
 */
export default function UserForm({ initialData = {}, onSubmit, submitLabel = "Save" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    website: "",
  });

  useEffect(() => {
    setForm((f) => ({ ...f, ...initialData }));
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation
    if (!form.name || !form.email) {
      alert("Please provide name and email.");
      return;
    }
    onSubmit(form);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={form.name || ""} onChange={handleChange} />
      </label>

      <label>
        Email
        <input name="email" type="email" value={form.email || ""} onChange={handleChange} />
      </label>

      <label>
        Phone
        <input name="phone" value={form.phone || ""} onChange={handleChange} />
      </label>

      <label>
        Username
        <input name="username" value={form.username || ""} onChange={handleChange} />
      </label>

      <label>
        Website
        <input name="website" value={form.website || ""} onChange={handleChange} />
      </label>

      <div style={{ marginTop: 12 }}>
        <button type="submit" className="btn">{submitLabel}</button>
      </div>
    </form>
  );
}
