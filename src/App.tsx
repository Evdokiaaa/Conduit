import Banner from "./components/Banner";
import Container from "./components/Container";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        <Container></Container>
      </main>
    </>
  );
};

export default App;
