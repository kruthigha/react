import { render, screen, act, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import Cart from "../components/Cart";
import Header from "../components/Header";
import '@testing-library/jest-dom'
import { Browser } from "puppeteer";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";


describe('Cart Flow integration testing',()=>{
    it('should test cart flow',async()=>{
        await act(() => render(<BrowserRouter >
            <UserContext.Provider  value={{ name: "Kiruthiga", setUserName: jest.fn()}} >
            <Provider store={appStore}>
                <RestaurantMenu />
                <Header />
                <Cart />
            </Provider>
            </UserContext.Provider>
            </BrowserRouter>)) 
        const menu = screen.getByText('Non-veg Starter (18)') 
        fireEvent.click(menu);
        const addBtn = screen.getAllByTestId('addBtn')
        expect(addBtn.length).toBe(18);
        const cartHeader = screen.getByText('Cart(0 items)')
        expect(cartHeader).toBeInTheDocument();
        fireEvent.click(addBtn[0]);
        const cartHeader1 = screen.getByText('Cart(1 items)')
        expect(cartHeader1).toBeInTheDocument();
        fireEvent.click(addBtn[1]);
        const cartHeader2 = screen.getByText('Cart(2 items)')
        expect(cartHeader2).toBeInTheDocument();
        expect(menu).toBeInTheDocument();
        const cartItems = screen.getAllByTestId('itemCard')
        expect(cartItems.length).toBe(20);
        const clearCartBtn = screen.getByText('Clear Cart');
        expect(clearCartBtn).toBeInTheDocument();
        fireEvent.click(clearCartBtn);
        const cartItems1 = screen.getAllByTestId('itemCard')
        expect(cartItems1.length).toBe(18);
    })
})