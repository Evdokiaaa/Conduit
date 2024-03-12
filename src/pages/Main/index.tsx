import { useSearchParams } from "react-router-dom";
import { useGetArticlesQuery } from "../../api/api";
import Banner from "../../components/Banner";
import Feed from "../../components/Feed";
import { usePageParams } from "../../hooks/usePageParams";
import Tags from "../../components/Tags";
import Container from "../../components/Container";
import ActiveFeeds from "../../components/ActiveFeeds";
import "./style.scss";
import { useAuth } from "../../hooks/useAuth";
const MainPage = () => {
  const [searchParams] = useSearchParams();
  const { page } = usePageParams();
  const { isLoggedIn } = useAuth();
  const { data, error, isLoading, isFetching } = useGetArticlesQuery({
    page: page,
    tag: searchParams.get("tag"),
  });
  return (
    <>
      {isLoggedIn && <Banner />}
      <section className="main__info">
        <Container>
          <ActiveFeeds />
          <div
            className={
              isLoading || isFetching
                ? "main__container-loading"
                : "main__container"
            }
          >
            <Feed
              data={data}
              error={error}
              isLoading={isLoading}
              isFetching={isFetching}
            />
            <Tags />
          </div>
        </Container>
      </section>
    </>
  );
};

export default MainPage;
