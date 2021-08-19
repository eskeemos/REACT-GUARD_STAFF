const oktaAuthConfig = {
    issuer: 'https://dev-61209557.okta.com/oauth2/default',
    clientId: '0oa1i3ye8ePnbHqPF5d7',
    redirectUri: window.location.origin + '/login/callback',
  };
  
  const oktaSignInConfig = {
    logo: 'logo.png',
    baseUrl: 'https://dev-61209557.okta.com',
    clientId: '0oa1i3ye8ePnbHqPF5d7',
    redirectUri: window.location.origin + '/login/callback',
    authParams: { }
  };
  
  export { oktaAuthConfig, oktaSignInConfig };