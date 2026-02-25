import React,  {lazy, Suspense, useContext, useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
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
  const [userName, setUserName] = useState('');
  useEffect(()=>{
    setUserName('Kiruthiga')
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value = {{name: userName, setUserName}}>
    <div className="AppLayout">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
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
        path : '/restaurant/:resId',
        element : <RestaurantMenu />
      },
      {
        path : '/cart',
        element : <Cart />
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
