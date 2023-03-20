import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = (logoutType) => {
    if (logoutType === "popup") {
      instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/", // redircts the top level app after logout
      });
    }
  };

  return (
    <Button
      variant="secondary"
      className="ml-auto"
      onClick={() => handleLogout("popup")}
    >
      Sign Out
    </Button>
  );
};
