import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('has login button', async ({ page }) => {
    await page.goto('/')
    const loginBtn = await page.getByRole('link', { name: /log in/i })

    await expect(loginBtn).toBeVisible()
  })
  test('has signin button', async ({ page }) => {
    await page.goto('/')

    const signupBtn = await page.getByRole('link', { name: /sign up/i })

    await expect(signupBtn).toBeVisible()
  })
})
