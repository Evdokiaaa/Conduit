import ArticleUserInfo from "../Article/UserInfo";
import Container from "../Container";
import "./style.scss";
const ArticleBanner = () => {
  return (
    <div className="article__banner">
      <Container>
        <h1 className="article__banner-title">
          Ill quantify the redundant TCP bus, that should hard drive the ADP
          bandwidth! Ill quantify the redundant TCP bus, that should hard drive
          the ADP bandwidth! Ill quantify the redundant TCP bus, that should
          hard drive the ADP bandwidth! Ill quantify the redundant TCP bus, that
          should hard drive the ADP bandwidth! Ill quantify the redundant TCP
          bus, that should hard drive the ADP bandwidth!
        </h1>
        <ArticleUserInfo
          author={{
            username: "dfssdf",
            following: false,
            bio: "ddsd",
            image: "https://api.realworld.io/images/demo-avatar.png",
          }}
          createdAt={new Date().toISOString()}
          className="article__name"
        />
      </Container>
    </div>
  );
};

export default ArticleBanner;
