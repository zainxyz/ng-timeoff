export default class TimeOffRequestsCtrl {
  constructor(dateService, timeOffService) {
    'ngInject';

    this.dateService = dateService;
    this.timeOffService = timeOffService;
  }

  $onInit() {
    this.updateRequests(this.requests);
  }

  /**
   * Whenever the passed in 'requests' change, we need to update the requests
   * that are being shown to the user.
   *
   * @method $onChanges
   * @param  {Object}   changesObj The current component's change objec
   */
  $onChanges(changesObj) {
    if (changesObj.requests) {
      this.updateRequests(this.requests);
    }
  }

  /**
   * We enhance the regular requests by adding in additional normalized data to be displayed
   * to the user.
   *
   * @method enhanceRequests
   * @param  {Array}        requests The list of requests
   * @return {Array}                 The normlaized list of requests
   */
  enhanceRequests = requests =>
    requests.map(item => ({
      ...item,
      date: {
        daysCount: this.dateService.getNumberOfDays(item.startDate, item.endDate),
        startDay: this.dateService.toDateString(item.startDate, 'day'),
        startMonth: this.dateService.toDateString(item.startDate, 'month'),
        startWeekday: this.dateService.toDateString(item.startDate, 'weekday'),
        submitted: this.dateService.toDateString(item.submittedDate),
      },
      reasonString: this.timeOffService.toReasonString(item.reason),
      statusColor: this.timeOffService.getStatusColor(item.status),
    }));

  /**
   * Update the timeOffRequests that are being used in this component by normalizing them.
   * @method updateRequests
   * @param  {Array}       requests The list of requests
   */
  updateRequests(requests) {
    this.timeOffRequests = this.enhanceRequests(requests);
  }
}
