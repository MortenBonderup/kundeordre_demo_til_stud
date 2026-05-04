import { useState } from "react";

export default function Kundeform({ onAddCustomer }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!name.trim()) return;
    onAddCustomer(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>Tilføj Kunde</h3>
      <input
        style={styles.input}
        type="text"
        placeholder="Kundenavn"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <button style={styles.button}>Tilføj</button>
    </form>
  );
}

const styles = {
  form: { display: "flex", gap: "10px", alignItems: "center" },
  input: { padding: "8px", flex: 1 },
  button: { padding: "8px 12px", cursor: "pointer" }
};
