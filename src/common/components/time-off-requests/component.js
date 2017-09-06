import controller from './controller';
import template from './template.html';
import './style.scss';

export default {
  bindings: {
    requests: '<',
    removeRequest: '&',
    editRequest: '&',
  },
  controller,
  name: 'time-off-requests',
  template,
};
