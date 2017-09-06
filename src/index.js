import angular from 'angular';
import ngStorage from 'ngstorage';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import uiRouter from '@uirouter/angularjs';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-modal-service';

// Import bootstrap 4 modules...only if we really need to.
// import 'bootstrap';
// Alternatively, you may import plugins individually as needed:
// import 'bootstrap/js/src/dropdown';
// Read more about it @ https://getbootstrap.com/docs/4.0/getting-started/webpack/
// Import the bootstrap 4 styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/modal';

import common from 'common';
import modules from 'modules';
import {
  datePickerTemplate,
  datePickerDayTemplate,
  datePickerMonthTemplate,
  datePickerYearTemplate,
} from 'common/components/date-picker';
import { template as ModalTemplate } from 'common/components/time-off-modal';
import { template as ConfirmationModalTemplate } from 'common/components/confirmation-modal';
import ngTimeOffController from './controller';

angular
  .module('ngTimeOff', [
    uiRouter,
    ngStorage.name,
    ngAnimate,
    ngSanitize,
    'angularModalService',
    uiBootstrap,
    common.name,
    modules.name,
  ])
  .config(($locationProvider, $sessionStorageProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true);

    $sessionStorageProvider.setKeyPrefix('ngTimeOff.');
  })
  .controller('ngTimeOffController', ngTimeOffController)
  .run(($templateCache) => {
    'ngInject';

    // Can be replaced with ngTemplate-loader for webpack...
    $templateCache.put('modal.template.html', ModalTemplate);
    $templateCache.put('confirmation-modal.template.html', ConfirmationModalTemplate);
    $templateCache.put('uib/template/datepickerPopup/popup.html', datePickerTemplate);
    $templateCache.put('uib/template/datepicker/day.html', datePickerDayTemplate);
    $templateCache.put('uib/template/datepicker/month.html', datePickerMonthTemplate);
    $templateCache.put('uib/template/datepicker/year.html', datePickerYearTemplate);
  });
