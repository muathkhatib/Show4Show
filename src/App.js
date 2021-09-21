import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { News, Kids,Movies,Sports,Music } from "./components/Routes";

function App() {
  return (
    <>
    <Router>
      <Header />
          <Switch>
            <Route exect path="/news" component={News} />
            <Route exect path="/movies" component={Movies}/>
            <Route exect path="/sport" component={Sports}/>
            <Route exect path="/kids" component={Kids} />
            <Route exect path="/music" component={Music}/>
          </Switch>
        </Router>
    </>
  );
}

export default App;
