import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import {Body} from "./components/Body";
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
  console.log(<Body />)
  return (
    <div className="AppLayout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
