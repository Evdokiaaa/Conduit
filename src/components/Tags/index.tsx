import "./style.scss";
import { useGetPopularTagsQuery } from "../../api/api";
import Loading from "../Loading";
import TagsList from "./TagsList";
const Tags = () => {
  const { data, isLoading } = useGetPopularTagsQuery(null);
  console.log("data", data);

  return (
    <aside className="tags">
      <div className="tags__container">
        <p className="popular__tags">Popular Tags</p>
        {isLoading ? (
          <Loading className="loading__tags" text="Loading popular tags..." />
        ) : (
          <TagsList tags={data?.tags || []} />
        )}
      </div>
    </aside>
  );
};

export default Tags;
