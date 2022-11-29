import { test } from '@playwright/test';

test('Test signin and signup', async ({ page }) => {
  await test.step('signin', async () => {
    await page.goto('http://localhost:3000/signin');

    const login = page.locator('input[name="login"]');
    const password = page.locator('input[name="password"]');
    const button = page.locator('text=Sign in');

    await login.fill('qwerty');
    await password.fill('qwertyqwerty');
    await button.click();
  });

  await test.step('signup', async () => {
    await page.goto('http://localhost:3000/signup');

    const displayName = page.locator('input[name="display_name"]');
    const firstName = page.locator('input[name="first_name"]');
    const secondName = page.locator('input[name="second_name"]');
    const login = page.locator('input[name="login"]');
    const email = page.locator('input[name="email"]');
    const phone = page.locator('input[name="phone"]');
    const password = page.locator('input[name="password"]');
    const repeadPassword = page.locator('input[name="password_again"]');
    const button = page.locator('text=Create user');

    await displayName.fill('qwerty');
    await firstName.fill('qwerty');
    await secondName.fill('qwerty');
    await login.fill('qwerty');
    await email.fill('qwerty@qwerty.ru');
    await phone.fill('7777777777');
    await password.fill('qwertyqwerty');
    await button.click();
  });
});
