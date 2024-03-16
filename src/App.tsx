import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { routes } from "./router/routes";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </>
  );
};

export default App;
