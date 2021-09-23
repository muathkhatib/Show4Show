import { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import { Watcher } from "../../context";
const FavoriteIcon = () => {
  const { } = useContext(Watcher);
  return (
    <div className="header-navbar-favorite-icon">
      <Link className="favorite-icon-anchor" to="/favorite-icon">
        {/* <i class="far fa-bookmark" onClick={() => }></i> */}
      </Link>
    </div>
  );
};
export default FavoriteIcon;
