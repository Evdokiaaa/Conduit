import { FaHeart } from "react-icons/fa6";
import { IconContext } from "react-icons";
import "./style.scss";
const LikeButton = () => {
  return (
    <IconContext.Provider value={{ color: "#5cb85c", className: "like__ico" }}>
      <button className="like__button">
        <FaHeart />1
      </button>
    </IconContext.Provider>
  );
};

export default LikeButton;
