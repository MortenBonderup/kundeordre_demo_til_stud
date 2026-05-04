export default function Ordreliste({ orders }) {
  return (
    <div>
      <h3>Ordrer</h3>
      {orders.length === 0 && <p>Ingen ordrer for denne kunde.</p>}
      <ul style={styles.list}>
        {orders.map((o) => (
          <li key={o.id} style={styles.item}>
            {o.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  list: { listStyle: "none", padding: 0 },
  item: {
    padding: "10px",
    border: "1px solid #ccc",
    marginBottom: "5px",
    borderRadius: "5px"
  }
};
