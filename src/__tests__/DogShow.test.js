import { render } from "@testing-library/react"
import DogShow from "../pages/DogShow"
import { BrowserRouter } from "react-router-dom"

describe("<DogShow />", () => {
  it("renders without crashing", () => {})
  render (
    <BrowserRouter>
      <DogShow/>
    </BrowserRouter>
  )
})

  it("shows only one dog", () => {
    render(
      <BrowserRouter>
        <DogShow />
      </BrowserRouter>
    )
  })