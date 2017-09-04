export default function DateService(moment) {
  'ngInject';

  return {
    toDateString(date, type) {
      switch (type) {
        case 'day':
          return moment(date).format('D');
        case 'month':
          return moment(date).format('MMM');
        case 'weekday':
          return moment(date).format('ddd');
        default:
          return moment(date).format('MMM D, YYYY');
      }
    },
    getNumberOfDays(start, end) {
      return moment(end).diff(moment(start), 'days');
    },
  };
}
