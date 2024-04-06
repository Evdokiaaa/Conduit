import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
import "./style.scss";
import { LuPlus } from "react-icons/lu";
import { toast } from "react-toastify";
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from "../../../../api/ProfileApi";
interface FollowBtnProps {
  username: string;
  isFollowed: boolean;
}
const FollowBtn = ({ username, isFollowed }: FollowBtnProps) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [triggerFollow] = useFollowUserMutation();
  const [triggerUnfollow] = useUnfollowUserMutation();
  console.log("USER IS FOLLOW OR NOT", isFollowed);
  const toggleFollow = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    try {
      if (!isFollowed) {
        await triggerFollow({
          username: encodeURIComponent(username),
        }).unwrap();
      } else {
        await triggerUnfollow({
          username: encodeURIComponent(username),
        }).unwrap();
      }
    } catch (e) {
      toast.error("An error occurred, please try again.");
    }
  };
  return (
    <button className={"follow__btn"} onClick={toggleFollow}>
      <LuPlus className="follow__btn-icon" />
      {isFollowed ? "Unfollow" : "Follow"} {""}
      {username}
    </button>
  );
};

export default FollowBtn;
