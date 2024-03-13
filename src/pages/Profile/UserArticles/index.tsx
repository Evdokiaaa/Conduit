import { FeedProps } from "../../../types/FeedProps";
import Container from "../../../components/Container";
import Feed from "../../../components/Feed";
import ActiveFeeds from "../../../components/ActiveFeeds";
import "./style.scss";
import { useParams } from "react-router-dom";
const UserArticles = ({ data, error, isLoading, isFetching }: FeedProps) => {
  const { user } = useParams();
  const favorite = [
    {
      name: "Favorited Articles",
      link: `/profile/${encodeURIComponent(user!)}/favorites`,
    },
  ];
  return (
    <div className="user__articles">
      <div className="user__articles-container">
        <Container>
          <ActiveFeeds
            name="My Articles"
            link={`/profile/${encodeURIComponent(user!)}`}
            additional={favorite}
          />
          <Feed
            data={data}
            error={error}
            isLoading={isLoading}
            isFetching={isFetching}
          />
        </Container>
      </div>
    </div>
  );
};

export default UserArticles;
