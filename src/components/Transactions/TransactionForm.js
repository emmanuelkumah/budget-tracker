import React, { useState } from "react";

function TransactionForm({ transactions, setTransactions }) {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);

  //submit form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    //pass the input field values to the transaction array
    setTransactions([
      ...transactions, //grab all the values of the transaction
      { id: Math.floor(Math.random() * 100), item: item, amount: +amount }, // add new transaction object
    ]);
    //clear input fields
    setItem("");
    setAmount(0);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-control">
          <label htmlFor="text" className="item__label">
            Item
          </label>
          <input
            type="text"
            placeholder="Enter item"
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount" className="amt__label">
            Amount <br /> (income +, expense -)
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button className="form-btn" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
