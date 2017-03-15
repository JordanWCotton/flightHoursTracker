import { LogItPage } from './app.po';

describe('log-it App', () => {
  let page: LogItPage;

  beforeEach(() => {
    page = new LogItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
