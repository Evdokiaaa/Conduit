import { useParams } from "react-router-dom";
import { useGetSingleArticleQuery } from "../../api/api";
import ArticleTags from "../../components/Article/Tags";
import ArticleBanner from "../../components/ArticleBanner";
import Container from "../../components/Container";
import "./style.scss";
import Loading from "../../components/Loading";

const ArticlePage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGetSingleArticleQuery({
    slug: slug!,
  });
  if (isLoading) {
    return (
      <Container>
        <Loading
          text="Loading Article..."
          className="loading__single-article"
        />
      </Container>
    );
  }
  if (error) return <h1>Article not found</h1>;
  return (
    <div>
      <ArticleBanner
        author={data!.article!.author}
        title={data!.article!.title}
        createdAt={data!.article!.createdAt}
      />
      <div className="article__desc">
        <Container>
          <div className="article__desc-container">
            <p className="article__desc-text">{data!.article!.body}</p>
            <ArticleTags tags={data?.article.tagList || []} />
          </div>
          <div>TEST!!!</div>
          <div>TEST!!!</div>
          <div>TEST!!!</div>
          <div>TEST!!!</div>
        </Container>
      </div>
    </div>
  );
};

export default ArticlePage;
