import { useDispatch, useSelector } from "react-redux";
import { ArticleFeeds } from "../../types/Feed";
import Article from "../Article";
import Loading from "../Loading";
import { setArticlesLoading } from "../../store/feedSlice";
import { useEffect } from "react";
import { RootState } from "../../store/store";

interface ArticleListProps {
  list: ArticleFeeds[];
  isLoading: boolean;
}
const ArticleList = ({ list, isLoading }: ArticleListProps) => {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state: RootState) => state.feed.isLoaded);

  useEffect(() => {
    if (!isLoading && list) {
      dispatch(setArticlesLoading(false));
    }
  }, [isLoading, list, dispatch]);
  console.log("is loaded, ", isLoaded);
  return (
    <>
      {isLoaded && (
        <section className="articles">
          {list.map((article) => (
            <Article key={article.slug} {...article} />
          ))}
        </section>
      )}
      {isLoading && (
        <Loading className="loading__articles" text="Loading..ываываыва." />
      )}
    </>
  );
};

export default ArticleList;
