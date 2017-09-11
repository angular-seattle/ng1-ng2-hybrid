import { AppPage } from './app.po';

describe('ng1-ng2-hybrid', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header text', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Upgrading AngularJS to Angular using UpgradeAdapter');
  });
});
