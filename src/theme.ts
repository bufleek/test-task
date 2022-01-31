import { createTheme } from "@mui/material/styles";
const {
  palette: { augmentColor },
} = createTheme();

const theme = createTheme({
  palette: {
    success: augmentColor({
      color: { main: "#32cd32" },
    }),
  },
});

export default theme;
