import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/Main";
import ProfilePage from "./pages/Profile";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile/:user" element={<ProfilePage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
