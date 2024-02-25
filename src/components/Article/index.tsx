import { Link } from "react-router-dom";
import LikeButton from "../LikeButton";
import "./style.scss";
import ArticleTags from "./Tags";
import { ArticleFeeds } from "../../types/Feed";
import dayjs from "dayjs";

interface ArticleProps extends ArticleFeeds {}
const Article = ({
  author,
  createdAt,
  title,
  description,
  favoritesCount,
  tagList,
}: ArticleProps) => {
  return (
    <article className="article__preview">
      <div className="article__header">
        <Link to={`/profile/${author.username}`}>
          <img
            className="author__img"
            src={author.image}
            alt={author.username}
          />
        </Link>
        <div className="article__info">
          <Link
            to={`/profile/${author.username}`}
            className="article__author-name"
          >
            {author.username}
          </Link>
          <span className="article__data">
            {dayjs(createdAt).locale("en").format("ddd MMM DD YYYY")}
          </span>
        </div>
        <div className="article__right">
          <LikeButton count={favoritesCount} />
        </div>
      </div>
      <div className="article__content">
        <Link to="/article/Maksim@Estaban">
          <h1 className="article__content-title">{title}</h1>
          <p className="article__content-subtitle">{description}|</p>
          <div className="article__content-bottom">
            <span className="article__content-more">Read more...</span>
            <ArticleTags tags={tagList} />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Article;
