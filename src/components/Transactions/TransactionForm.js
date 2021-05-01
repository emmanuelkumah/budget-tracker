import React, { useState } from "react";
import firebase from "firebase";
import fire from "../../services/firebase";

function TransactionForm({ transactions, setTransactions, userId }) {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);

  //submit form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    fire
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("transactions")
      .add({
        item: item,
        amount: +amount,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((ref) => {
        console.log("Added doc with ID: ", ref.id);
      });

    // //clear input fields
    setItem("");
    setAmount(0);
  };
  return (
    <section>
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
    </section>
  );
}

export default TransactionForm;
