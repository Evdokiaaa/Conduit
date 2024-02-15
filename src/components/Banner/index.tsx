import Container from "../Container";
import "./style.scss";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <h1 className="banner__logo">conduit</h1>
        <p className="banner__subtitle">A place to share your knowledge.</p>
      </Container>
    </div>
  );
};

export default Banner;
