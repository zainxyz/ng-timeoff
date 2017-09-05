import isEmpty from 'lodash/isEmpty';

export default class ngTimeOffController {
  constructor($sessionStorage, dataService) {
    'ngInject';

    this.$storage = $sessionStorage;
    this.dataService = dataService;
  }

  $onInit() {
    if (this.$storage.$supported() && isEmpty(this.$storage.timeOffRequests)) {
      this.$storage.timeOffRequests = this.dataService.getInitialTimeOffRequests();
    }
  }
}
