import Footer from "./Components/Footer/footer";
import "./app.scss";
import Header from "./Components/Header/header";
import Icon from "./Components/Icon/icon";

import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Services from "./Pages/Services/services";
import emailjs from 'emailjs-com';

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  emailjs.init("37xiDGS3H-A-ucKOu");
  const Layout = ()=>{
    return(
      <>
        <Header />
        <Outlet />
        <Icon />
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Layout />
        </>
          
      ),
      children: [
        {
          path: "/first-web",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Services />,
        },
      ],
}]);

  return (
   <div className="App">
    <RouterProvider router={router} />
   </div>
  );
}

export default App;