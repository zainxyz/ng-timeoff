import angular from 'angular';

import AppHeaderModule from './app-header';
import AppNavModule from './app-nav';

export default angular.module('app.common.components', [AppHeaderModule.name, AppNavModule.name]);
