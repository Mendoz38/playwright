import { test, expect } from '@playwright/test';


test('Compteur', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page).toHaveTitle('Vite + React + TS');
  

    await page.getByRole('button', { name: 'count is' }).click();
    await page.getByRole('button', { name: 'count is' }).click();
 //   await expect(page.getByRole('.card')).toHaveText('count is 0');

    
    // Click the get started link.
 //   await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
//    await page.getByRole('button').toHaveText('count is 0');
  });

  
  