import React from "react";

// Functional Component receiving 'text' and 'index' as Props
function FeedbackItem({ text, index }) {
  const itemStyle = {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "12px",
    borderLeft: "5px solid #007bff",
    fontSize: "15px",
    color: "#333",
    display: "flex",
    gap: "10px"
  };

  const numberStyle = {
    fontWeight: "bold",
    color: "#007bff"
  };

  return (
    <div style={itemStyle}>
      <span style={numberStyle}>#{index}</span>
      <div>{text}</div>
    </div>
  );
}

export default FeedbackItem;
