export default function DataService(timeOffService) {
  'ngInject';

  return {
    /**
     * Generate some initial time off requests for when there aren't any present in the $storage.
     * @method getInitialTimeOffRequests
     * @return {Array}                  A list of initial time off requests
     */
    getInitialTimeOffRequests() {
      return [
        {
          status: timeOffService.getRandomStatus(),
          notes: 'I have to go to the traffic court...duh!',
          reason: 'traffic',
          submittedDate: new Date('July 31, 2017 8:13:22'),
          startDate: new Date('August 18, 2017 08:00:00'),
          endDate: new Date('September 30, 2017 00:00:00'),
        },
        {
          status: timeOffService.getRandomStatus(),
          notes:
            'The weekend is coming up and I have plans to go to the Cochella before it ends. Please approve immediately!!! Thank you :)',
          reason: 'weekend',
          submittedDate: new Date('April 1, 2017 04:59:00'),
          startDate: new Date('April 20, 2017 08:00:00'),
          endDate: new Date('April 22, 2017 23:00:00'),
        },
        {
          status: timeOffService.getRandomStatus(),
          notes: 'There is a Hackathon going on over at the SurveyMonkey headquarters in SF',
          reason: 'http',
          submittedDate: new Date('September 1, 2017 11:11:36'),
          startDate: new Date('September 13, 2017 08:00:00'),
          endDate: new Date('September 15, 2017 16:00:00'),
        },
        {
          status: timeOffService.getRandomStatus(),
          notes: 'My wife is out of country during these days, so I got to take care of the kids.',
          reason: 'gesture',
          submittedDate: new Date('June 6, 2017 11:11:36'),
          startDate: new Date('June 26, 2017 08:00:00'),
          endDate: new Date('June 30, 2017 11:00:00'),
        },
      ];
    },
  };
}
