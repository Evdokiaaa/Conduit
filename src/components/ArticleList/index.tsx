import { ArticleFeeds } from "../../types/Feed";
import Article from "../Article";

interface ArticleListProps {
  list: ArticleFeeds[];
}
const ArticleList = ({ list }: ArticleListProps) => {
  console.log(list);
  return (
    <section className="articles">
      {list.map((article) => (
        <Article key={article.slug} {...article} />
      ))}
    </section>
  );
};

export default ArticleList;
