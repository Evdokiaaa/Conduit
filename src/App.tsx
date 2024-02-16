import Article from "./components/Article";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        <Container>
          <Article />
        </Container>
      </main>
    </>
  );
};

export default App;
