import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
    </div>
  </Router>
)

export default App;