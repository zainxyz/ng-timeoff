export default function NavigationService() {
  'ngInject';

  return {
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
  };
}
