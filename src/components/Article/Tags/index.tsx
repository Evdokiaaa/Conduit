import "./style.scss";
interface ArticleTagsProps {
  tags: string[];
}
const ArticleTags = ({ tags }: ArticleTagsProps) => {
  return (
    <ul className="article__tags">
      {tags.map((tag, i) => (
        <li key={i} className="article__tags-item">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default ArticleTags;
