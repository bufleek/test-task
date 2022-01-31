import { useContext } from "react";
import { UserContext } from "../context/UsersContext";

export default function useUserContext() {
  const context = useContext(UserContext);

  if (typeof context === "undefined")
    throw new Error("<UserContextProvider> was not found.");

  return context;
}
