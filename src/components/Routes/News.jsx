import {useEffect, useContext } from "react";
import { Watcher } from "../../context";

const News = () => {
  const { setWatcherType } = useContext(Watcher);
  useEffect(() => {
    setWatcherType('news')
    return () => setWatcherType('')
},[]);

return null
};

export default News;
