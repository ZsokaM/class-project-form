import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import Fieldset from "../components/Form/Fieldset";
import FormInput from "../components/Form/FormInput";
import Button from "../components/Button";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = () => {
    axios
      .post(
        "http://localhost:5050/login",
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
          if (res.data === "success") {
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
          onHandleFormElement={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" btnType="primary" onClick={login}>
          Submit
        </Button>
      </Fieldset>
    </>
  );
}
