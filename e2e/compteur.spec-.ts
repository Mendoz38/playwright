import { test, expect } from '@playwright/test';


test('Récupère titre de la page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page).toHaveTitle('Vite + React + TS');
  });

   
test('Clique et vérifie le compteur', async ({ page }) => {

    await page.getByRole('button', { name: 'count is' }).click();
    await page.getByRole('button', { name: 'count is' }).click();

    await expect(page.getByRole('button', { name: 'count is' })).toHaveText('count is 2');
    
    
  });
 