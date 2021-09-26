import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getJsonList } from "iptv-list-to-json";

import { Header } from "./components/Header";
import { Main, Loading } from "./components/Main";
import {
  News,
  Kids,
  Movies,
  Sports,
  General,
  Custom,
} from "./components/Routes";
import { PageNotFound } from "./components/Statments";

import { Watcher } from "./context";

function App() {
  const [watcherType, setWatcherType] = useState("general");
  const [playlist, setPlaylist] = useState([]);
  const [streamLink, setStreamLink] = useState("");
  const [filterChannels, setFilterChannels] = useState("");
  const [favoriteChannels, setFavoriteChannels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [playlistLink, setPlaylistLink] = useState(
    "https://iptv-org.github.io/iptv/categories/movies.m3u"
  );

  useEffect(() => {
    setLoading(true);
    fetch(playlistLink)
      .then((data) =>
        data
          .text()
          .then((text) => {
            console.log("text", text);
            return getJsonList(text);
          })
          .then((converted) => {
            console.log("converted", converted);
            setPlaylist(converted);
          })
          .then(() => setLoading(false))
      )
      .catch(() => {
        setLoading(false);
        setStreamLink("");
      });
    return () => setPlaylist([]);
  }, [playlistLink]);

  useEffect(
    () => localStorage.setItem("fav1", JSON.stringify(favoriteChannels)),
    [favoriteChannels]
  );
  return (
    <>
      <Watcher.Provider
        value={{
          watcherType,
          setWatcherType,
          playlist,
          setPlaylist,
          streamLink,
          setStreamLink,
          filterChannels,
          setFilterChannels,
          favoriteChannels,
          setFavoriteChannels,
          playlistLink,
          setPlaylistLink,
        }}
      >
        <Router>
          <Header />
          <Switch>
            <Route exact path="/General" component={General} />
            <Route exact path="/news" component={News} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/sport" component={Sports} />
            <Route exact path="/kids" component={Kids} />
            <Route exact path="/custom">
              <Custom link="https://iptv-org.github.io/iptv/categories/movies.m3u" />
            </Route>
            <Route exact path="/" component={General} />
            <Route path="*" component={PageNotFound} />
          </Switch>

          {loading ? <Loading /> : <Main />}
        </Router>
      </Watcher.Provider>
    </>
  );
}

export default App;
