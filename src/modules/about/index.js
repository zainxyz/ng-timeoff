import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import commonServices from 'common/services';

import AboutComponent from './component';

export default angular
  .module('app.modules.aboutModule', [uiRouter, commonServices.name])
  .config(($stateProvider) => {
    'ngInject';

    const aboutRoute = {
      name: 'about',
      url: '/about',
      component: 'aboutModule',
      resolve: {
        content: (contentService) => {
          'ngInject';

          return contentService.getContent('about');
        },
      },
    };

    $stateProvider.state(aboutRoute);
  })
  .component('aboutModule', AboutComponent);
