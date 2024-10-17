import Error from "@components/Default/Error";
import TopsimModel from "@components/pages/Manage/TopsimModel";
import UserManage from "@components/pages/Manage/UserMange";
import { Navigate } from "react-router-dom";

type RouteType = {
  path: string;
  element: any;
  blank?: boolean;
};

export const defaultRoute = () => {
  return "/manage/topsim-model";
};

export const routes: Array<RouteType> = [
  {
    path: "/",
    element: <Navigate replace to={defaultRoute()} />,
  },

  //* Manage
  {
    path: "/manage/topsim-model",
    element: <TopsimModel />,
  },
  {
    path: "/manage/users",
    element: <UserManage />,
  },

  //* errors
  {
    path: "*",
    element: <Error />,
  },
];
