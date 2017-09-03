import controller from './controller';

export default {
  bindings: {
    content: '<',
  },
  controller,
  name: 'about-module ',
  template: `
    <div class="about-module container py-3">
      <h1>{{ $ctrl.content.title }}</h1>
      <div class="content">
        {{ $ctrl.content.body }}
      </div>
    </div>
  `,
};
