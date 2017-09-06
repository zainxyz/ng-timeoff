export default function ContentService() {
  'ngInject';

  return {
    /**
     * Get some initial content for the different views
     * @method getContent
     * @param  {string}   routeName The name of the current routeName
     * @return {Object}
     */
    getContent(routeName) {
      switch (routeName) {
        case 'home':
          return {
            title: 'Time-off Requests',
            subtitles: [
              'View your time-off requests and see if they have been approved or rejected.',
              'Please check the \'About\' page for more information on how to use this time-off application',
            ],
          };
        case 'about':
          return {
            title: 'About ng-Time-Off',
            subtitles: [
              'Submit a time-off request to your supervisor!',
              'In order to submit a new time-off request, please click on the \'Create Time Off\' button.',
              'In order to edit a time-off request, please click on the \'pencil\' button towards the right of the request.',
              'In order to delete a time-off request, please click on the \'X\' button towards the right of the request.',
              'If no time-off requests are present, then 4 are automatically added upon application bootstrap cycle.',
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
