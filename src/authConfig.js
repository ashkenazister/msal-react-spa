// https://learn.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react
export const msalConfig = {
  auth: {
    tenantId: "Your APP Tenant ID come here.",
    clientId: "Your APP Client ID come here.",
    authority:
      "Your Authority URL come here.",
    redirectUri: "Your APP Redirect URL come here.",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: [
    "Your APP SCOPE come here",
  ],
};
