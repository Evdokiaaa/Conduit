import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./style.scss";
interface ArticleControlBtnsProps {
  slug: string;
}
//!Кнопки будут для удаление и изменение статьи
const ArticleControlBtns = ({ slug }: ArticleControlBtnsProps) => {
  const navigate = useNavigate();
  const navigateToEdit = (slug: string) => {
    navigate(`/editor/${slug}`);
  };
  return (
    <div className="control__btns">
      <button
        onClick={() => navigateToEdit(slug)}
        className="edit__article-btn control__btn"
      >
        <MdOutlineEdit />
        Edit Article
      </button>

      <button className="delete__article-btn control__btn">
        <MdOutlineDelete />
        Delete Article
      </button>
    </div>
  );
};

export default ArticleControlBtns;
