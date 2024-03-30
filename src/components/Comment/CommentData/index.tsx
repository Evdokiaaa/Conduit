import { useAuth } from "../../../hooks/useAuth";
import { Author } from "../../../types/Feed";
import { MdDelete } from "react-icons/md";

import "./style.scss";
import { useDeleteCommentMutation } from "../../../api/api";
import { toast } from "react-toastify";
interface CommentDataProps {
  id: number;
  body: string;
  author: Author;
  slug: string;
}
const CommentData = ({ id, body, author, slug }: CommentDataProps) => {
  const { user } = useAuth();
  const [triggerDeleteComment, { isLoading }] = useDeleteCommentMutation();
  const isAuthor = user?.username === author.username; //Является ли юзер автором коммента
  const deleteComment = async () => {
    try {
      await triggerDeleteComment({ commentId: id, articleSlug: slug });
    } catch (e) {
      toast.error("Something wen't wrong. Please, try again later");
    }
  };
  //!id - для удаления коммента
  return (
    <div className="comment__data">
      <div className="comment__data-container">
        <div className="comment__data-text">
          <p>{body}</p>
        </div>
        <div className="comment__data-author">
          <span>
            <img
              className="comment__data-author-img"
              src={author.image}
              alt={author.username}
            />
          </span>
          {isAuthor && (
            <button
              className="comment__data-delete"
              disabled={isLoading}
              onClick={deleteComment}
            >
              <MdDelete fontSize={"2rem"} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentData;
