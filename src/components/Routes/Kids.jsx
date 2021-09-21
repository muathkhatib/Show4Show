import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const Kids = () => {
  const { watcherType, setWatcherType } = useContext(Watcher);
useEffect(() => {
    setWatcherType('Kids')
    return () => setWatcherType('')
},[]);

  return (
    <main>
      <h1>Kids Page</h1>
    </main>
  );
};

export default Kids;
