import { SAPNAPage } from './app.po';

describe('sapna App', () => {
  let page: SAPNAPage;

  beforeEach(() => {
    page = new SAPNAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
