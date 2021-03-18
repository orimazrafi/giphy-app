import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  return (
    <div>
      <input
        name="username"
        type="text"
        value={credentials.username}
        onChange={(e) =>
          setCredentials((pre) => ({ ...pre, [e.target.name]: e.target.value }))
        }
      />
      <input
        name="password"
        type="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials((pre) => ({ ...pre, [e.target.name]: e.target.value }))
        }
      />
      <button
        onClick={() =>
          alert(
            `username is ${credentials.username} password is ${credentials.password}`
          )
        }
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
