import controller from './controller';
import template from './template.html';

export default {
  bindings: {
    brand: '@',
    navitems: '<',
    slogan: '@',
  },
  controller,
  name: 'app-nav',
  template,
};
