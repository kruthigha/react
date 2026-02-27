import { render,screen } from "@testing-library/react";
import RestaurantCard,{ withPromotedLabel } from "../components/RestaurantCard";
import MockData from '../utils/resCardMockData.json'
import UserContext from "../utils/UserContext";
import '@testing-library/jest-dom'

describe("Restaurant Card test cases", ()=>{
    it('Should render restaurant card',()=>{
        render(
      <UserContext.Provider value={{ name: "Kiruthiga" }}>
        <RestaurantCard resData={MockData.resData} />
      </UserContext.Provider>
    );
        const heading = screen.getByText(MockData.resData.info.name);
        expect(heading).toBeInTheDocument()

    })
    it('Should render promoted label',()=>{
        const PromotedResCard = withPromotedLabel(RestaurantCard)
       render(
      <UserContext.Provider value={{ name: "Kiruthiga" }}>
        <PromotedResCard resData={MockData.resData} />
      </UserContext.Provider>
    );
    
        const heading = screen.getByText('Promoted');
        MockData.resData.info.promoted ?
            expect(heading).toBeInTheDocument()
        :
            expect(heading).not.toBeInTheDocument()
        
        
    })
})
