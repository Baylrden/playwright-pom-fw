const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const config = require('../config/envConfig');

const env = process.env.ENV || 'prod'; // Default to 'prod' if not set
const testData = config[env];


test('Login Test', async ({page}) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  
  // Navigate to the login page
  await login.navigateToLogin(testData.baseURL);
  
  // Log in with valid credentials
  await login.login(testData.username, testData.password);
  
  // Verify successful login by checking the URL or text on the inventory page
  await expect(page).toHaveURL(`${testData.baseURL}inventory.html`);
  await expect(inventory.firstProduct).toHaveText('Sauce Labs Backpack');

    // Logout from the application
    await inventory.logout();

    // Verify that the user is logged out by checking the URL or a specific element on the login page
    await expect(login.loginButton).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    
  
})