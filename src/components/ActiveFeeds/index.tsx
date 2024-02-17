import { Link } from "react-router-dom";
import "./style.scss";
const ActiveFeeds = () => {
  return (
    <div className="feed__toggle">
      <ul className="feed__nav">
        <li className="feed__nav-item">
          <Link className="feed__nav-link active" to="/">
            Global Feed
          </Link>
        </li>
        <li className="feed__nav-item">
          <Link className="feed__nav-link " to="/">
            #eies
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ActiveFeeds;
