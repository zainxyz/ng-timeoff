export default function NavigationService() {
  'ngInject';

  return {
    /**
     * Get the navigation for the application
     * @method getNav
     * @return {Array}
     */
    getNav() {
      return [
        {
          title: 'Home',
          state: 'home',
        },
        {
          title: 'About',
          state: 'about',
        },
      ];
    },
    /**
     * Get the tagline for the application
     * @method getTagline
     * @return {string}
     */
    getTagline() {
      return 'An Angular 1.X implementation of a simple time-off component';
    },
  };
}
