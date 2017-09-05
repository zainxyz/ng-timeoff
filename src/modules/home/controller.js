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

  updateTimeOffRequests = () => {
    this.requests = [...this.$storage.timeOffRequests];
    this.updateStatusBadges();
  };

  updateStatusBadges = () => {
    this.statusBadges = [...this.timeOffService.getAllStatuses(this.requests)];
  };

  addRequestToStorage = (req) => {
    this.$storage.timeOffRequests = [
      ...this.$storage.timeOffRequests,
      { ...req, status: 'pending', submittedDate: new Date() },
    ];
    this.updateTimeOffRequests();
  };

  removeRequestFromStorage = (req) => {
    this.$storage.timeOffRequests = [
      ...this.$storage.timeOffRequests.filter(item => item.submittedDate !== req.submittedDate),
    ];
    this.updateTimeOffRequests();
  };

  addRequest() {
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
        modal.close.then((res) => {
          this.addRequestToStorage(res);
        });
      });
  }

  deleteRequest = (req) => {
    this.removeRequestFromStorage(req);
  };
}
