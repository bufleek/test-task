import { ThemeProvider } from "@mui/material/styles";
import { render } from "@testing-library/react";
import React from "react";
import { UserContextProvider } from "./context/UsersContext";
import theme from "./theme";

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>{children}</UserContextProvider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };

