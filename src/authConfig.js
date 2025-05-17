export const msalConfig = {
  auth: {
    clientId: '{CLIENT_ID}',
    authority: 'https://login.microsoftonline.com/{TENANT_ID}',
    redirectUri: 'http://localhost:3000'
  }
};

export const loginRequest = {
  scopes: ['https://analysis.windows.net/powerbi/api/.default']
};