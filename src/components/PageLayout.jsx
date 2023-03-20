import React from "react";
import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  useIsAuthenticated,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  // Hook Function - Get the user Name and email address
  const [username, setUserName] = useState(null);
  const [name, setName] = useState(null);
  useEffect(() => {
    if (isAuthenticated) {
      const currentAccount = instance.getActiveAccount();

      if (currentAccount) {
        setUserName(currentAccount.username);
        setName(currentAccount.name);
      }
    }
  }, [isAuthenticated]);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <a className="navbar-brand" href="/">
          MSAL React
        </a>
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </Navbar>
      <div className="container">
        <AuthenticatedTemplate>
          <h1>
            <center>Welcome to the Microsoft Authentication Library ...</center>
          </h1>
          <h3>{name} you are authenticated</h3>
          <h3>Your email address is {username}</h3>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <h1>
            <center>Welcome to the Microsoft Authentication Library ...</center>
          </h1>
          <h3>You are not authenticated, please Sign In first</h3>
        </UnauthenticatedTemplate>
      </div>
      {props.children}
    </>
  );
};
