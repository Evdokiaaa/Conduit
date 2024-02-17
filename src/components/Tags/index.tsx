import { Link } from "react-router-dom";
import "./style.scss";
const Tags = () => {
  return (
    <aside className="tags">
      <div className="tags__container">
        <p className="popular__tags">Popular Tags</p>
        <div className="tag__list">
          <Link to="/" className="tag__default ">
            est
          </Link>
          <Link to="/" className="tag__default ">
            423
          </Link>
          <Link to="/" className="tag__default ">
            sdfsdf
          </Link>
          <Link to="/" className="tag__default ">
            sdfsdf
          </Link>
          <Link to="/" className="tag__default ">
            sdfsdf
          </Link>
          <Link to="/" className="tag__default ">
            sdfsdf
          </Link>
          <Link to="/" className="tag__default ">
            sdfsdf
          </Link>
          <Link to="/" className="tag__default ">
            sdfsdf
          </Link>
          <Link to="/" className="tag__default ">
            sdfsdf
          </Link>
          <Link to="/" className="tag__default ">
            sdfsdf
          </Link>
          <Link to="/" className="tag__default ">
            sdfsdf
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Tags;
