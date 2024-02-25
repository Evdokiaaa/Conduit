import { feedData } from "../../api/api";
import { usePageParams } from "../../hooks/usePageParams";
import { PageChangeData } from "../../types/Feed";
import ArticleList from "../ArticleList";
import Container from "../Container";
import Loading from "../Loading";
import Pagination from "../Pagination";
import "./style.scss";

interface FeedProps {
  data?: feedData;
  isLoading: boolean;
  error: unknown;
  isFetching: boolean;
}
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
