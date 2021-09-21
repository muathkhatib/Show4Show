import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const General = () => {
  const { setWatcherType} = useContext(Watcher);
  useEffect(() => {
    setWatcherType('general')
    return () => setWatcherType('')
},[]);

  return null
};

export default General;
