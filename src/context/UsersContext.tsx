import { createContext, ReactNode, useState } from "react";
import { getUsers } from "../api/users";
import { Task } from "../models/Task";
import User from "../models/User";

/*
 * Maintains the state of the whole app - fetched users and their tasks
 *Defining initial state
 */
const initialValues: InitialValues = {
  users: [],
  getAllUsers: () => Promise.reject([]),
  setUserTasks(__, _) {},
  getUser: (_) => undefined,
};
export const UserContext = createContext(initialValues);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);

  const getAllUsers = () => {
    return getUsers().then(({ data }) => {
      setUsers(data);
      return data;
    });
  };

  const setUserTasks = (userId: number, tasks: Task[]) => {
    const user = users.find((i) => i.id === userId);

    if (!user) return;
    const _users = [...users];
    const index = _users.indexOf(user);

    _users[index]["tasks"] = tasks;
    setUsers(_users);
  };

  const getUser = (userId: string | undefined) =>
    userId ? users.find((i) => i.id === parseInt(userId)) : undefined;
  /*
   * Wraps the children in a context provider
   */
  return (
    <UserContext.Provider value={{ users, getAllUsers, setUserTasks, getUser }}>
      {children}
    </UserContext.Provider>
  );
}

type InitialValues = {
  users: User[];
  getAllUsers(): Promise<User[]>;
  setUserTasks(userId: number, tasks: Task[]): void;
  getUser: (userId: string | undefined) => undefined | User;
};
