import Body from "../components/Body";
import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import UserContext from "../utils/UserContext";
import '@testing-library/jest-dom';
import MOCK from '../utils/resListMock.json';
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK),
  });
});

describe("Search Bar Integration Testing", () => {
  it("should test for search after input box is clicked with value Biriyani", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <UserContext.Provider value={{ name: "Kiruthiga", setUserName: jest.fn() }}>
            <Body />
          </UserContext.Provider>
        </BrowserRouter                                                                       >
      )
    );

    const searchBtn = screen.getByRole("button", {
      name: "Search Restaurant",
    });

    const searchInput = screen.getByTestId("searchInput");
    const resCardBeforSearch = screen.getAllByTestId("resCard");
    expect(resCardBeforSearch.length).toBe(41)
    fireEvent.change(searchInput, { target : {
        value : 'Biriyani'
    }})
    fireEvent.click(searchBtn)
    const resCardAfterSearch = screen.getAllByTestId("resCard");
    expect(resCardAfterSearch.length).toBe(4)
    expect(searchInput).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });
  it('should filter top rated restaurants on click of top rated restaurants',async()=>{
    await act(()=> render(<BrowserRouter><UserContext.Provider value={{ name: "Kiruthiga", setUserName: jest.fn() }}>
            <Body />
          </UserContext.Provider>
          </BrowserRouter>
          ))
    const topRatedRestaurants = screen.getByRole('button' ,{ name : 'Top Restaurants'})
    const resCardBeforeSearch = screen.getAllByTestId('resCard')
    expect(resCardBeforeSearch.length).toBe(41)
    fireEvent.click(topRatedRestaurants)
    const resCardAfterSearch = screen.getAllByTestId('resCard')
    expect(resCardAfterSearch.length).toBe(23)
    expect(topRatedRestaurants).toBeInTheDocument();

  })
  it("should update username in header when input changes", async () => {

  const Wrapper = ({ children }) => {
    const [name, setUserName] = React.useState("");
    return (
      <UserContext.Provider value={{ name, setUserName }}>
        {children}
      </UserContext.Provider>
    );
  };

  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Wrapper>
            <Header />
            <Body />
          </Wrapper>
        </Provider>
      </BrowserRouter>
    )
  );

  const userInput = screen.getByPlaceholderText(
    "Type user name here...."
  );

  fireEvent.change(userInput, {
    target: { value: "Kiru" },
  });

  const headerUsername = screen.getByTestId("searchInput12");

  expect(headerUsername).toHaveTextContent("Kiru");
});
});                                                              