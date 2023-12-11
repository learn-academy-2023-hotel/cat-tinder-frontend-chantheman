import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Footer from "../components/Footer"

describe("<Footer />", () => {
  it("shows Footer page", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
  })
//   it("renders a logo with a src and alt", () => {
//     render(
//       <BrowserRouter>
//         <Footer />
//       </BrowserRouter>
//     )
//     const logo = screen.getByRole("img")
//     expect(logo).toHaveAttribute("src" ,"DogFooter.jpg")
//     expect(logo).toHaveAttribute("alt", "Footer")
  })
  