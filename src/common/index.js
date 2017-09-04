import angular from 'angular';

import commonServices from './services';
import commonComponents from './components';
import commonConstants from './constants';

export default angular.module('app.common', [
  commonServices.name,
  commonComponents.name,
  commonConstants.name,
]);
