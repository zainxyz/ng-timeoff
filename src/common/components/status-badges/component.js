export default {
  bindings: {
    badges: '<',
  },
  name: 'status-badges',
  template: `
    <div class="status-badges py-3">
      <span data-ng-repeat="item in $ctrl.badges">
        <button class="btn btn-light text-{{ item.type }} mr-3">
          {{ item.name }} <span class="badge badge-light">{{ item.count }}</span>
        </button>
      </span>
    </div>
  `,
};
