// src/components/common/ErrorMessage.jsx
import React from "react";

export default function ErrorMessage({ message }) {
  if (!message) return null;
  return <div className="error-message">{message}
    <style jsx="true">{`
      .error-message {
        background: #ffe8e8;
        color: #b00020;
        padding: 10px 12px;
        border-radius: 6px;
        margin: 8px 0;
      }
    `}</style>
  </div>;
}
