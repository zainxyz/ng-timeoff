import controller from './controller';

export default {
  bindings: {
    brand: '@',
  },
  controller,
  name: 'app-header',
  template: `
    <div class="app-header">
      <app-nav brand="{{ $ctrl.brand }}" tagline="{{ $ctrl.tagline }}" navitems="$ctrl.navItems"></app-nav>
    </div>
  `,
};
