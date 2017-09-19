import angular from 'angular';

import ProgressBars from './directive';

export default angular
  .module('app.common.directives.ProgressBars', [])
  .directive('progressBars', () => new ProgressBars());
