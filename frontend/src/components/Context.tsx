import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import Axios, { AxiosResponse } from "axios";
import { AxiosUserApi } from "../utils/AxiosApis";
import { UserInterface } from "../utils/Interfaces";

export const myContext = createContext<Partial<UserInterface>>({});

export default function Context(props: PropsWithChildren<any>) {
  const [user, setUser] = useState<UserInterface>();

  useEffect(() => {
    AxiosUserApi.get("user", { withCredentials: true }).then(
      (res: AxiosResponse) => {
        setUser(res.data);
      }
    );
  }, []);

  return (
    <myContext.Provider value={user!}>{props.children}</myContext.Provider>
  );
}
