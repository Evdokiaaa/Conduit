import { Link, useLocation, useSearchParams } from "react-router-dom";
import "./style.scss";

interface ActiveFeedsItem {
  name: string;
  link: string;
}
interface ActiveFeedsProps {
  name?: string;
  link?: string;
  additional?: ActiveFeedsItem[];
}

const ActiveFeeds = ({
  name = "Global Feed",
  link = "/",
  additional = [],
}: ActiveFeedsProps) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const tag = searchParams.get("tag");

  return (
    <div className="feed__toggle">
      <ul className="feed__nav">
        <li className="feed__nav-item">
          <Link
            className={`${
              tag ||
              location.pathname.includes("personal-feed") ||
              location.pathname.includes("favorites")
                ? "feed__nav-link"
                : "feed__nav-link--active"
            }`}
            to={link}
          >
            {name}
          </Link>
        </li>
        {additional?.map((item) => (
          <li className="feed__nav-item" key={item.link}>
            <Link
              className={`${
                location.pathname.includes("favorites") ||
                location.pathname.includes("personal-feed")
                  ? "feed__nav-link"
                  : "feed__nav-link--active"
              }`}
              to={item.link}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li className="feed__nav-item">
          {tag && (
            <span className="feed__nav-link--active">
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
