import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import Axios, { AxiosResponse } from "axios";
import { AxiosUserApi } from "../utils/AxiosApis";
import { UserInterface } from "../utils/Interfaces";

export const userContext = createContext<Partial<UserInterface>>({});

export default function Context(props: any) {
  const [user, setUser] = useState<UserInterface>();

  useEffect(() => {
    AxiosUserApi.get("user", { withCredentials: true }).then(
      (res: AxiosResponse) => {
        setUser(res.data);
      }
    );
  }, []);

  return (
    <userContext.Provider value={user!}>{props.children}</userContext.Provider>
  );
}
