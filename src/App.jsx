import { useState } from "react";
import FeedbackItem from "./FeedbackItem"; // Child component ko import kiya

function App() {
  // States: Ek pure text input ke liye aur ek saare feedbacks ki list ke liye
  const [inputText, setInputText] = useState("");
  const [feedbackList, setFeedbackList] = useState([
    "Great app! Loved the clean interface. 👌",
    "The dark mode feature request from my side. 🌙"
  ]);

  // Event Handler: Jab user submit button dabayega
  const handleSubmit = (e) => {
    e.preventDefault(); // Page refresh hone se rokne ke liye
    if (inputText.trim() === "") return; // Khali text accept nahi karenge

    // Purani list mein naya feedback jodo aur input box khali karo
    setFeedbackList([inputText, ...feedbackList]);
    setInputText("");
  };

  // Inline CSS Styling Object
  const styles = {
    container: { maxWidth: "600px", margin: "50px auto", padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", textAlign: "center" },
    heading: { color: "#1a1a1a", marginBottom: "5px" },
    sub: { color: "#666", fontSize: "14px", marginBottom: "30px" },
    form: { display: "flex", gap: "10px", marginBottom: "30px" },
    input: { flex: 1, padding: "12px 15px", fontSize: "16px", borderRadius: "8px", border: "1px solid #ccc", outline: "none" },
    btn: { backgroundColor: "#007bff", color: "white", border: "none", padding: "12px 24px", fontSize: "16px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" },
    listContainer: { textAlign: "left", marginTop: "20px" },
    count: { color: "#666", fontWeight: "600", borderBottom: "2px solid #f0f2f5", paddingBottom: "10px" }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>💬 Simple Feedback App</h2>
      <p style={styles.sub}>Module 12: Components, Props & State Management</p>

      {/* Input Form (Controlled Component) */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Write your feedback here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)} // Event handling to update state
          style={styles.input}
        />
        <button type="submit" style={styles.btn}>Submit</button>
      </form>

      {/* Feedback List Display */}
      <div style={styles.listContainer}>
        <p style={styles.count}>Recent Feedbacks ({feedbackList.length})</p>
        {feedbackList.map((feedback, index) => (
          // Requirement: Displaying items using a Child Component and passing data via Props
          <FeedbackItem key={index} text={feedback} index={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default App;
