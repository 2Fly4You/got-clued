import { CluedoAppPage } from './app.po';

describe('cluedo-app App', () => {
  let page: CluedoAppPage;

  beforeEach(() => {
    page = new CluedoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
