import { FireAngularPage } from './app.po';

describe('fire-angular App', () => {
  let page: FireAngularPage;

  beforeEach(() => {
    page = new FireAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
