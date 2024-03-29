import { useParams } from "react-router-dom";
import { useGetCommentsForArticleQuery } from "../../../api/api";
import Loading from "../../Loading";
import Comment from "../Comment";
import "./style.scss";
const CommentList = () => {
  const { slug } = useParams();
  console.log(slug);
  const { data, isLoading } = useGetCommentsForArticleQuery({ slug: slug! });
  console.log("comments", data);
  if (isLoading) {
    return (
      <Loading
        text="Loading the comments.."
        className="loading__comments"
      ></Loading>
    );
  }

  return (
    <section className="users__comments">
      <div className="users__comments-container">
        {data?.comments.map((comment) => (
          <Comment
            key={`comment-${comment.id}`}
            author={comment.author}
            body={comment.body}
            id={comment.id}
          />
        ))}
      </div>
    </section>
  );
};

export default CommentList;
