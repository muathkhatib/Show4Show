import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const News = () => {
  const { watcherType, setWatcherType } = useContext(Watcher);
useEffect(() => {
    setWatcherType('News')
    return () => setWatcherType('')
},[]);

  return (
    <main>
      <h1>News Page</h1>
    </main>
  );
};

export default News;
