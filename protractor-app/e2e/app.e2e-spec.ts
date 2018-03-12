import { AppPage } from './app.po';

describe('protractor-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('Display Name', () => {
    page.navigateTo();
    expect(page.getPText()).toEqual('Vineeth');
  });
});
