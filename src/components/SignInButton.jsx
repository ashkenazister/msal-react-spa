import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";

/**
 * Renders a button which, when selected, will open a popup for login
 * if you want to invoke a redirect login when selected, change "popup" to redirect
 */
export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest)
      .then((response) => {
        instance.setActiveAccount(response.account);
      })
      .catch((e) => {
        console.log(e);
      });
    }
  };
  return (
    <Button
      variant="secondary"
      className="ml-auto"
      onClick={() => handleLogin("popup")}
    >
      Sign In
    </Button>
  );
};
