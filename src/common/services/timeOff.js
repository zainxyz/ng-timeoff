import random from 'lodash/random';

export default function TimeOffService(TIME_OFF) {
  'ngInject';

  const REASON_MAP = { ...TIME_OFF.REASON_MAP };
  const STATUS_COLOR_MAP = { ...TIME_OFF.STATUS_COLOR_MAP };
  const STATUS_MAP = { ...TIME_OFF.STATUS_MAP };
  const STATUS_LIST = [...TIME_OFF.STATUS_LIST];

  return {
    toReasonString(reason) {
      return REASON_MAP[reason.toUpperCase()];
    },
    getStatusColor(status) {
      return STATUS_COLOR_MAP[status.toUpperCase()];
    },
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
    getRandomStatus() {
      return STATUS_LIST[random(0, STATUS_LIST.length - 1)].toLowerCase();
    },
  };
}
