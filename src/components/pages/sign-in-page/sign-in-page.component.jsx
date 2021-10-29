import React, { useState } from "react";
import axios from "axios";
import { TextInput } from "../../text-input/text-input.component";
import { useHistory } from "react-router-dom";

export const SignInPage = () => {
  const history = useHistory();
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
    e.preventDefault();

    console.log(username, password);
    axios.post('http://149.28.93.112:3000/users/login', { username, password }, {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  }).then((responce) => history.push("/"))
      .catch((err) => console.log(err));
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
