import test from '../helpers/BaseTest';

test.describe('Home Page', () => {

    test.beforeEach(async ( { home }) => {
        await home.loadPage();
    });

    test('@smoke should show correct Page title', async ({ home }) => {
        await home.verifyPageTitle('Angular/TypeScript Hello World Project');
    });

    test('@smoke should show correct page Welcome Message', async ({ home }) => {
        await home.verifyWelcomeMessage('Hello World');
    });

    test('@smoke should show correct App title', async ({ home }) => {
        await home.verifyAppTitleText('Angular/TypeScript Hello World Starter');
    });
});
