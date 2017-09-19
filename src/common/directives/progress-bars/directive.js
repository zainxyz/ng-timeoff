import template from './template.html';

export default class Progress {
  constructor() {
    'ngInject';

    this.template = template;
    this.restrict = 'E';
    this.scope = {
      bars: '<',
    };
  }
}
