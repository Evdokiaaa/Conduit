import { useAuth } from "../../../hooks/useAuth";
import { Author } from "../../../types/Feed";
import { MdDelete } from "react-icons/md";

import "./style.scss";
interface CommentDataProps {
  body: string;
  author: Author;
}
const CommentData = ({ body, author }: CommentDataProps) => {
  const { user } = useAuth();
  const isAuthor = user?.username === author.username; //Является ли юзер автором коммента
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
            <button className="comment__data-delete">
              <MdDelete fontSize={"2rem"} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentData;
