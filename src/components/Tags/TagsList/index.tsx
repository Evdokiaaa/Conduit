import { Link } from "react-router-dom";
interface TagsListProps {
  tags: string[];
}
const TagsList = ({ tags }: TagsListProps) => {
  return (
    <div className="tag__list">
      {tags.map((tag, i) => (
        <Link to="/" key={i} className="tag__default ">
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default TagsList;
