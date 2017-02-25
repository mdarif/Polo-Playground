import { PoloAngularPage } from './app.po';

describe('polo-angular App', () => {
  let page: PoloAngularPage;

  beforeEach(() => {
    page = new PoloAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
