import ArticleList from "./components/ArticleList";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Feed from "./components/Feed";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        {/* <ArticleList /> */}
        <Feed />
      </main>
    </>
  );
};

export default App;
