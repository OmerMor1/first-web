import Footer from "./Components/Footer/footer";
import "./app.scss";
import Header from "./Components/Header/header";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Services from "./Pages/Services/services";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {

  const Layout = ()=>{
    return(
      <>
        <Header />
        <Outlet />
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