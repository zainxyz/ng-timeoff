export default class HomeCtrl {
  constructor($sessionStorage, timeOffService, $scope) {
    'ngInject';

    this.timeOffService = timeOffService;
    this.$storage = $sessionStorage;
    this.$scope = $scope;
  }

  $onInit() {
    this.updateRequests();
    this.statusBadges = this.timeOffService.getAllStatuses(this.requests);
  }

  updateRequests = () => {
    this.requests = [...this.$storage.timeOffRequests];
  };

  addRequest() {
    console.log('adding new time off request');

    const singleRequest = {
      status: 'rejected',
      notes:
        'There is a drag race going on next weekend at the Thunderhill Race Track in Willow, CA.',
      reason: 'weekend',
      submittedDate: new Date('September 3, 2017 10:24:11'),
      startDate: new Date('September 9, 2017 08:00:00'),
      endDate: new Date('September 10, 2017 18:00:00'),
    };

    const timeOffRequests = [...this.$storage.timeOffRequests, singleRequest];
    console.log('updated timeOffRequests :', timeOffRequests);

    this.$storage.timeOffRequests = [...timeOffRequests];

    this.$scope.$watch('storage', () => this.updateRequests());
  }
}
