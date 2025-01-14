// @ts-check
const { test, expect } = require('@playwright/test');

test('Form Submit', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/');
await page.getByRole('link', { name: 'Form', exact: true }).click();
await expect(page).toHaveURL('https://formy-project.herokuapp.com/form');

await page.waitForTimeout(2000);

await page.getByPlaceholder('Enter first name').fill('Diasss');
await page.getByPlaceholder('Enter last name').fill('Dayezz');
await page.getByPlaceholder('Enter your job title').fill('Softawre Engineer');
await page.locator('#radio-button-1').click();
await page.locator('#checkbox-1').click();
await page.locator('select#select-menu').selectOption({ index: 2 });
await page.getByPlaceholder('mm/dd/yyyy').fill('12/06/2024');

await page.getByRole('button', { name: 'Submit' }).click();

await expect(page.locator('.alert.alert-success')).toBeVisible();

});

test('drag and drop', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/dragdrop');
await page.locator('#image').dragTo(await page.locator('#box'));
});

test('test alert', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/modal');
await page.locator('button#modal-button').click();
await page.waitForTimeout(2000);
await page.locator('button#ok-button').click();
await page.locator('button#close-button').click();
await expect(page).toHaveURL('https://formy-project.herokuapp.com/modal');

});


