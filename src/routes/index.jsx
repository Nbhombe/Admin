import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebRoutes from "./web";
import AdminRoutes from "./admin";
import AdminLayout from "../componets/layout/admin";

const AppRoutes = () => {
  const renderWebRoutes = (route, index) => {
    return (
      <Route
        key={`web-route-protected-${index}`}
        path={route?.path}
        element={route?.element}
      />
    );
  };


  const renderAdmiRoutes = (route, index) => {
    return (
      <Route
        key={`web-route-protected-${index}`}
        path={route?.path}
        element={<AdminLayout>{route?.element}</AdminLayout>}
      />
    );
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*">
          {WebRoutes?.map(renderWebRoutes)}
        </Route>
        <Route exact path="/admin/*">
          {AdminRoutes?.map(renderAdmiRoutes)}
        </Route>        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
