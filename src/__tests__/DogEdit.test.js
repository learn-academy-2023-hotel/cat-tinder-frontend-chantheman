import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import DogEdit from "../pages/DogEdit";
import mockDogs from "../mockDogs";
const renderEdit = () => {
  render(
    <MemoryRouter initialEntries={["/dogedit/1"]}>
      <Routes>
        <Route
          path="/dogedit/:id"
          element={<DogEdit dogs={mockDogs} updateDog={() => {}} />}
        />
      </Routes>
    </MemoryRouter>
  );
};
describe("<DogEdit />", () => {
  it("displays a form to update the dog profile information", () => {
    renderEdit();
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toBeInTheDocument();
    const enjoysInput = screen.getByLabelText(/enjoys/i);
    expect(enjoysInput).toBeInTheDocument();
  });
});