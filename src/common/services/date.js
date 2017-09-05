import format from 'date-fns/format';
import differenceInDays from 'date-fns/difference_in_days';

export default function DateService() {
  return {
    /**
     * Transform a given JS Date object to a human readable format
     * @method toDateString
     * @param  {Object}     date A JavaScript date object
     * @param  {string}     type A type to format that date object to
     * @return {string}
     */
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
