import User from "../models/User";
import api from "./api";

export const getUsers = () => api.get<User[]>("/users");
