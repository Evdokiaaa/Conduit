import { ArticleFeeds } from "../../types/Feed";
import Article from "../Article";

import Skeleton from "../UI/Skeleton";

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
        Array(10)
          .fill("")
          .map((_, i) => <Skeleton key={i} className="loading__articles" />)
      )}
    </>
  );
};

export default ArticleList;
