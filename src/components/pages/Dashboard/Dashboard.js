import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Balance from "../../Transactions/Balance";
import TransactionForm from "../../Transactions/TransactionForm";
import "../../../App.css";
import IncomeExpense from "../../Transactions/IncomeExpense";
import TransactionList from "../../Transactions/TransactionList";

function Dashboard({ user, handleLogOut }) {
  //define the initial state
  const initialState = [
    // { id: 1, item: "Grocery", amount: 20 },
    // { id: 2, item: "Transportation", amount: 50 },
  ];

  const [transactions, setTransactions] = useState(initialState);

  //remove a transction
  const removeTransaction = (id) => {
    //filter the transactions
    const results = transactions.filter((transaction) => transaction.id !== id);
    //update the transactions with the results
    setTransactions(results);
  };

  //redirect user to home page after log out
  let history = useHistory();

  const redirect = () => {
    //logout user
    handleLogOut();
    //redirect user to home page after log out
    history.push("/");
  };
  return (
    <>
      <main>
        <section className="app__container">
          <header className="header__container">
            <div className="intro_container">
              <img
                src="https://source.unsplash.com/PK_t0Lrh7MM"
                className="intro_img"
                alt="intro-user"
              />
              <div className="intro_message">
                <h2>Hi , {user.displayName}</h2>
                <p>Here is your spending dashboard</p>
              </div>
            </div>

            <Balance transactions={transactions} />
            <IncomeExpense transactions={transactions} />
          </header>
          <TransactionList
            transactions={transactions}
            removeTransaction={removeTransaction}
          />
          <TransactionForm
            transactions={transactions}
            setTransactions={setTransactions}
          />
          <button onClick={redirect} className="app__logout">
            Log out
          </button>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
