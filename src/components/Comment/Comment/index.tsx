import CommentData from "../CommentData";
import { Author } from "../../../types/SingleArticle";
import "./style.scss";
interface CommentProps {
  id: number;
  body: string;
  author: Author;
  slug: string;
}
const Comment = ({ id, author, body, slug }: CommentProps) => {
  return (
    <div className="comment">
      <div className="comment__container">
        <CommentData id={id} author={author} body={body} slug={slug} />
      </div>
    </div>
  );
};

export default Comment;
