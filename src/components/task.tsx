import Check from "@mui/icons-material/Check";
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Fragment, MouseEvent } from "react";

export default function Task({
  isComplete,
  title,
  onComplete,
}: {
  title: string;
  isComplete: boolean;
  onComplete?: (e?: MouseEvent) => void;
}) {
  return (
    <Fragment>
      <ListItem>
        <IconButton
          color={isComplete ? "success" : "default"}
          sx={{ marginRight: 1.5 }}
          onClick={onComplete}>
          {isComplete ? <Check /> : <CheckBoxOutlineBlank />}
        </IconButton>
        <ListItemText>{title}</ListItemText>
      </ListItem>
      <Divider />
    </Fragment>
  );
}
