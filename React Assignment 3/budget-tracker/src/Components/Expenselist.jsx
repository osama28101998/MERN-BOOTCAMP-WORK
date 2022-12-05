import React from "react";

const Expenselist = () => {
  const expenses = [
    { id: 1, name: "Shopping", cost: 50 },
    { id: 2, name: "Holiday", cost: 150 },
    { id: 3, name: "Transportation", cost: 60 },
    { id: 4, name: "Fuel", cost: 30 },
    { id: 5, name: "Child Care", cost: 100 },
  ];

  return (
    <div>
      {expenses.map((e) => {
        return (
          <div
            style={{
              border: "1px solid",
              padding: "1px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>{e.name}</p>
            <p>{e.cost}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Expenselist;
