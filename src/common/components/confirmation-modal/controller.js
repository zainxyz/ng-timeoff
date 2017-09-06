export default class ConfirmationModalController {
  constructor($element, request, close, $scope) {
    'ngInject';

    this.$element = $element;
    this.close = close;

    // Set the current timeOffRequest if there is a request passed in via the 'edit' functionality.
    $scope.request = { ...request };

    // Bind functions to the scope
    $scope.cancelModal = res => this.cancelModal(res);
    $scope.removeRequest = res => this.removeRequest(res);
  }

  /**
   * Save the modal data
   * @method removeRequest
   * @param  {boolean}  remove Remove the request!
   */
  removeRequest = (remove) => {
    this.close(remove, 500);
  };

  /**
   * Cancel the modal
   * @method cancelModal
   * @param  {boolean}    cancel Cancel the request
   */
  cancelModal = (cancel) => {
    this.$element.modal('hide');
    this.close(cancel, 500);
  };
}
