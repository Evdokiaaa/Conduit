import { ArticleFeeds } from "../../types/Feed";
import Article from "../Article";
import Loading from "../Loading";

interface ArticleListProps {
  list: ArticleFeeds[];
  isLoading: boolean;
}
const ArticleList = ({ list, isLoading }: ArticleListProps) => {
  return (
    <>
      {!isLoading ? (
        <section className="articles">
          {list.map((article) => (
            <Article key={article.slug} {...article} />
          ))}
        </section>
      ) : (
        <Loading text="Loading articles..." />
      )}
    </>
  );
};

export default ArticleList;
