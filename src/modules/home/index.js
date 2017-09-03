import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import commonServices from 'common/services';

import HomeComponent from './component';

export default angular
  .module('app.modules.homeModule', [uiRouter, commonServices.name])
  .config(($stateProvider) => {
    'ngInject';

    const homeRoute = {
      name: 'home',
      url: '/',
      component: 'homeModule',
      resolve: {
        content: (contentService) => {
          'ngInject';

          return contentService.getContent('home');
        },
      },
    };

    $stateProvider.state(homeRoute);
  })
  .component('homeModule', HomeComponent);
