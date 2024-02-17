//!Тут будет хранить все статьи

import { useGetArticlesQuery } from "../../api/api";
import ActiveFeeds from "../ActiveFeeds";
import ArticleList from "../ArticleList";
import Container from "../Container";
import Loading from "../Loading";
import Tags from "../Tags";
import "./style.scss";
const Feed = () => {
  const { data, error, isLoading } = useGetArticlesQuery();
  //!Перенести в другой компонент
  if (isLoading) {
    return (
      <Container>
        <Loading text="Loading feeds..." />
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <Loading text="An error occurred during loading" />
      </Container>
    );
  }
  return (
    <section className="feed">
      <Container>
        <div className="feed__container">
          <div className="feed__articles">
            <ActiveFeeds />
            <ArticleList list={data?.articles || []} />
          </div>
          <Tags />
        </div>
      </Container>
    </section>
  );
};

export default Feed;
