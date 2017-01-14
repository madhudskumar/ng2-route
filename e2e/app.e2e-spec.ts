import { Ng2RoutePage } from './app.po';

describe('ng2-route App', function() {
  let page: Ng2RoutePage;

  beforeEach(() => {
    page = new Ng2RoutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('route works!');
  });
});
