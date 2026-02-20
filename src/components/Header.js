import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState(true);
  const [count, setCount] = useState(0);
  console.log('Header Rendered');

  useEffect(()=>{
    console.log('useEff called');
  },[count])
  const onlineStatus = useOnlineStatus();
  return (
    <div id="header-container" className="flex justify-between shadow-xl sm:bg-purple-500 md:bg-yellow-300 lg:bg-orange-500 ">
      <div id="logo-container" className="logoContainer">
        <img id="img-container" className="w-40" src={LOGO_URL} />
      </div>
      <div id="nav-items" className="flex">
        <ul className="flex items-center">
          <li id="nav-item" className="p-4 m-2 text-amber-50 text-lg"> Online Status: {onlineStatus?"💚":"❤️"}</li>
          <li id="nav-item" className="p-4 m-2 text-amber-50 text-lg">
            <Link to='/'>Home</Link>
          </li>
          <li id="nav-item" className="p-4 m-2 text-amber-50 text-lg">
            <Link to='/about'>About</Link>
          </li>
          <li id="nav-item" className="p-4 m-2 text-amber-50 text-lg">
             <Link to = '/contact'>Contact</Link>
          </li>
          <li id="nav-item" className="p-4 m-2 text-amber-50 text-lg">
            <Link to = '/cart'>Cart</Link>
          </li>
          <li id="nav-item" className="p-4 m-2 text-amber-50 text-lg">
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li id="nav-item" className="p-4 m-2 text-amber-50 text-lg">
            <button id="loginBtn" onClick={() => {
              setLoginBtn((t) => !t);
              setCount((t)=> t); // useEffect will not be called after initial render as count remains unchaned
            }}>
              {loginBtn ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
