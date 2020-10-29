import React from "react";
import { render, fireEvent } from "@testing-library/react";
import * as tl from '@testing-library/react'
import App from "./App";
import ContactForm from "./components/ContactForm";

afterEach(tl.cleanup);

test("renders App without crashing", () => {
  render(<App />);
});

test("renders name form header", () => {

  const { getByText } = render(<ContactForm />);

  const header = getByText(/First Name/i);

  expect(header).toBeInTheDocument();

})

test('ContactForm adds new contacts to the list', () => {
  render(<App />);

  const firstNameInput = tl.screen.getByPlaceholderText(/edd/i);
  const lastNameInput = tl.screen.getByPlaceholderText(/burke/i);
  const emailNameInput = tl.screen.getByTestId("input-email");
  const messageInput = tl.screen.getByTestId('input-message');

  fireEvent.change(firstNameInput, { target: { value: 'fer'} });
  fireEvent.change(lastNameInput, { target: { value: 'chavez' } });
  fireEvent.change(emailNameInput, { target: { value: 'test@test.com' } });
  fireEvent.change(messageInput, { target: { value: 'None' } });

  const submitButton = tl.screen.getByRole('button', {name: /submit/i})
  fireEvent.click(submitButton);
})
