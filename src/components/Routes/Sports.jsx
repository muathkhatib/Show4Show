import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const Sports = () => {
  const { setWatcherType } = useContext(Watcher);
  useEffect(() => {
    setWatcherType('sports')
    return () => setWatcherType('')
},[setWatcherType]);
  return null
};

export default Sports;
