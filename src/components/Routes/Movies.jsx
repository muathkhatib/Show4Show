import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const Movies = () => {
  const { setWatcherType } = useContext(Watcher);
  useEffect(() => {
    setWatcherType("movies");
    return () => setWatcherType("");
  }, [setWatcherType]);

  return null
};

export default Movies;
