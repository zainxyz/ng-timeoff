import format from 'date-fns/format';
import differenceInDays from 'date-fns/difference_in_days';

export default function DateService() {
  return {
    toDateString(date, type) {
      switch (type) {
        case 'day':
          return format(date, 'DD');
        case 'month':
          return format(date, 'MMM');
        case 'weekday':
          return format(date, 'ddd');
        default:
          return format(date, 'MMM D, YYYY');
      }
    },
    getNumberOfDays(start, end) {
      return differenceInDays(end, start);
    },
  };
}
