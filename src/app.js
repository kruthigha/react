import React,  {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
/**
 * AppLayout — main app layout component.
 * Header
 * --Logo
 * --NavItems
 * Body Component
 * --Search
 * --Restaurant Container
 *    => Restaurant cards
 * Footer
 * --copyrights
 * --Links
 * --Address
 * --Contact
 * @returns {JSX.Element} The rendered application layout.
 */

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
      <Outlet />
    </div>
  );
};
const Grocery = lazy(()=> import('./components/Grocery'))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/cart",
        element: <Error />,
        errorElement: <Error />,
      },
      {
        path : '/restaurant/:resId',
        element : <RestaurantMenu />
      },
      {
        path : '/grocery',
        element : <Suspense fallback = {<h1>Loading...</h1>}>
          <Grocery />
        </Suspense>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
