import ArticlePage from "../pages/Article";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Editor from "../pages/Editor";
import MainPage from "../pages/Main";
import ProfilePage from "../pages/Profile";
import Settings from "../pages/Settings";

type routesProps = {
  path: string;
  element: JSX.Element;
};
export const routes: routesProps[] = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/personal-feed",
    element: <MainPage />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/editor",
    element: <Editor />,
  },
  {
    path: "/profile/:user",
    element: <ProfilePage />,
  },
  {
    path: "/profile/:user/favorites",
    element: <ProfilePage />,
  },
  {
    path: "/article/:slug",
    element: <ArticlePage />,
  },
];
