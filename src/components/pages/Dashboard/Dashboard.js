import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Balance from "../../Transactions/Balance";
import TransactionForm from "../../Transactions/TransactionForm";
import "../../../App.css";
import IncomeExpense from "../../Transactions/IncomeExpense";
import TransactionList from "../../Transactions/TransactionList";
import fire from "../../../services/firebase";
import userIcon from "./userIcon.png";

function Dashboard({ user, handleLogOut }) {
  //define the initial state

  const [transactions, setTransactions] = useState([]);

  //Access the db  and fetch the collection
  useEffect(() => {
    const unsubscribe = fire
      .firestore()
      .collection("users")
      .doc(user.uid) // authenticated users' id
      .collection("transactions")
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //update transaction state
        setTransactions(data);
      });
  }, []);

  //remove a user's transction
  const removeTransaction = (id) => {
    fire
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("transactions")
      .doc(id)
      .delete();
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
                src={userIcon}
                className="intro_img"
                alt="intro-user"
                width="90px"
                height="90px"
              />
              <div className="intro_message">
                <h2>Hi, {user.displayName}</h2>
                <p className="intro-msg-subtext">
                  Here is your transactions dashboard
                </p>
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
            userId={user.uid}
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
