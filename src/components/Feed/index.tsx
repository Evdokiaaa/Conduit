import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetArticlesQuery } from "../../api/api";
import { PageChangeData } from "../../types/Feed";
import { serializeSearchParams } from "../../utils";
import { useSelector } from "react-redux";
import ActiveFeeds from "../ActiveFeeds";
import ArticleList from "../ArticleList";
import Container from "../Container";
import Loading from "../Loading";
import Pagination from "../Pagination";
import Tags from "../Tags";
import "./style.scss";
import { RootState } from "../../store/store";

const Feed = () => {
  const isTagsLoaded = useSelector(
    (state: RootState) => state.feed.isLoading.tags
  );
  const isArticlesLoaded = useSelector(
    (state: RootState) => state.feed.isLoading.articles
  );
  console.log(isTagsLoaded, isArticlesLoaded);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("page") ? Number(searchParams.get("page")) : 0
  );
  const { data, error, isLoading } = useGetArticlesQuery({
    page: page + 1,
  });
  const handlePageChange = ({ selected }: PageChangeData) => {
    setPage(selected);
    setSearchParams(serializeSearchParams({ page: String(selected + 1) }));
  };
  // if (isLoading || isFetching) {
  //   //TODO Перебросить в другой файл ( ArticleList )
  //   return <Container></Container>;
  // }
  if (error) {
    return (
      <Container>
        <Loading text="An error occurred during loading" />
      </Container>
    );
  }
  //Надо сделать так,чтобы этот компонент знал, что Tags And ArticleList загрузились
  return (
    <section className="feed">
      <Container>
        <div
          className={isLoading ? "feed__container-loading" : "feed__container"}
        >
          <div className="feed__articles">
            <ActiveFeeds />
            <ArticleList list={data?.articles || []} isLoading={isLoading} />
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
