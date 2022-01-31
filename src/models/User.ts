import { Task } from "./Task";

export default interface User {
  id: number;
  name: string;
  tasks?: undefined | Task[];
}
