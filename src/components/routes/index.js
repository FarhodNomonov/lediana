import React from "react";
import { RootRoutes } from "./routes";
import { Routes, Route } from "react-router-dom";
function RootRoute() {
  return (
    <div>
      <Routes>
        {RootRoutes.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </div>
  );
}

export default RootRoute;
