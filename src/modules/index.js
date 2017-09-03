import angular from 'angular';

import HomeModule from './home';
import AboutModule from './about';

export default angular.module('app.modules', [HomeModule.name, AboutModule.name]);
