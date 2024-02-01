import AddProduct from "../../pages/addProduct";
import Dashboard from "../../pages/dashboard";
import NotFoundPage from "../../pages/notFoundPage";
import Notification from "../../pages/notification";
import Products from "../../pages/products";
import Profile from "../../pages/profile";

const AdminRoutes = [
  {
    name: "Dasboard",
    element: <Dashboard />,
    path: "",    
    navigation: true,
  },
  {
    name: "Notification",
    element: <Notification />,
    path: "notification",    
    navigation: true,
  },
  {
    name: "Products",
    element: <Products />,
    path: "products",    
    navigation: true,
  },
  {
    name: "Add Products",
    element: <AddProduct />,
    path: "add_product",    
    navigation: true,
  },
  {
    name: "Profile",
    element: <Profile />,
    path: "profile",    
    navigation: true,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default AdminRoutes;
