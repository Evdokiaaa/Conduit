import Container from "../../../components/Container";
import { Profile } from "../../../types/Profile";
import { useAuth } from "../../../hooks/useAuth";
import "./style.scss";
import FollowBtn from "../../../components/UI/ProfileBtn/Follow";
import EditSettingsBtn from "../../../components/UI/ProfileBtn/EditSettings";
interface ProfileBannerProps {
  profile: Profile;
}

const ProfileBanner = ({ profile }: ProfileBannerProps) => {
  const { user } = useAuth();
  return (
    <div className="profile__banner">
      <Container>
        <div className="profile__banner-info">
          <img
            className="profile__banner-img"
            src={profile.image}
            alt={`${profile.username} image`}
          />
          <h4 className="profile__banner-title">{profile.username}</h4>
          {user?.username !== profile.username ? (
            <FollowBtn
              username={profile.username}
              isFollowed={profile.following}
            />
          ) : (
            <EditSettingsBtn />
          )}
        </div>
      </Container>
    </div>
  );
};

export default ProfileBanner;
