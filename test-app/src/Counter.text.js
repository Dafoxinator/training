import{render, screen, fireEvent} from "@testing-library/react";
import Coutner from "./Counter"

test('Testing the Increment Coutner', ()=>{
    render(<Counter/>)

    const counter=screen.getByTestId("coutner");
    const incrementBtn = screen.getByTestId(increment);
    const decrementBtn = screen.getByTestId(decrement);

    fireEvent.click(incrementBtn);

    expect(counter).toHaveTextContent("1");

    fireEvent.click(decrementBtn);

    expect(counter).toHaveTextContent("0");

});