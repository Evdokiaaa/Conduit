import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { Author } from "../../../types/Feed";
import "./style.scss";
interface ArticleUserInfoProps {
  author: Author;
  createdAt: string;
  className?: string;
}
const ArticleUserInfo = ({
  author,
  createdAt,
  className = "",
}: ArticleUserInfoProps) => {
  return (
    <div className="article__user-info">
      <Link to={`/profile/${author.username}`}>
        <img className="author__img" src={author.image} alt={author.username} />
      </Link>
      <div className="article__info">
        <Link
          to={`/profile/${author.username}`}
          className={`article__author-name ${className} `}
        >
          {author.username}
        </Link>
        <span className="article__data">
          {dayjs(createdAt).locale("en").format("ddd MMM DD YYYY")}
        </span>
      </div>
    </div>
  );
};

export default ArticleUserInfo;
