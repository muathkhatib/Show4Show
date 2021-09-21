import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getJsonList } from "iptv-list-to-json";
import { Header } from "./components/Header";
import { News, Kids, Movies, Sports, General } from "./components/Routes";
import { Watcher } from "./context";
function App() {
  const [watcherType, setWatcherType] = useState("general");
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    fetch(`https://iptv-org.github.io/iptv/categories/${watcherType}.m3u`)
    .then((playlist) =>playlist.text()
    .then((text) => getJsonList(text))
    .then((data) => setPlaylist(data))
    );
    return () => setPlaylist([]);
  }, [watcherType]);
  return (
    <Watcher.Provider value={{ watcherType, setWatcherType, playlist}}>
      <Router>
        <Header />
        <Switch>
          <Route exect path="/" component={General} />
          <Route exect path="/General" component={General} />
          <Route exect path="/news" component={News} />
          <Route exect path="/movies" component={Movies} />
          <Route exect path="/sport" component={Sports} />
          <Route exect path="/kids" component={Kids} />
        </Switch>
      </Router>
    </Watcher.Provider>
  );
}

export default App;
