import controller from './controller';

export default {
  bindings: {
    badges: '< ',
  },
  controller,
  name: 'status-badges',
  template: `
    <div class="status-badges py-3">
      <button class="btn btn-light text-{{ badge.type }} mr-3" data-ng-repeat="badge in $ctrl.badges">
        {{ badge.name }} <span class="badge badge-light">{{ badge.count }}</span>
      </button>
    </div>
  `,
};
