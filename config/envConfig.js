const config = {
  dev: {
    baseURL: 'https://dev.saucedemo.com/',
    username: 'dev_user',
    password: 'dev_pass'
  },
  staging: {
    baseURL: 'https://staging.saucedemo.com/',
    username: 'staging_user',
    password: 'staging_pass'
  },
  prod: {
    baseURL: 'https://www.saucedemo.com/',
    username: 'standard_user',
    password: 'secret_sauce'
  }
};

module.exports = config;
