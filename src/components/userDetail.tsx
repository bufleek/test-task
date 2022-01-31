import List from "@mui/material/List";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTasks } from "../api/tasks";
import useUserContext from "../hooks/useUserContext";
import { Task as TaskModel } from "../models/Task";
import Task from "./task";

export default function UserDetail() {
  const { setUserTasks, getUser } = useUserContext();
  const { userId } = useParams();

  const user = getUser(userId);
  const tasks = user?.tasks ?? [];

  const getUserDetail = useCallback(() => {
    if (userId && user && !user.tasks)
      getTasks(userId).then(({ data }) => {
        setUserTasks(parseInt(userId), data);
      });
  }, [userId, user, setUserTasks]);

  const onComplete = (task: TaskModel) => {
    if (task.completed) return;

    const _tasks = [...(user?.tasks || [])];

    _tasks[_tasks.indexOf(task)]["completed"] = true;

    setUserTasks(task.userId, _tasks);
  };

  useEffect(() => {
    getUserDetail();
  }, [getUserDetail]);

  return (
    <List
      sx={{
        overflow: "scroll",
        maxHeight: "100%",
        paddingBottom: 20,
      }}>
      {tasks.map((task) => (
        <Task
          key={`${task.title}-${task.id}`}
          title={task.title}
          isComplete={task.completed}
          {...(!task.completed && { onComplete: () => onComplete(task) })}
        />
      ))}
    </List>
  );
}
