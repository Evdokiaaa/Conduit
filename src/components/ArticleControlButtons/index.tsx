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
        className="control__button control__button-edit"
      >
        <MdOutlineEdit />
        Edit Article
      </button>

      <button
        className="control__button control__button-delete"
        onClick={navigateAfterDelete}
      >
        <MdOutlineDelete />
        Delete Article
      </button>
    </div>
  );
};

export default ArticleControlBtns;
