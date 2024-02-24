import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { feedData } from "../../api/api";
import { PageChangeData } from "../../types/Feed";
import { serializeSearchParams } from "../../utils";
import ActiveFeeds from "../ActiveFeeds";
import ArticleList from "../ArticleList";
import Container from "../Container";
import Loading from "../Loading";
import Pagination from "../Pagination";
import Tags from "../Tags";
import "./style.scss";
interface FeedProps {
  data?: feedData;
  isLoading: boolean;
  error: unknown;
  isFetching: boolean;
}
const Feed = ({ data, isLoading, error, isFetching }: FeedProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 0;

  const handlePageChange = ({ selected }: PageChangeData) => {
    setSearchParams(serializeSearchParams({ page: String(selected + 1) }));
  };
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
        <div
          className={
            isLoading || isFetching
              ? "feed__container-loading"
              : "feed__container"
          }
        >
          <div className="feed__articles">
            <ActiveFeeds />
            <ArticleList
              list={data?.articles || []}
              isLoading={isLoading || isFetching}
            />
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
