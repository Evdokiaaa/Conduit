import Container from "../../../components/Container";
import { LuPlus } from "react-icons/lu";
import { Profile } from "../../../types/Profile";
import { useAuth } from "../../../hooks/useAuth";
import { IoMdSettings } from "react-icons/io";
import ProfileBtn from "../../../components/UI/ProfileBtn";
import "./style.scss";
import { useNavigate } from "react-router-dom";
interface ProfileBannerProps {
  profile: Profile;
}

const ProfileBanner = ({ profile }: ProfileBannerProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const settingsNavigate = () => {
    navigate("/settings");
  };
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
            <ProfileBtn
              text={"Follow"}
              username={profile.username}
              className="follow"
              Icon={<LuPlus className="profile__banner-icon" />}
            />
          ) : (
            <ProfileBtn
              onClick={settingsNavigate}
              text={"Edit Profile Settings"}
              className="settings"
              Icon={<IoMdSettings className="profile__banner-icon" />}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default ProfileBanner;
