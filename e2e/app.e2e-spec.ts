import { TestangPage } from './app.po';

describe('testang App', function() {
  let page: TestangPage;

  beforeEach(() => {
    page = new TestangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
