export default class HomeCtrl {
  constructor(timeOffService) {
    'ngInject';

    this.timeOffService = timeOffService;
  }

  $onInit() {
    this.requests = [
      {
        status: 'rejected',
        notes: 'I have to go to the traffic court...duh!',
        reason: 'traffic',
        submittedDate: new Date('July 31, 2017 8:13:22'),
        startDate: new Date('August 18, 2017 08:00:00'),
        endDate: new Date('September 30, 2017 00:00:00'),
      },
      {
        status: 'pending',
        notes: 'The weekend is coming up and I have plans to go to the Cochella before it ends. Please approve immediately!!! Thank you :)',
        reason: 'weekend',
        submittedDate: new Date('April 1, 2017 04:59:00'),
        startDate: new Date('April 20, 2017 08:00:00'),
        endDate: new Date('April 22, 2017 23:00:00'),
      },
      {
        status: 'approved',
        notes: 'There is a Hackathon going on over at the SurveyMonkey headquarters in SF',
        reason: 'http',
        submittedDate: new Date('September 1, 2017 11:11:36'),
        startDate: new Date('September 13, 2017 08:00:00'),
        endDate: new Date('September 15, 2017 16:00:00'),
      },
    ];

    this.statusBadges = this.timeOffService.getAllStatuses(this.requests);
  }
}
