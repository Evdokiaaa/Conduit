import "./style.scss";
const AddComment = () => {
  return (
    <form className="add__comment" method="post">
      <textarea
        className="add__comment-text"
        name="comment-field"
        id="comment-field"
        placeholder="Write a comment"
      ></textarea>
      <div className="add__comment-user">
        <span>
          <img src="" alt="user" />
        </span>
        <button className="add__comment-btn">Post Comment</button>
      </div>
    </form>
  );
};

export default AddComment;
