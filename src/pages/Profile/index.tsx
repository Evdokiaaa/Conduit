import { useLocation, useParams } from "react-router-dom";
import { usePageParams } from "../../hooks/usePageParams";
import { useGetProfileFeedsQuery } from "../../api/api";
import ProfileBanner from "./Banner";
import UserArticles from "./UserArticles";
import "./style.scss";
import { useGetProfileByNameQuery } from "../../api/ProfileApi";
const ProfilePage = () => {
  const { user } = useParams();
  const { page } = usePageParams();
  const location = useLocation();
  const {
    data: profile,
    isLoading: profileLoading,
    error: profileError,
  } = useGetProfileByNameQuery(user!);

  const { data, isLoading, isFetching, error } = useGetProfileFeedsQuery({
    author: user!,
    page,
    isFavorite: location.pathname.includes("favorites"),
  });
  if (profileLoading) return null;
  if (profileError) console.log("an error occured");
  return (
    <>
      <ProfileBanner profile={profile!.profile} />
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
