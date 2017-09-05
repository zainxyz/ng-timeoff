import isEmpty from 'lodash/isEmpty';

export default class ngTimeOffController {
  constructor($sessionStorage, dataService) {
    'ngInject';

    this.$storage = $sessionStorage;
    this.dataService = dataService;
  }

  $onInit() {
    // If the $storage is supported and currently there aren't any time off requests in the
    // $storage then let's populate them with the initial time off requests.
    if (this.$storage.$supported() && isEmpty(this.$storage.timeOffRequests)) {
      this.$storage.timeOffRequests = this.dataService.getInitialTimeOffRequests();
    }
  }
}
