import angular from 'angular';

import AppHeaderModule from './app-header';
import AppNavModule from './app-nav';
import StatusBadgesModule from './status-badges';
import TimeOffRequestsModule from './time-off-requests';

export default angular.module('app.common.components', [
  AppHeaderModule.name,
  AppNavModule.name,
  StatusBadgesModule.name,
  TimeOffRequestsModule.name,
]);
