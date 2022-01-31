import ChevronRight from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

export default function Users() {
  const navigate = useNavigate();
  const { getAllUsers, users } = useUserContext();
  const { userId } = useParams();

  useEffect(() => {
    getAllUsers().then((users) => {
      if (!userId) navigate(`./${users[0].id}`);
    });
  }, []);

  const handleUserClick = (userId: number) => navigate(`./${userId}`);

  return (
    <Stack direction="row" sx={{ height: "100%" }} spacing={{ xs: 2, md: 4 }}>
      <Box sx={{ flex: 1 }}>
        <Heading variant="h5">Users</Heading>
        <List sx={{ overflow: "scroll", maxHeight: "100%", paddingBottom: 20 }}>
          {users.map((user) => {
            const selected = !!(userId && user.id === parseInt(userId));
            return (
              <ListItem disablePadding key={`${user.id}`}>
                <ListItemButton
                  onClick={() => handleUserClick(user.id)}
                  color="success"
                  selected={selected}>
                  <ListItemText>{user.name}</ListItemText>
                  <ChevronRight sx={{ opacity: selected ? 0.8 : 0.3 }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/*  */}
      <Box sx={{ flex: 1 }}>
        <Heading variant="h5">Task List</Heading>
        <Outlet />
      </Box>
    </Stack>
  );
}

const Heading = styled(Typography)(() => ({
  paddingTop: 20,
  paddingBottom: 10,
}));
