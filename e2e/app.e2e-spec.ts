import { KlifurPage } from './app.po';

describe('klifur App', function() {
  let page: KlifurPage;

  beforeEach(() => {
    page = new KlifurPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
