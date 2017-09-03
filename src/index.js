import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
// Import bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import common from 'common';
import modules from 'modules';

angular.module('ngTimeOff', [uiRouter, common.name, modules.name]).config(($locationProvider) => {
  'ngInject';

  $locationProvider.html5Mode(true);
});
