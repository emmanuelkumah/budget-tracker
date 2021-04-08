import React from "react";

function IncomeExpense({ transactions }) {
  //get all amount from the transactions
  const amount = transactions.map((transaction) => transaction.amount);

  //get all positive values(income) from the amount
  const income = amount.filter((item) => item > 0);

  //sum all income
  const totalIncome = income
    .reduce((accumulator, currentValue) => (accumulator += currentValue), 0)
    .toFixed(2);

  // extract all negative values from the amount as expenses
  const expenses = amount.filter((item) => item < 0);

  //sum all the expenses
  const totalExpense = expenses
    .reduce((accumulator, currentValue) => (accumulator += currentValue), 0)
    .toFixed(2);

  return (
    <div>
      <section className="income-expense">
        <div className="income">
          <p>Income</p>
          <h3 className="money plus">+${totalIncome}</h3>
        </div>
        <div className="expenses">
          <p>Expenses</p>
          <h3 className="money minus">-${Math.abs(totalExpense)}</h3>
        </div>
      </section>
    </div>
  );
}

export default IncomeExpense;
