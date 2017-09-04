import controller from './controller';
import template from './template.html';
import './style.scss';

export default {
  bindings: {
    badges: '<',
    requests: '<',
  },
  controller,
  name: 'time-off-requests',
  template,
};
