import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useAuth0 } from "@auth0/auth0-react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const HomePage = () => {
  const { logout } = useAuth0();
  const user = localStorage.getItem("user");
  const submit = () => {
    logout({ returnTo: window.location.origin });
    localStorage.removeItem("user");
  };

  return (
    <>
      <div>
        Hello {user && JSON.parse(user)?.given_name}{" "}
        <ButtonComponent
          name="Log out"
          variant="danger"
          size={4}
          submit={submit}
        />
      </div>
      <Sidebar />
    </>
  );
};
export default HomePage;
