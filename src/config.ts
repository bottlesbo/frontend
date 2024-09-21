export enum EnvTypes {
  development = 'development',
  production = 'production',
  stage = 'staging',
}

const envType: EnvTypes =
  process.env.REACT_APP_NODE_ENV as EnvTypes ||
  process.env.NODE_ENV ||
  EnvTypes.development;

const config = {
  apiBaseUrl: 'http://intern-test.fusion-team.com/api',
};

// eslint-disable-next-line default-case
switch (envType) {
  case EnvTypes.production:
    config.apiBaseUrl = 'http://intern-test.fusion-team.com/api';
    break;

  case EnvTypes.stage:
    config.apiBaseUrl = 'http://intern-test.fusion-team.com/api';
    break;
}

export const isDev = envType === EnvTypes.development;

export default config;
