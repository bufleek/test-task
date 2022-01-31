import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import UserDetail from "./components/userDetail";
import Users from "./components/users";
import { UserContextProvider } from "./context/UsersContext";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <Container
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}>
          <Typography variant="h3" textAlign={"center"}>
            Onboarding tracker
          </Typography>

          <BrowserRouter>
            <Routes>
              <Route path="" element={<Navigate to="/users" />} />
              <Route path="/users" element={<Users />}>
                <Route path=":userId" element={<UserDetail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
