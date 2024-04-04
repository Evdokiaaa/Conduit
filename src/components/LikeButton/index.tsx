import { FaHeart } from "react-icons/fa6";
import { IconContext } from "react-icons";
import "./style.scss";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  useFavoriteArticleMutation,
  useUnfavoriteArticleMutation,
} from "../../api/api";
import { toast } from "react-toastify";
interface LikeButton {
  count: number;
  slug: string;
  isFavorited: boolean;
}
//TODO. 1 Сделать так, если пользователь на залогинился, переходить на страницу с рег/лог
//TODO. 2
const LikeButton = ({ count, slug, isFavorited = false }: LikeButton) => {
  const [favoriteArticle] = useFavoriteArticleMutation();
  const [unfavoriteArticle] = useUnfavoriteArticleMutation();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleFavorite = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    try {
      if (isFavorited) {
        await unfavoriteArticle({ slug }).unwrap();
      } else {
        await favoriteArticle({ slug }).unwrap();
      }
    } catch (e) {
      toast.error("Something happen, please try again");
    }
  };
  return (
    <IconContext.Provider value={{ color: "#5cb85c", className: "like__ico" }}>
      <button className="like__button" onClick={handleFavorite}>
        <FaHeart />
        {count}
      </button>
    </IconContext.Provider>
  );
};

export default LikeButton;
