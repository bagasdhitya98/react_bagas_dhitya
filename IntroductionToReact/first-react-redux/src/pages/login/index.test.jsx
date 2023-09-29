import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Login from "./index";
import { Provider } from "react-redux";
import store from "../../store";

it("renders login form correctly", () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  const usernameLabel = getByLabelText("Username");
  const passwordLabel = getByLabelText("Password");

  expect(usernameLabel).toBeDefined();
  expect(passwordLabel).toBeDefined();
});

it("updates input value when typing ", () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  const usernameInput = getByLabelText("Username");
  const passwordInput = getByLabelText("Password");

  fireEvent.change(usernameInput, { target: { value: "myUsername" } });
  fireEvent.change(passwordInput, { target: { value: "myPassword" } });

  expect(usernameInput.value).toBe("myUsername");
  expect(passwordInput.value).toBe("myPassword");
});
