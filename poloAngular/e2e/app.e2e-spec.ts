import { PoloAngularPage } from './app.po';

describe('polo-angular App', () => {
  let page: PoloAngularPage;

  beforeEach(() => {
    page = new PoloAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
