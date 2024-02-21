import { Link, useSearchParams } from "react-router-dom";
import "./style.scss";
const ActiveFeeds = () => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");

  return (
    <div className="feed__toggle">
      <ul className="feed__nav">
        <li className="feed__nav-item">
          <Link className={`feed__nav-link ${tag ? "" : "active"}`} to="/">
            Global Feed
          </Link>
        </li>
        <li className="feed__nav-item">
          {tag && (
            <span className="feed__nav-link active">
              <b># </b>
              {tag}
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ActiveFeeds;
