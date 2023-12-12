import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import mockDogs from "../mockDogs"
import DogIndex from "../pages/DogIndex"


describe("<DogIndex />", () => {
  it("renders without crashing", () => {
    render(
    <BrowserRouter>
      <DogIndex/>
    </BrowserRouter>
  
  )
})
  
  it("renders dog cards", () => {
    render(
      <BrowserRouter>
        <DogIndex dogs={mockDogs} />
      </BrowserRouter>
    )
    
    mockDogs.forEach((dog) => {
    const dogName = screen.getByText(dog.name)
    expect(dogName).toBeInTheDocument()
  })  
})})
