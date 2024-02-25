import { Link, useLocation, useSearchParams } from "react-router-dom";
import "./style.scss";
interface ActiveFeedsItem {
  name: string;
  link: string;
}
interface ActiveFeedsProps {
  name?: string;
  link?: string;
  favorites?: ActiveFeedsItem[];
}
const ActiveFeeds = ({
  name = "Global Feed",
  link = "/",
  favorites = [],
}: ActiveFeedsProps) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const tag = searchParams.get("tag");
  console.log(location);
  return (
    <div className="feed__toggle">
      <ul className="feed__nav">
        <li className="feed__nav-item">
          <Link
            className={`feed__nav-link ${
              tag || location.pathname.includes("favorites") ? "" : "active"
            }`}
            to={link}
          >
            {name}
          </Link>
          {favorites?.map((item) => (
            <Link
              key={item.link}
              className={`feed__nav-link ${
                !location.pathname.includes("favorites") ? "" : "active"
              }`}
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
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
