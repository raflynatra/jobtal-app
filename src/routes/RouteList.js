import UserRegister from "../components/User/UserRegister";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import JobVacancy from "../pages/JobVacancy";
import NotFound from "../pages/NotFound";

export const PUBLIC_ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/job-vacancies",
    element: <JobVacancy />,
  },
  {
    path: "/register",
    element: <UserRegister />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const SECURED_ROUTES = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
