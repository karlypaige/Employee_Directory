import React from "react";
import { BrowserRouter as Router, Route } from "../node_modules/react-router-dom";
import Header from "./components/Header";
import employee from "./pages/employee";

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route exact path="/" component={employee} />
    </div>
    </Router>
  );
}

export default App;
