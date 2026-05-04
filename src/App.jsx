import { useState } from "react";
import Kundeform from "./components/Kundeform";
import Kundeliste from "./components/Kundeliste";
import Ordreform from "./components/Ordreform";
import Ordreliste from "./components/Ordreliste";

export default function App() {

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Kunder & Ordrer</h1>

      <div style={styles.section}>
        <Kundeform onAddCustomer={addCustomer} />
        <Kundeliste
          customers={customers}
          selectedCustomerId={selectedCustomerId}
          onSelectCustomer={setSelectedCustomerId}
        />
      </div>

      {selectedCustomer && (
        <div style={styles.section}>
          <h2>Ordrer for: {selectedCustomer.name}</h2>

          <Ordreform
            customerId={selectedCustomerId}
            onAddOrder={addOrder}
          />

          <Ordreliste orders={customerOrdersList} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    padding: "20px"
  },
  title: {
    textAlign: "center",
    marginBottom: "30px"
  },
  section: {
    marginBottom: "40px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fafafa"
  }
};

/*
Eksempler på data:

customers (Set)
┌──────────────────────────────────────────────┐
│ { id: 101, name: "Morten" }                   │
│ { id: 102, name: "Ida" }                     │
│ { id: 103, name: "Pernille" }                 │
└──────────────────────────────────────────────┘

orders (Set)
┌──────────────────────────────────────────────┐
│ { id: 201, description: "Laptop" }           │
│ { id: 202, description: "Skærm" }            │
│ { id: 203, description: "Mus" }              │
│ { id: 204, description: "Tastatur" }         │
└──────────────────────────────────────────────┘

customerOrders (Map<customerId → Set<orderId>>)
┌───────────────┬──────────────────────────────┐
│ 101 (Morten)  │ Set { 201, 202 }             │
│ 102 (Ida)     │ Set { 203 }                  │
│ 103 (Pernille)│ Set { 204 }                  │
└───────────────┴──────────────────────────────┘

*/