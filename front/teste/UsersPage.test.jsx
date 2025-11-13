import { render, screen, waitFor } from "@testing-library/react";
import UsersPage from "../UsersPage";
import axios from "axios";

jest.mock("axios");

test("carrega usuario", async () => {
  axios.get.mockResolvedValueOnce({ data: [{ id:1, name:"Joao"}]});
  render(<UsersPage />);
  await waitFor(() => {
    expect(screen.getByText("Joao")).toBeInTheDocument();
  });
});