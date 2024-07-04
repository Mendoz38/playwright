import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
});

test('Récupère titre de la page', async ({ page }) => {
    await expect(page).toHaveTitle('Vite + React + TS');
  });


  test('addition', async ({ page }) => {
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: 'sum' }).click();
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '=' }).click();
    await expect(page.locator('.screen')).toHaveText('2');
  });

  
test('soustraction', async ({ page }) => {
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: 'soustraction' }).click();
    await page.getByRole('button', { name: '0' }).click();
    await page.getByRole('button', { name: '=' }).click();
    await expect(page.locator('.screen')).toHaveText('1');
  });

  
test('multiplication', async ({ page }) => {
    await page.getByRole('button', { name: '2' }).click();
    await page.getByRole('button', { name: 'multiplication' }).click();
    await page.getByRole('button', { name: '2' }).click();
    await page.getByRole('button', { name: '=' }).click();
    await page.getByRole('button', { name: '4' }).click();
    await expect(page.locator('.screen')).toHaveText('4');
  });

  test('bouton 0', async ({ page }) => {
    await page.getByRole('button', { name: '1' }).click();
    await expect(page.locator('.screen')).toHaveText('0');
  });

test('bouton 1', async ({ page }) => {
    await page.getByRole('button', { name: '1' }).click();
    await expect(page.locator('.screen')).toHaveText('1');
  });

  test('bouton 2', async ({ page }) => {
    await page.getByRole('button', { name: '2' }).click();
    await expect(page.locator('.screen')).toHaveText('2');
  });

  test('bouton 3', async ({ page }) => {
    await page.getByRole('button', { name: '3' }).click();
    await expect(page.locator('.screen')).toHaveText('3');
  });

  test('bouton 4', async ({ page }) => {
    await page.getByRole('button', { name: '4' }).click();
    await expect(page.locator('.screen')).toHaveText('4');
  });

  test('bouton 5', async ({ page }) => {
    await page.getByRole('button', { name: '5' }).click();
    await expect(page.locator('.screen')).toHaveText('5');
  });

  test('bouton 6', async ({ page }) => {
    await page.getByRole('button', { name: '6' }).click();
    await expect(page.locator('.screen')).toHaveText('6');
  });

  test('bouton 7', async ({ page }) => {
    await page.getByRole('button', { name: '7' }).click();
    await expect(page.locator('.screen')).toHaveText('7');
  });

  test('bouton 8', async ({ page }) => {
    await page.getByRole('button', { name: '8' }).click();
    await expect(page.locator('.screen')).toHaveText('8');
  });

  test('bouton 9', async ({ page }) => {
    await page.getByRole('button', { name: '9' }).click();
    await expect(page.locator('.screen')).toHaveText('9');
  });

  test('RAZ', async ({ page }) => {
    await page.getByRole('button', { name: '5' }).click();
    await page.getByRole('button', { name: 'C', exact: true }).click();
    await expect(page.locator('.screen')).toHaveText('0');
  });
  
  test('Couleur rouge', async ({ page }) => {
    await expect(page.locator('.btnEqual')).toHaveCSS('background-color', 'rgb(255, 0, 0)');
  });

  