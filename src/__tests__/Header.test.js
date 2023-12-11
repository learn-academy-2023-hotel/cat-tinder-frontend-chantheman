import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
  it("shows Header page", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })
  it("renders a logo with a src and alt", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const logo = screen.getByRole("img")
    expect(logo).toHaveAttribute("src" ,"DogHeader.jpg")
    expect(logo).toHaveAttribute("alt", "header")
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Meet the Dogs"))
  expect(screen.getByText("Meet the Dogs")).toBeInTheDocument()
  userEvent.click(screen.getByText("Add a New Dog"))
  expect(screen.getByText("Add a New Dog")).toBeInTheDocument()
  userEvent.click(screen.getByText("Adopt a Dog!"))
  expect(screen.getByText("Adopt a Dog!")).toBeInTheDocument()
  })

}
)