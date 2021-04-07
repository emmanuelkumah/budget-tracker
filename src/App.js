import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/Home/Home";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
