import controller from './controller';
import template from './template.html';

export default {
  bindings: {
    content: '<',
  },
  controller,
  name: 'home-module',
  template,
};
