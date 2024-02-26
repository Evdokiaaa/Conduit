import { usePageParams } from "../../hooks/usePageParams";
import { PageChangeData } from "../../types/Feed";
import { FeedProps } from "../../types/FeedProps";
import ArticleList from "../ArticleList";
import Container from "../Container";
import Loading from "../Loading";
import Pagination from "../Pagination";
import "./style.scss";

const Feed = ({ data, isLoading, error, isFetching }: FeedProps) => {
  const { page, setPage } = usePageParams();
  const handlePageChange = ({ selected }: PageChangeData) => {
    setPage(selected);
  };
  if (error) {
    return (
      <Container>
        <Loading text="An error occurred during loading" />
      </Container>
    );
  }
  if (data?.articlesCount === 0) {
    return (
      <Container>
        <Loading text="No articles are here... yet." />
      </Container>
    );
  }
  return (
    <section className="feed">
      <ArticleList
        list={data?.articles || []}
        isLoading={isLoading || isFetching}
      />
      <Pagination
        amount={data?.articlesCount || 0}
        changePage={handlePageChange}
        page={page}
      />
    </section>
  );
};

export default Feed;
