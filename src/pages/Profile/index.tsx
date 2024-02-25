import { useParams } from "react-router-dom";
import ProfileBanner from "./Banner";
import { useGetProfileFeedsQuery } from "../../api/api";
import { usePageParams } from "../../hooks/usePageParams";
import Feed from "../../components/Feed";
import ActiveFeeds from "../../components/ActiveFeeds";
import ArticleList from "../../components/ArticleList";
import Pagination from "../../components/Pagination";

const ProfilePage = () => {
  const { profile } = useParams();
  const { page } = usePageParams();
  const { data, isLoading, isFetching, error } = useGetProfileFeedsQuery({
    author: profile!,
    page,
  });
  return (
    <>
      <ProfileBanner />
      <ActiveFeeds />
      <ArticleList
        list={data?.articles || []}
        isLoading={isLoading || isFetching}
      />
      <Pagination
        amount={data?.articlesCount || 0}
        changePage={handlePageChange}
        page={page}
      />
    </>
  );
};

export default ProfilePage;
