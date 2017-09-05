export default class TimeOffModalController {
  constructor($element, timeOffService, close, $scope, TIME_OFF) {
    'ngInject';

    this.$element = $element;
    this.close = close;

    const REASON_LIST = [...TIME_OFF.REASON_LIST];

    // Bind functions to the scope
    $scope.cancelModal = res => this.cancelModal(res);
    $scope.saveModal = res => this.saveModal(res);
    // Bind the reasons to the scope
    $scope.reasons = REASON_LIST;
    // Other scope bindings for the date popup (angular ui bootstrap)
    $scope.dateFormat = 'dd-MMMM-yyyy';
    $scope.altInputFormats = ['M!/d!/yyyy'];
    $scope.dateOptions = {
      dateDisabled: this.dateDisabled,
      formatYear: 'yy',
      maxDate: new Date(2049, 12, 31),
      minDate: new Date(),
      startingDay: 1,
    };
    $scope.startDatePopup = {
      opened: false,
    };
    $scope.openStartDatePopup = () => {
      $scope.startDatePopup.opened = true;
    };
    $scope.endDatePopup = {
      opened: false,
    };
    $scope.openEndDatePopup = () => {
      $scope.endDatePopup.opened = true;
    };
    // Validate the form while the user is filling it out to enable the submit button
    $scope.validateForm = request => !timeOffService.validateTimeOffRequest(request);
  }

  /**
   * The dates that have been dateDisabled
   * @method dateDisabled
   * @param  {Object}     data The date data
   * @return {boolean}
   */
  dateDisabled = (data) => {
    const date = data.date;
    const mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  };

  /**
   * Save the modal data
   * @method saveModal
   * @param  {Object}  res The validated form data
   */
  saveModal = (res) => {
    this.close({ canceled: false, ...res }, 500);
  };

  /**
   * Cancel the modal
   * @method cancelModal
   * @param  {Object}    res The current form data .... worthless
   */
  cancelModal = (res) => {
    this.$element.modal('hide');
    this.close({ canceled: true, ...res }, 500);
  };
}
