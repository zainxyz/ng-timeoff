export default class TimeOffRequestsCtrl {
  constructor(dateService, timeOffService) {
    'ngInject';

    this.dateService = dateService;
    this.timeOffService = timeOffService;
  }

  $onInit() {
    this.updateRequests(this.requests);
  }

  $onChanges(changesObj) {
    if (changesObj.requests) {
      this.updateRequests(this.requests);
    }
  }

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

  updateRequests(requests) {
    this.timeOffRequests = this.enhanceRequests(requests);
  }
}
