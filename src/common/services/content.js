export default function ContentService() {
  'ngInject';

  return {
    getContent(routeName) {
      switch (routeName) {
        case 'home':
          return {
            title: 'Home Route',
            body: `
              Phasellus efficitur congue eros ut malesuada. Ut vulputate mattis erat ac lobortis.
              Sed ultrices, eros a auctor tristique, urna augue pretium massa, sit amet ornare odio ante
              sed turpis. In feugiat libero non nisl suscipit volutpat. Praesent interdum purus ligula,
              ac faucibus erat pretium non. Nam arcu turpis, fermentum vel lacinia non, aliquam eu augue.
              Vestibulum purus nunc, feugiat a tortor non, ultricies interdum eros.
              Aliquam vitae sagittis massa. Pellentesque in justo eget quam pulvinar vehicula. Praesent
              placerat diam diam, non rhoncus urna bibendum ac. Donec egestas accumsan magna et vehicula.
              Pellentesque sollicitudin turpis aliquet, dapibus velit eget, facilisis lacus.
            `,
          };
        case 'about':
          return {
            title: 'About Route',
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
