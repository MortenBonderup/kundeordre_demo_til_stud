export default function Kundeliste({ customers, selectedCustomerId, onSelectCustomer }) {
  const list = Array.from(customers.values()); // alternativt: const list = [...customers.values()];


  return (
    <div>
      <h3>Kundeliste</h3>
      {list.length === 0 && <p>Ingen kunder endnu.</p>}
      <ul style={styles.list}>
        {list.map((c) => (
          <li
            key={c.id}
            style={{
              ...styles.item,
              background: c.id === selectedCustomerId ? "#d0ebff" : "white"
            }}
            onClick={() => onSelectCustomer(c.id)}
          >
            {c.name}<br/>
            <small>KundeId:{c.id}</small>
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
    borderRadius: "5px",
    cursor: "pointer"
  }
};
