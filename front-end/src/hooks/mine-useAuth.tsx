import { authUserContext } from "@/context/auth-user-context";
import { useContext } from "react";

export const useAuth = () => useContext(authUserContext);