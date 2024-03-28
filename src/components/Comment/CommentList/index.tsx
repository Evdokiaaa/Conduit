import { useParams } from "react-router-dom";
import { useGetCommentsForArticleQuery } from "../../../api/api";
import Loading from "../../Loading";
import Comment from "../Comment";

const CommentList = () => {
  const { slug } = useParams();
  console.log(slug);
  const { data, isLoading } = useGetCommentsForArticleQuery({ slug: slug! });
  console.log("comments", data);
  if (data?.comments.length === 0) return <p>No comments</p>;
  if (isLoading) {
    return <Loading text="Loading the comments.."></Loading>;
  }
  // if (data?.comments) {
  //   return <div>There are not comments</div>;
  // }
  console.log(data);
  return (
    <section className="comments">
      <div className="comments__container">
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
