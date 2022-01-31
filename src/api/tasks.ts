import { Task } from "../models/Task";
import api from "./api";

export const getTasks = (userId: number | string) =>
  api.get<Task[]>(`users/${userId}/todos/`);
