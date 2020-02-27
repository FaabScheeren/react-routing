import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import DiscoverMoviesPages from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/discover" component={DiscoverMoviesPages} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}
