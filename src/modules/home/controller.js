export default class HomeCtrl {
  constructor($sessionStorage, timeOffService, $scope) {
    'ngInject';

    this.timeOffService = timeOffService;
    this.$storage = $sessionStorage;
    this.$scope = $scope;
  }

  $onInit() {
    this.updateTimeOffRequests();
  }

  updateTimeOffRequests = () => {
    this.requests = [...this.$storage.timeOffRequests];
    this.updateStatusBadges();
  };

  updateStatusBadges = () => {
    this.statusBadges = this.timeOffService.getAllStatuses(this.requests);
  };

  addRequest() {
    const singleRequest = {
      status: 'rejected',
      notes:
        'There is a drag race going on next weekend at the Thunderhill Race Track in Willow, CA.',
      reason: 'weekend',
      submittedDate: new Date('September 3, 2017 10:24:11'),
      startDate: new Date('September 9, 2017 08:00:00'),
      endDate: new Date('September 10, 2017 18:00:00'),
    };

    this.$storage.timeOffRequests = [...this.$storage.timeOffRequests, singleRequest];

    this.$scope.$watch(() => this.$storage, () => this.updateTimeOffRequests());
  }
}
