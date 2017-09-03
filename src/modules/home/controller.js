export default class HomeCtrl {
  $onInit() {
    this.badges = [
      {
        name: 'Pending',
        type: 'warning',
        count: 3,
      },
      {
        name: 'Approved',
        type: 'success',
        count: 0,
      },
      {
        name: 'Rejected',
        type: 'danger',
        count: 2,
      },
    ];
  }
}
