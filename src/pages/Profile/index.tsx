import { useParams } from "react-router-dom";
import { usePageParams } from "../../hooks/usePageParams";
import { useGetProfileFeedsQuery } from "../../api/api";
import ProfileBanner from "./Banner";
import UserArticles from "./UserArticles";
import "./style.scss";
const ProfilePage = () => {
  const { user } = useParams();
  const { page } = usePageParams();
  console.log(page);
  const { data, isLoading, isFetching, error } = useGetProfileFeedsQuery({
    author: user!,
    page,
  });
  return (
    <>
      <ProfileBanner />
      <UserArticles
        data={data}
        isFetching={isFetching}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default ProfilePage;
