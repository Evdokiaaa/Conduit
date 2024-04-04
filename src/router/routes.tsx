import ArticlePage from "../pages/Article";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Editor from "../pages/Editor";
import MainPage from "../pages/Main";
import ProfilePage from "../pages/Profile";
import Settings from "../pages/Settings";

type routesProps = {
  id: number;
  path: string;
  element: JSX.Element;
};
export const routes: routesProps[] = [
  {
    id: 1,
    path: "/",
    element: <MainPage />,
  },
  {
    id: 2,
    path: "/personal-feed",
    element: <MainPage />,
  },
  {
    id: 3,
    path: "/register",
    element: <SignUp />,
  },
  {
    id: 4,
    path: "/login",
    element: <SignIn />,
  },
  {
    id: 5,
    path: "/settings",
    element: <Settings />,
  },
  {
    id: 6,
    path: "/editor",
    element: <Editor />,
  },
  {
    id: 7,
    path: "/editor/:slug",
    element: <Editor />,
  },
  {
    id: 8,
    path: "/profile/:user",
    element: <ProfilePage />,
  },
  {
    id: 9,
    path: "/profile/:user/favorites",
    element: <ProfilePage />,
  },
  {
    id: 10,
    path: "/article/:slug",
    element: <ArticlePage />,
  },
];
