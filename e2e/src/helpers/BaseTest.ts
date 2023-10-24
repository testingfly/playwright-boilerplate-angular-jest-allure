import { test as base } from '@playwright/test';
import { HomePO } from '../pageobjects/pages/homepage.po';

const test = base.extend<{
    home: HomePO;

}>({
    home: async ({ page }, use) => {
        await use(new HomePO(page));
    }
});

export default test;
