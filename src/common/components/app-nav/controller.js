export default class AppNavCtrl {
  constructor($state) {
    'ngInject';

    // This is so we can access the $state within the component's template to match the current
    // state that the user is viewing.
    this.$state = $state;
  }
}
