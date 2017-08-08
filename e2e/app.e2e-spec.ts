import { NumberToWordAppPage } from './app.po';

describe('number-to-word-app App', () => {
  let page: NumberToWordAppPage;

  beforeEach(() => {
    page = new NumberToWordAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
