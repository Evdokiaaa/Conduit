import { Link } from "react-router-dom";
import LikeButton from "../LikeButton";
import "./style.scss";
const Article = () => {
  return (
    <article className="article__preview">
      <div className="article__header">
        <Link to="/">
          <img
            className="author__img"
            src="https://api.realworld.io/images/demo-avatar.png"
            alt="avatar"
          />
        </Link>
        <div className="article__info">
          <Link to="/@Maksim Estaban" className="article__author-name">
            Maksin Estaban
          </Link>
          <span className="article__data">Thu Jan 04 2024</span>
        </div>
        <div className="article__right">
          <LikeButton />
        </div>
      </div>
    </article>
  );
};

export default Article;
