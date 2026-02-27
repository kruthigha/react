import { sum } from "../components/sum"


test("Sum function will return the sum of two",()=>{
    const result = sum(3,4)
    expect(result).toBe(3+4) // assertion Best practive, even empty test cases pass
})

