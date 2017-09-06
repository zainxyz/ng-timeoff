import addDays from 'date-fns/add_days';
import isEmpty from 'lodash/isEmpty';

export default class TimeOffModalController {
  constructor($element, timeOffService, request, close, $scope, TIME_OFF) {
    'ngInject';

    this.$element = $element;
    this.close = close;

    const REASON_LIST = [...TIME_OFF.REASON_LIST];

    // Set the current timeOffRequest if there is a request passed in via the 'edit' functionality.
    $scope.timeOffRequest = !isEmpty(request) ? { ...request } : {};

    // Bind functions to the scope
    $scope.cancelModal = res => this.cancelModal(res);
    $scope.saveModal = res => this.saveModal(res);

    // Bind the reasons to the scope
    $scope.reasons = REASON_LIST;

    // Other scope bindings for the date popup (angular ui bootstrap)
    $scope.dateFormat = 'dd-MMMM-yyyy';
    $scope.altInputFormats = ['M!/d!/yyyy'];
    $scope.maxDate = new Date(2049, 12, 31);
    $scope.minDate = new Date();

    // Start Date options
    $scope.startDateOptions = {
      dateDisabled: this.dateDisabled,
      formatYear: 'yyyy',
      maxDate: $scope.maxDate,
      minDate: $scope.minDate,
      startingDay: 1,
    };

    // End Date options
    $scope.endDateOptions = {
      dateDisabled: this.dateDisabled,
      formatYear: 'yyyy',
      maxDate: $scope.maxDate,
      minDate: $scope.minDate,
      startingDay: 1,
    };

    // Open the start date popup
    $scope.startDatePopup = {
      opened: false,
    };
    $scope.openStartDatePopup = () => {
      $scope.startDatePopup.opened = true;
    };

    // Open the end date popup
    $scope.endDatePopup = {
      opened: false,
    };
    $scope.openEndDatePopup = () => {
      // Grab the current start date is one is present
      const minDate = $scope.timeOffRequest.startDate
        ? $scope.timeOffRequest.startDate
        : new Date();
      // add a minimum date to the end date popup by taking the chosen start date and adding
      // 1 additional day to it.
      $scope.endDateOptions.minDate = addDays(minDate, 1);
      $scope.endDatePopup.opened = true;
    };

    // Validate the form while the user is filling it out to enable the submit button
    $scope.validateForm = req => !timeOffService.validateTimeOffRequest(req);
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
   * @param  {Object}  request The validated form data
   */
  saveModal = (request) => {
    this.close({ canceled: false, ...request }, 500);
  };

  /**
   * Cancel the modal
   * @method cancelModal
   * @param  {Object}    request The current form data .... worthless
   */
  cancelModal = (request) => {
    this.$element.modal('hide');
    this.close({ canceled: true, ...request }, 500);
  };
}
