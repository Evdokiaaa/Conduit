import dayjs from "dayjs";
import { Author } from "../../types/SingleArticle";
import ArticleUserInfo from "../Article/UserInfo";
import Container from "../Container";
import "./style.scss";

interface ArticleBannerProps {
  title: string;
  author: Author;
  createdAt: string;
  slug: string;
}
const ArticleBanner = ({
  title,
  author,
  createdAt,
  slug,
}: ArticleBannerProps) => {
  return (
    <div className="article__banner">
      <Container>
        <h1 className="article__banner-title">{title}</h1>
        <ArticleUserInfo
          author={author}
          createdAt={dayjs(createdAt).locale("en").format("ddd MMM DD YYYY")}
          slug={slug}
          className="article__name"
          showControlBtns={true}
        />
      </Container>
    </div>
  );
};

export default ArticleBanner;
