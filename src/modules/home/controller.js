export default class HomeCtrl {
  constructor($sessionStorage, timeOffService, $scope, ModalService) {
    'ngInject';

    this.timeOffService = timeOffService;
    this.$storage = $sessionStorage;
    this.$scope = $scope;
    this.$modalService = ModalService;
  }

  $onInit() {
    this.updateTimeOffRequests();
    // a way to watch on the storage and update the time off requests...bad idea
    // this.$scope.$watch(() => this.$storage, () => this.updateTimeOffRequests());
    // this.$scope.$watch(angular.bind(this, () => this.requests), requests =>
    //   this.updateStatusBadges(),
    // );
  }

  /**
   * Update all of the current status badges (pending:0, approved:3, rejected:1)
   * @method updateStatusBadges
   */
  updateStatusBadges = () => {
    this.statusBadges = this.timeOffService.getStatusList(this.requests);
  };

  /**
   * Update the current time off requests that are being displayed to the user
   * @method updateTimeOffRequests
   */
  updateTimeOffRequests = () => {
    this.requests = this.timeOffService.fixDates(this.$storage.timeOffRequests);
    this.updateStatusBadges();
  };

  /**
   * Add a single time off request to the current $sessionStorage
   * @method addRequestToStorage
   * @param  {Object}            request The request to be added to the storage
   */
  addRequestToStorage = (request) => {
    this.$storage.timeOffRequests = this.timeOffService.addRequestToStorage(
      this.timeOffService.fixDates(this.$storage.timeOffRequests),
      request,
    );
    this.updateTimeOffRequests();
  };

  /**
   * Remove a single time off request from the current $sessionStorage
   * @method removeRequestFromStorage
   * @param  {Object}                 request The request to be removed from the storage
   */
  removeRequestFromStorage = (request) => {
    this.$storage.timeOffRequests = this.timeOffService.removeRequestFromStorage(
      this.timeOffService.fixDates(this.$storage.timeOffRequests),
      request,
    );
    this.updateTimeOffRequests();
  };

  /**
   * Create a time off request when the user clicks on the 'create time off request' button.
   * Open up a modal for the user.
   *
   * @method createTimeOffRequestModal
   */
  createTimeOffRequestModal() {
    this.$modalService
      .showModal({
        controller: 'ModalController',
        controllerAs: '$ctrl',
        templateUrl: 'modal.template.html',
        preClose: (modal) => {
          modal.element.modal('hide');
        },
        inputs: {
          request: {},
        },
      })
      .then((modal) => {
        modal.element.modal();
        modal.close.then((modalResp) => {
          // Once the user closes the modal, then add the request to the storage, after validating
          // it for a valid time-off request
          if (this.timeOffService.validateTimeOffRequest(modalResp)) {
            this.addRequestToStorage(modalResp);
          }
        });
      });
  }

  /**
   * Edit a time off request when the user clicks on the 'pencil' icon next to the request.
   * Open up a modal for the user.
   *
   * @method editRequest
   * @param {Object}      request The request to be edited
   */
  editRequest = (request) => {
    this.$modalService
      .showModal({
        controller: 'ModalController',
        controllerAs: '$ctrl',
        templateUrl: 'modal.template.html',
        preClose: (modal) => {
          modal.element.modal('hide');
        },
        inputs: {
          request,
        },
      })
      .then((modal) => {
        modal.element.modal();
        modal.close.then((modalResp) => {
          // Once the user closes the modal, then add the request to the storage, after validating
          // it for a valid time-off request
          if (this.timeOffService.validateTimeOffRequest(modalResp)) {
            this.updateRequestInStorage(modalResp);
          }
        });
      });
  };

  /**
   * Update a time off request in the storage
   * @method updateRequestInStorage
   * @param  {Object}               request The request to be updateStatusBadges
   */
  updateRequestInStorage = (request) => {
    this.$storage.timeOffRequests = this.timeOffService.updateRequestInStorage(
      this.timeOffService.fixDates(this.$storage.timeOffRequests),
      request,
    );
    this.updateTimeOffRequests();
  };

  /**
   * Delete a time off request when the user clicks on the 'X' button next to each of the requests.
   * @method removeRequestModal
   * @param  {Object}           request The request to be deleted
   */
  removeRequestModal = (request) => {
    this.$modalService
      .showModal({
        controller: 'ConfirmationModalController',
        controllerAs: '$ctrl',
        templateUrl: 'confirmation-modal.template.html',
        preClose: (modal) => {
          modal.element.modal('hide');
        },
        inputs: {
          request,
        },
      })
      .then((modal) => {
        modal.element.modal();
        modal.close.then((modalResp) => {
          if (modalResp) {
            this.removeRequestFromStorage(request);
          }
        });
      });
  };
}
