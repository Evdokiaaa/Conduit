import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetArticlesQuery } from "../../api/api";
import { PageChangeData } from "../../types/Feed";
import { serializeSearchParams } from "../../helpers/consts";
import ActiveFeeds from "../ActiveFeeds";
import ArticleList from "../ArticleList";
import Container from "../Container";
import Loading from "../Loading";
import Pagination from "../Pagination";
import Tags from "../Tags";
import "./style.scss";

const Feed = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("page") ? Number(searchParams.get("page")) : 0
  );
  const { data, error, isLoading, isFetching } = useGetArticlesQuery({
    page: page + 1,
  });
  const handlePageChange = ({ selected }: PageChangeData) => {
    setPage(selected);
    setSearchParams(serializeSearchParams({ page: String(selected + 1) }));
  };
  if (isLoading || isFetching) {
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
        <Pagination
          amount={data?.articlesCount || 0}
          changePage={handlePageChange}
          page={page}
        />
      </Container>
    </section>
  );
};

export default Feed;
