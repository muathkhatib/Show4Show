import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { News, Kids, Movies, Sports, Music } from "./components/Routes";
import { Watcher } from "./context";
function App() {
  const [watcherType, setWatcherType] = useState("");
  console.log(watcherType)
  return (
    <Watcher.Provider value={{ watcherType, setWatcherType }}>
      <Router>
        <Header />
        <Switch>
          <Route exect path="/news" component={News} />
          <Route exect path="/movies" component={Movies} />
          <Route exect path="/sport" component={Sports} />
          <Route exect path="/kids" component={Kids} />
          <Route exect path="/music" component={Music} />
        </Switch>
      </Router>
    </Watcher.Provider>
  );
}

export default App;
