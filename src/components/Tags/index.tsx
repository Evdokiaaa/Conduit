import "./style.scss";
import { useGetPopularTagsQuery } from "../../api/api";
import Loading from "../Loading";
import TagsList from "./TagsList";
import { useDispatch, useSelector } from "react-redux";
import { setTagsLoading } from "../../store/feedSlice";
import { useEffect } from "react";
import { RootState } from "../../store/store";

const Tags = () => {
  const { data, isLoading } = useGetPopularTagsQuery(null); //i dont like null
  const isLoaded = useSelector((state: RootState) => state.feed.isLoaded);
  console.log("data", data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setTagsLoading(false));
    }
  }, [isLoading, data, dispatch]);
  return (
    <aside className="tags">
      <div className="tags__container">
        <p className="popular__tags">Popular Tags</p>
        {isLoading && (
          <Loading className="loading__tags" text="Loading popular tags..." />
        )}
        {isLoaded && <TagsList tags={data?.tags || []} />}
      </div>
    </aside>
  );
};

export default Tags;
