import angular from 'angular';

import commonServices from 'common/services';
import { controller as ModalController } from 'common/components/time-off-modal';
import { controller as ConfirmationModalController } from 'common/components/confirmation-modal';

import HomeComponent from './component';

export default angular
  .module('app.modules.homeModule', [commonServices.name])
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
  .component('homeModule', HomeComponent)
  .controller('ModalController', ModalController)
  .controller('ConfirmationModalController', ConfirmationModalController);
