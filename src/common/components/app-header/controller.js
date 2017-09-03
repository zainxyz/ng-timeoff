export default class AppHeaderCtrl {
  constructor(navigationService) {
    'ngInject';

    this.navigationService = navigationService;
  }

  $onInit() {
    this.navItems = this.navigationService.getNav();
    this.slogan = 'An Angular 1.X implementation of a simple time-off component';
  }
}
