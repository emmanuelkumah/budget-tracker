import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions, removeTransaction }) {
  return (
    <div>
      <h1 className="transactionHeading">Transaction History</h1>
      {transactions.length === 0 ? (
        <p>No transaction, add transaction to get started</p>
      ) : (
        <ul className="list">
          {transactions.map((transaction, index) => {
            return (
              <Transaction
                key={index}
                item={transaction.item}
                id={transaction.id}
                amount={transaction.amount}
                removeTransaction={removeTransaction}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
