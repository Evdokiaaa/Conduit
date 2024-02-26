import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/Main";
import ProfilePage from "./pages/Profile";
import ArticlePage from "./pages/Article";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile/:user" element={<ProfilePage />} />
          <Route path="/profile/:user/favorites" element={<ProfilePage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
