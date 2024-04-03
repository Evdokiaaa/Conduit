import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useDeleteArticleMutation } from "../../api/api";
interface ArticleControlBtnsProps {
  slug: string;
}

const ArticleControlBtns = ({ slug }: ArticleControlBtnsProps) => {
  const navigate = useNavigate();
  const [deleteArticle] = useDeleteArticleMutation();

  const navigateToEdit = (slug: string) => {
    navigate(`/editor/${slug}`);
  };
  const navigateAfterDelete = async () => {
    await deleteArticle({ slug });
    navigate("/");
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

      <button
        className="delete__article-btn control__btn"
        onClick={navigateAfterDelete}
      >
        <MdOutlineDelete />
        Delete Article
      </button>
    </div>
  );
};

export default ArticleControlBtns;
