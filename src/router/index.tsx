import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import { SvgSpinners270Ring } from "./Spinner";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={route.id}
            path={route.path}
            element={
              <Suspense fallback={<SvgSpinners270Ring />}>
                {route.element}
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
