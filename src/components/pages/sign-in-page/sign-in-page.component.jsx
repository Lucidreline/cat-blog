import React, { useState } from "react";
import { TextInput } from "../../text-input/text-input.component";

export const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    console.log("Submitting");
    e.preventDefault();

    console.log(username, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          style={{
            display: `none`,
          }}
        />
        <TextInput required handleChange={handleChange} name="username" />
        <TextInput required handleChange={handleChange} name="password" />
      </form>
    </div>
  );
};
