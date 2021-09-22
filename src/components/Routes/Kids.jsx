import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const Kids = () => {
  const { setWatcherType } = useContext(Watcher);
  useEffect(() => {
    setWatcherType('kids')
    return () => setWatcherType('')
},[setWatcherType]);

return null
};

export default Kids;
