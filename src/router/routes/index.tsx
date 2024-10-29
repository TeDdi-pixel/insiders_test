import { lazy } from "react";

const EditUserPage = lazy(() => import("../../components/pages/editUsers/ui/index.tsx"));
const UsersPage = lazy(() => import("../../components/pages/users/ui/index.tsx"));

export const routes = [
  { id: 0, path: "/", element: <EditUserPage /> },
  { id: 1, path: "/users", element: <UsersPage /> },
];