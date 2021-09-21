import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const Movies = () => {
  const { watcherType, setWatcherType } = useContext(Watcher);
useEffect(() => {
    setWatcherType('Movies')
    return () => setWatcherType('')
},[]);

  return (
    <main>
      <h1>Movies Page</h1>
    </main>
  );
};

export default Movies;
