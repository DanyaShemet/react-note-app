import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NavBar } from "./components/NavBar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";

function App() {
  return (
    <AlertState>
      <BrowserRouter>
      <NavBar />
        <div className="container" style={{marginTop:20}}>
          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
