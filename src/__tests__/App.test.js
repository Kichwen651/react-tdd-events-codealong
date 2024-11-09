import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from '@testing-library/user-event'; 
import '@testing-library/jest-dom';

// Code tests here
   //Arrange
test("selected topping disappears when checked a second time", () => {
    render(<App />);
     //Act
    const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  
    userEvent.click(addPepperoni);
     //Assert
    expect(addPepperoni).toBeChecked();
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.getByText("Pepperoni")).toBeInTheDocument();
  
    userEvent.click(addPepperoni);
  
    expect(addPepperoni).not.toBeChecked();
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
  });