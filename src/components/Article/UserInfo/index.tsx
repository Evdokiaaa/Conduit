import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { Author } from "../../../types/Feed";
import "./style.scss";
import ArticleControlBtns from "../../ArticleControlButtons";
import { useAuth } from "../../../hooks/useAuth";
interface ArticleUserInfoProps {
  author: Author;
  createdAt: string;
  className?: string;
  showControlBtns?: boolean;
  slug: string;
}
const ArticleUserInfo = ({
  author,
  createdAt,
  className = "",
  showControlBtns = false,
  slug,
}: ArticleUserInfoProps) => {
  const { isLoggedIn, user } = useAuth();

  const isUserAuthor = user?.username === author.username;

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
      {/*dont like it but w/e*/}
      {isLoggedIn && showControlBtns && isUserAuthor && (
        <ArticleControlBtns slug={slug} />
      )}
    </div>
  );
};

export default ArticleUserInfo;
