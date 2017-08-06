import { KeepPage } from './app.po';

describe('keep App', () => {
  let page: KeepPage;

  beforeEach(() => {
    page = new KeepPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
