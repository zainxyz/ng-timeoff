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
  }

  /**
   * Update the current time off requests that are being displayed to the user
   * @method updateTimeOffRequests
   */
  updateTimeOffRequests = () => {
    this.requests = [...this.$storage.timeOffRequests];
    this.updateStatusBadges();
  };

  /**
   * Update all of the current status badges (pending:0, approved:3, rejected:1)
   * @method updateStatusBadges
   */
  updateStatusBadges = () => {
    this.statusBadges = [...this.timeOffService.getAllStatuses(this.requests)];
  };

  /**
   * Add a single time off request to the current $sessionStorage
   * @method addRequestToStorage
   * @param  {Object}            req The request to be added to the storage
   */
  addRequestToStorage = (req) => {
    const status = req.randomizeStatus ? this.timeOffService.getRandomStatus() : 'pending';

    this.$storage.timeOffRequests = [
      ...this.$storage.timeOffRequests,
      { ...req, status, submittedDate: new Date() },
    ];
    this.updateTimeOffRequests();
  };

  /**
   * Remove a single time off request from the current $sessionStorage
   * @method removeRequestFromStorage
   * @param  {Object}                 req The request to be removed from the storage
   */
  removeRequestFromStorage = (req) => {
    this.$storage.timeOffRequests = [
      ...this.$storage.timeOffRequests.filter(item => item.submittedDate !== req.submittedDate),
    ];
    this.updateTimeOffRequests();
  };

  /**
   * Create a time off request when the user clicks on the 'create time off request' button.
   * Open up a modal for the user.
   *
   * @method createTimeOffRequest
   */
  createTimeOffRequest() {
    this.$modalService
      .showModal({
        controller: 'ModalController',
        controllerAs: '$ctrl',
        templateUrl: 'modal.template.html',
        preClose: (modal) => {
          modal.element.modal('hide');
        },
      })
      .then((modal) => {
        modal.element.modal();
        modal.close.then((request) => {
          // Once the user closes the modal, then add the request to the storage, after validating
          // it for a valid time-off request
          if (this.timeOffService.validateTimeOffRequest(request)) {
            this.addRequestToStorage(request);
          }
        });
      });
  }

  /**
   * Delete a time off request when the user clicks on the 'X' button next to each of the requests.
   * @method deleteRequest
   * @param  {Object}      req The request to be deleted
   */
  deleteRequest = (req) => {
    this.removeRequestFromStorage(req);
  };
}
