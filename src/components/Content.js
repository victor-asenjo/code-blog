import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from '../constantes/routes'

const routesImp = routes;

const NestedRoutes = ({ routes = routesImp }) => (
  <Routes>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={
          <React.Fragment key={route.path}>
            {route.element}
            {route.children && (
              <Routes>
                {route.children.map((child) => (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={child.element}
                  />
                ))}
              </Routes>
            )}
          </React.Fragment>
        }
      />
    ))}
  </Routes>
);

export default NestedRoutes;
