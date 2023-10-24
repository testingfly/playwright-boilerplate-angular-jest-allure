import { WebActions } from '../../helpers/WebActions';
import type { Page } from 'playwright';

let webActions: WebActions;

export class HomePO {
    readonly page: Page;
    WELCOME_MESSAGE = "data-testid=welcome-message"; // custom test id
    APP_TITLE = '.app-title'; // class
    HOME_HEADER = "//h1[contains(text(),'Hello')]"; // xpath
    TITLE = "//html/head/title"; // xpath


    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);


    }

    async loadPage(): Promise<void> {
        await webActions.navigateToURL('/');
    }
    
    async verifyPageTitle(title: string): Promise<void> {
        await webActions.verifyPageTitle(title);
        await webActions.expectToBeValue(await webActions.page.title(), title, '');
    }

    async verifyWelcomeMessage(message: string): Promise<void> {
        await webActions.verifyElementText(this.WELCOME_MESSAGE, message);
        await webActions.verifyElementText(this.HOME_HEADER, message);
    }

    async verifyAppTitleText(message: string): Promise<void> {
        await webActions.verifyElementText(this.APP_TITLE, message);
    }



}
