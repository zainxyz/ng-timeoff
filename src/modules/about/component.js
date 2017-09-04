import controller from './controller';

export default {
  bindings: {
    content: '<',
  },
  controller,
  name: 'about-module ',
  template: `
    <div class="about-module container py-3">
      <h1 class="display-4">{{ $ctrl.content.title }}</h1>
      <hr />
      <p class="lead">
        {{ $ctrl.content.body }}
      </p>
    </div>
  `,
};
