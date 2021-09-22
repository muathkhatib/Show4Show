import { useContext } from "react";
import { Watcher } from "../../context";

const SearchBar = () => {
  const { filterChannels, setFilterChannels } = useContext(Watcher);
  return (
    <div className="header-navbar-search">
      <input
        className="header-navbar-search-input"
        type="search"
        placeholder="Enter name of channel"
        onChange={(e) => setFilterChannels(e.target.value.toLowerCase())}
      />
    </div>
  );
};
export default SearchBar;
