import random from 'lodash/random';

export default function TimeOffService(TIME_OFF) {
  'ngInject';

  const REASON_MAP = { ...TIME_OFF.REASON_MAP };
  const STATUS_COLOR_MAP = { ...TIME_OFF.STATUS_COLOR_MAP };
  const STATUS_MAP = { ...TIME_OFF.STATUS_MAP };
  const STATUS_LIST = [...TIME_OFF.STATUS_LIST];

  return {
    /**
     * Convert the reason to a readable string
     * @method toReasonString
     * @param  {string}       reason The reason to be converted
     * @return {string}
     */
    toReasonString(reason) {
      return reason ? REASON_MAP[reason.toUpperCase()] : '';
    },
    /**
     * Transform the current status into its corresponding status color
     * @method getStatusColor
     * @param  {string}       status The status to be transformed
     * @return {string}
     */
    getStatusColor(status) {
      return status ? STATUS_COLOR_MAP[status.toUpperCase()] : '';
    },
    /**
     * Extract all of the statuses from the passed in requests and tally them up
     * @method getAllStatuses
     * @param  {Array}       requests The current time off requests
     * @return {Array}
     */
    getAllStatuses(requests) {
      const statusCounts = {
        pending:
          requests.reduce((accum, val) => {
            if (val.status === 'pending') accum += 1;
            return accum;
          }, 0) || 0,
        rejected:
          requests.reduce((accum, val) => {
            if (val.status === 'rejected') accum += 1;
            return accum;
          }, 0) || 0,
        approved:
          requests.reduce((accum, val) => {
            if (val.status === 'approved') accum += 1;
            return accum;
          }, 0) || 0,
      };

      return Object.keys(STATUS_MAP).map(status => ({
        name: STATUS_MAP[status],
        type: this.getStatusColor(status),
        count: statusCounts[status.toLowerCase()],
      }));
    },
    /**
     * Are we feeling lucky? Let's generate a random status
     * @method getRandomStatus
     * @return {string}        The randomized status
     */
    getRandomStatus() {
      return STATUS_LIST[random(0, STATUS_LIST.length - 1)].toLowerCase();
    },
    /**
     * Validate a given time-off request to see if it has a reason / start + end date
     * @method validateTimeOffRequest
     * @param  {Object}               req The request to validateForm
     * @return {boolean}
     */
    validateTimeOffRequest(req) {
      return req && req.reason && req.startDate && req.endDate;
    },
  };
}
