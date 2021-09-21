import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getJsonList } from "iptv-list-to-json";
import { Header } from "./components/Header";
import {Main} from './components/Main'
import { News, Kids, Movies, Sports, General } from "./components/Routes";
import { Watcher } from "./context";
import './App.css'
function App() {
  const [watcherType, setWatcherType] = useState("general");
  const [playlist, setPlaylist] = useState([]);
  const [StreamLink, setStreamLink] = useState(
    "http://1hdru-hls-otcnet.cdnvideo.ru/onehdmusic/tracks-v1a1/index.m3u8"
  );
  useEffect(() => {
    fetch(`https://iptv-org.github.io/iptv/categories/${watcherType}.m3u`).then(
      (playlist) =>
        playlist
          .text()
          .then((text) => getJsonList(text))
          .then((data) => setPlaylist(data))
    );
    return () => setPlaylist([]);
  }, [watcherType]);
  return (
    <Watcher.Provider
      value={{
        watcherType,
        setWatcherType,
        playlist,
        StreamLink,
        setStreamLink,
      }}
    >
      <Router>
        <Header />
        <Main/>
        <Switch>
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
