import React from "react";
// import "./Transactions.css";

function Balance({ transactions }) {
  //get the  amount values from the transactions
  const amount = transactions.map((transaction) => transaction.amount);
  //sum the amount
  const totalAmount = amount
    .reduce((acc, currentValue) => {
      return (acc += currentValue);
    }, 0)
    .toFixed(2);
  return (
    <div className="blc-container">
      <p>Amount Available</p>
      <h1>Your balance is ${totalAmount}</h1>
    </div>
  );
}

export default Balance;
