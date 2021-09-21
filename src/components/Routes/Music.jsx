import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const Music = () => {
  const { watcherType, setWatcherType } = useContext(Watcher);
useEffect(() => {
    setWatcherType('Music')
    return () => setWatcherType('')
},[]);

  return (
    <main>
      <h1>Music Page</h1>
    </main>
  );
};

export default Music;
