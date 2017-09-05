export default function ContentService() {
  'ngInject';

  return {
    getContent(routeName) {
      switch (routeName) {
        case 'home':
          return {
            title: 'Time-off Requests',
            subtitles: [
              'View your time-off requests and see if they have been approved or rejected.',
              'In order to submit a new time-off request, please click on the \'Create Time Off\' button.',
              '4 requests are added upon each application load, and populated with random statuses',
              'PS: Right now there is no way of changing the request\'s status.',
            ],
          };
        case 'about':
          return {
            title: 'About ng-Time-Off',
            subtitles: [
              'Submit a time-off request to your supervisor!',
              'Click on the \'Create Time off\' button and start filling out the time-off request.',
              'You can choose from a couple of different reasons:',
              '- Traffic Court',
              '- Coding Challenge',
              '- Stand-up Comedy',
              '- Drag Racing',
              '- Doodling Day',
              '- It\'s the Weekend',
            ],
          };
        default:
          return {
            title: 'Content not found.',
          };
      }
    },
  };
}
