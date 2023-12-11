import { render } from "@testing-library/react"
import Home from "../pages/Home"
import { BrowserRouter } from "react-router-dom"

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(
      < BrowserRouter >
        <Home />
      </BrowserRouter>)
  })
})