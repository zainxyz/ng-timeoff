export default class ngTimeOffController {
  constructor($sessionStorage, dataService) {
    'ngInject';

    this.$storage = $sessionStorage;
    this.dataService = dataService;
  }

  $onInit() {
    if (this.$storage.$supported()) {
      this.$storage.timeOffRequests = this.dataService.getInitialTimeOffRequests();
    }
  }
}
