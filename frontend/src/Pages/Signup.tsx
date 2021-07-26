import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import Fieldset from "../components/Form/Fieldset";
import FormInput from "../components/Form/FormInput";
import Button from "../components/Button";

export default function Signup() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signup = () => {
    axios
      .post(
        "http://localhost:5050/signup",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res: AxiosResponse) => {
        if (res.data === "success") {
          window.location.href = "/login";
        }
      });
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={signup}>
        <Fieldset>
          <FormInput
            label="Username"
            required="required"
            placeholder="username"
            onHandleFormElement={(e) => setUsername(e.target.value)}
          />
          <FormInput
            label="Password"
            type="password"
            required="required"
            placeholder="password"
            onHandleFormElement={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" btnType="primary">
            Signup
          </Button>
        </Fieldset>
      </form>
    </>
  );
}
