import { screen, render } from "@testing-library/react";
import Contact from "../components/Contact";
import '@testing-library/jest-dom'

describe("Should render Contact component",()=>{
    // afterAll(()=>{
    //     console.log('afterAll')
    // })
    // beforeAll(()=>{
    //     console.log('beforeAll')
    // })
    // afterEach(()=>{
    //     console.log('afterEach')
    // })
    //  beforeEach(()=>{
    //     console.log('beforeEach')
    // })
     
     
    test("Should render 2 heading component",()=>{
        render (<Contact/>)
        const heading = screen.getAllByRole('heading')
        console.log({heading})
        expect(heading.length).toBe(2)
    })
    test("Should render form component",()=>{
        render (<Contact/>)
        const input = screen.getByRole('textbox');
        const Feedback = screen.getByPlaceholderText('Feedback...');
        const button = screen.getByRole('button');
        const submit = screen.getByText('Submit')
        expect(input).toBeInTheDocument();
        expect(Feedback).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(submit).toBeInTheDocument();

    })
})