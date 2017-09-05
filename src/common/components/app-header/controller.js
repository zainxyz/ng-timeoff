export default class AppHeaderCtrl {
  constructor(navigationService) {
    'ngInject';

    this.navigationService = navigationService;
  }

  $onInit() {
    // populate the navigational items
    this.navItems = this.navigationService.getNav();
    // retrieve the tagline
    this.tagline = this.navigationService.getTagline();
  }
}
