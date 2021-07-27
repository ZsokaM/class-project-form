import React, { useState } from "react";
import { AxiosResponse } from "axios";
import Fieldset from "../components/Form/Fieldset";
import FormInput from "../components/Form/FormInput";
import Button from "../components/Button";
import { AxiosUserApi } from "../utils/AxiosApis";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = (event:any) => {
    event.preventDefault();
    AxiosUserApi.post(
        "login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then(
        (res: AxiosResponse) => {
          if (res.status === 200) {
            window.location.href = "/form";
          }
        },
        () => {
          console.log("Failure");
        }
      );
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <Fieldset>
          <FormInput
            label="Username"
            required="required"
            placeholder="username"
            onHandleFormElement={(e) => setUsername(e.target.value)}
          />
          <FormInput
            label="Password"
            required="required"
            placeholder="password"
            type="password"
            onHandleFormElement={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" btnType="primary">
            Submit
          </Button>
        </Fieldset>
      </form>
    </>
  );
}
