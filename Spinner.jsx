// src/components/common/Spinner.jsx
import React from "react";

export default function Spinner() {
  return (
    <div className="spinner">
      <div className="dot" />
      <style jsx="true">{`
        .spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px 0;
        }
        .dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #333;
          animation: pulse 0.9s infinite ease-in-out;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.5); opacity: 0.6; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
