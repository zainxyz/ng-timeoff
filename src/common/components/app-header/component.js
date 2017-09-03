import controller from './controller';

export default {
  bindings: {
    brand: '@',
  },
  controller,
  name: 'app-header',
  template: `
    <!-- main application header -->
    <div class="app-header">
      <!-- application navigation header -->
      <app-nav brand="{{ $ctrl.brand }}" slogan="{{ $ctrl.slogan }}" navitems="$ctrl.navItems"></app-nav>
    </div>
  `,
};
