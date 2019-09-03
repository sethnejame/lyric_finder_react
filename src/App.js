import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Index from "./components/Index";
import Lyrics from "./components/Lyrics";
import { Provider } from "./components/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider>
      <Router>
        <>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </>
      </Router>
    </Provider>
  );
}

export default App;
