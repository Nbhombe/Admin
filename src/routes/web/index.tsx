import ForgetPassword from "../../pages/forgetPassword";
import NotFoundPage from "../../pages/notFoundPage";
import ResetPassword from "../../pages/resetPassword";
import SignIn from "../../pages/signIn";
import SignUp from "../../pages/signUp";

const WebRoutes = [
  {
    name: "login",
    element: <SignIn />,
    path: "",
    navigation: true,
  },
  {
    name: "SignUp",
    element: <SignUp />,
    path: "signup",
    navigation: true,
  },
  {
    name: "Forget_password",
    element: <ForgetPassword />,
    path: "forget_password",
    navigation: true,
  },
  {
    name: "Reset_password",
    element: <ResetPassword />,
    path: "reset_password",
    navigation: true,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default WebRoutes;
