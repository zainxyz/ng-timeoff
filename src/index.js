import angular from 'angular';
import ngStorage from 'ngstorage';
import uiRouter from '@uirouter/angularjs';
// Import bootstrap 4 modules...only if we really need to.
// import 'bootstrap';
// Alternatively, you may import plugins individually as needed:
// import 'bootstrap/js/dist/dropdown';
// Read more about it @ https://getbootstrap.com/docs/4.0/getting-started/webpack/
// Import the bootstrap 4 styles
import 'bootstrap/dist/css/bootstrap.min.css';

import common from 'common';
import modules from 'modules';

import ngTimeOffController from './controller';

angular
  .module('ngTimeOff', [uiRouter, ngStorage.name, common.name, modules.name])
  .config(($locationProvider, $sessionStorageProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true);

    $sessionStorageProvider.setKeyPrefix('ngTimeOff.');
  })
  .controller('ngTimeOffController', ngTimeOffController);
