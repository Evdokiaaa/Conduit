import { ReactNode } from "react";
import "./style.scss";
interface ProfileBtnProps {
  className: string;
  text: string;
  Icon: ReactNode;
  username?: string;
  onClick?: () => void;
}
const ProfileBtn = ({
  text,
  className,
  Icon,
  username,
  onClick,
}: ProfileBtnProps) => {
  return (
    <button className={`profile__banner-${className}`} onClick={onClick}>
      {Icon}
      {text} {username}
    </button>
  );
};

export default ProfileBtn;
