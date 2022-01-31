import { createContext, ReactNode, useState } from "react";
import { getUsers } from "../api/users";
import { Task } from "../models/Task";
import User from "../models/User";

const initialValues: InitialValues = {
  users: [],
  getAllUsers: () => Promise.reject([]),
  loading: false,
  setUserTasks(__, _) {},
  getUser: (_) => undefined,
};
export const UserContext = createContext(initialValues);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllUsers = () => {
    setLoading(true);
    return getUsers()
      .then(({ data }) => {
        setUsers(data);
        return data;
      })

      .finally(() => setLoading(false));
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

  return (
    <UserContext.Provider
      value={{ users, loading, getAllUsers, setUserTasks, getUser }}>
      {children}
    </UserContext.Provider>
  );
}

type InitialValues = {
  users: User[];
  loading: boolean;
  getAllUsers(): Promise<User[]>;
  setUserTasks(userId: number, tasks: Task[]): void;
  getUser: (userId: string | undefined) => undefined | User;
};
