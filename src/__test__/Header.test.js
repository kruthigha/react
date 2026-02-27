import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../utils/UserContext";
import appStore from "../utils/appStore";
import Header from "../components/Header";

import "@testing-library/jest-dom";

describe("Header component test case", () => {
  it("Should find login button", () => {
    render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ name: "Kiruthiga" }}>
          
            <Header />
        </UserContext.Provider>
      </Provider>
      </BrowserRouter>,
    );
    const LoginBtn = screen.getByRole("button" , { name : 'Login'})
    expect(LoginBtn).toBeInTheDocument();
  });
  it("Should find cart ", () => {
    render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ name: "Kiruthiga" }}>
          
            <Header />
        </UserContext.Provider>
      </Provider>
      </BrowserRouter>,
    );
    const Cart = screen.getByText(/Cart/)
    expect(Cart).toBeInTheDocument();
  });
  it("Should click login btn and it then changes to logout ", () => {
    render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ name: "Kiruthiga" }}>
          
            <Header />
        </UserContext.Provider>
      </Provider>
      </BrowserRouter>,
    );
    const loginBtn = screen.getByRole('button', { name : 'Login'})
    fireEvent.click(loginBtn)
    const logoutBtn = screen.getByRole('button', { name : 'Logout'})
    
    expect(logoutBtn).toBeInTheDocument();
  });
});
