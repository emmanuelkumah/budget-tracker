import React from "react";

function Transaction({ item, id, amount, removeTransaction }) {
  const sign = amount < 0 ? "-" : "+";
  //get only positive values for the amount

  return (
    <div>
      <li
        className={amount > 0 ? "plus" : "minus"}
        onClick={() => removeTransaction(id)}
      >
        {item}
        <span>
          {sign}${Math.abs(amount)}
        </span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  );
}

export default Transaction;
