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
            ],
          };
        case 'about':
          return {
            title: 'About ng-Time-Off',
            body: `
              Proin dignissim nec turpis in malesuada. Aliquam scelerisque hendrerit odio nec maximus.
              Integer luctus, erat non aliquet tristique, nunc neque efficitur felis, in efficitur
              eros odio sed magna. Mauris venenatis, sapien et commodo luctus, ante nulla malesuada
              ex, in pellentesque odio tellus semper purus. Morbi in suscipit dui. Nunc ac nibh ac
              massa pretium eleifend. Mauris a sodales arcu. Pellentesque consequat, nibh id fringilla
              molestie, tortor sem laoreet velit, et tempus nisl tellus nec erat.
              Mauris sit amet tempus libero.
            `,
          };
        default:
          return {
            title: 'Content not found.',
          };
      }
    },
  };
}
