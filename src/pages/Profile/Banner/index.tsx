import Container from "../../../components/Container";
import { LuPlus } from "react-icons/lu";
import "./style.scss";
const ProfileBanner = () => {
  return (
    <div className="profile__banner">
      <Container>
        <div className="profile__banner-info">
          <img
            className="profile__banner-img"
            src="https://api.realworld.io/images/demo-avatar.png"
            alt="user-img"
          />
          <h4 className="profile__banner-title">Maksim Esteban</h4>
          <button className="profile__banner-follow">
            <LuPlus className="profile__banner-icon" />
            Follow Maksim Esteban
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ProfileBanner;
