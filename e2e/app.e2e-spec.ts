import { AngularCliEsriPage } from './app.po';

describe('Scotch Journey App', function() {
  let page: AngularCliEsriPage;

  beforeEach(() => {
    page = new AngularCliEsriPage();
  });

  it('should display the title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Scotch Journey');
  });
});
