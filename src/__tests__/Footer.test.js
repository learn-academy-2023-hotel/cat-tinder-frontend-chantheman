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

  })
  