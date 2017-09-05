export default class ModalController {
  constructor($element, close, $scope, TIME_OFF) {
    'ngInject';

    this.$element = $element;
    this.close = close;

    const REASON_LIST = [...TIME_OFF.REASON_LIST];

    $scope.cancelModal = res => this.cancelModal(res);
    $scope.saveModal = res => this.saveModal(res);
    $scope.reasons = REASON_LIST;

    $scope.dateFormats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.dateFormat = $scope.dateFormats[0];
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

    $scope.validateForm = form => !this.validateForm(form);
  }

  dateDisabled = (data) => {
    const date = data.date;
    const mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  };

  saveModal = (res) => {
    this.close({ canceled: false, ...res }, 500);
  };

  cancelModal = (res) => {
    this.$element.modal('hide');
    this.close({ canceled: true, ...res }, 500);
  };

  validateForm = form => form && form.reason && form.startDate && form.endDate;
}
