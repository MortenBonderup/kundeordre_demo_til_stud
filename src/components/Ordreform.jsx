import { useState } from "react";

export default function Ordreform({ customerId, onAddOrder }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    onAddOrder(customerId, description);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <select style={styles.select} value={description} onChange={(e) => setDescription(e.target.value)}>
      <option value="">Vælg et produkt:</option>
      <option value="#101 Laptop">101 Laptop</option>
      <option value="#201 Keyboard">201 Keyboard</option>
      <option value="#301 Loudspeakers">301 Loudspeakers</option>
      <option value="#401 Ink-jet Printer">401 Ink-jet Printer</option>
      </select>
      <button style={styles.button}>Tilføj ordre</button>
    </form>
  );
}

const styles = {
  form: { display: "flex", gap: "10px", marginBottom: "20px", flexDirection: "column" },
  select: { padding: "8px", flex: 1 },
  button: { padding: "8px 12px", cursor: "pointer" }
};
