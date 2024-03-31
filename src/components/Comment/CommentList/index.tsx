import { useParams } from "react-router-dom";
import { useGetCommentsForArticleQuery } from "../../../api/api";
import Loading from "../../Loading";
import Comment from "../Comment";
import "./style.scss";
//TODO Сделать сортировку
const CommentList = () => {
  const { slug } = useParams();
  console.log(slug);
  const { data, isLoading, isFetching, } = useGetCommentsForArticleQuery({
    slug: slug!,
  });
  console.log("comments", data);
  if (isLoading) {
    return (
      <Loading
        text="Loading the comments.."
        className="loading__comments"
      ></Loading>
    );
  }
  if (isFetching) {
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
            slug={slug!}
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
