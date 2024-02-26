import Container from "../../../components/Container";
import { LuPlus } from "react-icons/lu";
import "./style.scss";
import { Profile } from "../../../types/Profile";
interface ProfileBannerProps {
  profile: Profile;
}

const ProfileBanner = ({ profile }: ProfileBannerProps) => {
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
          <button className="profile__banner-follow">
            <LuPlus className="profile__banner-icon" />
            Follow {profile.username}
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ProfileBanner;
