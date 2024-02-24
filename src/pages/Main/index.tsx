import { useSearchParams } from "react-router-dom";
import { useGetArticlesQuery } from "../../api/api";
import Banner from "../../components/Banner";
import Feed from "../../components/Feed";

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 0;
  const { data, error, isLoading, isFetching } = useGetArticlesQuery({
    page: page,
    tag: searchParams.get("tag"),
  });
  return (
    <>
      <Banner />
      <Feed
        data={data}
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </>
  );
};

export default MainPage;
