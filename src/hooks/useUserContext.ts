import { useContext } from "react";
import { UserContext } from "../context/UsersContext";

export default function useUserContext() {
  const context = useContext(UserContext);

  /*
   * Ensures that the children were wrapped in a context provider
   */
  if (typeof context === "undefined")
    throw new Error("<UserContextProvider> was not found.");

  return context;
}
