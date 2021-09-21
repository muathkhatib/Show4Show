import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const Sports = () => {
  const { watcherType, setWatcherType } = useContext(Watcher);
useEffect(() => {
    setWatcherType('Sports')
    return () => setWatcherType('')
},[]);

  return (
    <main>
      <h1>Sports Page</h1>
    </main>
  );
};

export default Sports;
