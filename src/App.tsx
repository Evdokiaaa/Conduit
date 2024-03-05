import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/Main";
import ProfilePage from "./pages/Profile";
import ArticlePage from "./pages/Article";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";

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
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
