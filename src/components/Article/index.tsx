import { Link } from "react-router-dom";
import LikeButton from "../LikeButton";
import "./style.scss";
import ArticleTags from "./Tags";
import { ArticleFeeds } from "../../types/Feed";
import ArticleUserInfo from "./UserInfo";

interface ArticleProps extends ArticleFeeds {}
const Article = ({
  author,
  createdAt,
  title,
  description,
  favoritesCount,
  tagList,
  slug,
}: ArticleProps) => {
  return (
    <article className="article__preview">
      <div className="article__header">
        <ArticleUserInfo author={author} createdAt={createdAt} />
      </div>
      <div className="article__right">
        <LikeButton count={favoritesCount} />
      </div>
      <div className="article__content">
        <Link to={`/article/${slug.toLocaleLowerCase()}`}>
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
