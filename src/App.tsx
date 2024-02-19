import Banner from "./components/Banner";
import Feed from "./components/Feed";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        <Feed />
      </main>
    </>
  );
};

export default App;
