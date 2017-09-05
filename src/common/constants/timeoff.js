const REASON_MAP = {
  TRAFFIC: 'Traffic Court',
  HTTP: 'Coding Challenge',
  MIC: 'Stand-up Comedy',
  FLAG: 'Drag Racing',
  GESTURE: 'Doodling Day',
  WEEKEND: 'It\'s the Weekend',
};

const REASON_LIST = Object.keys(REASON_MAP).map(key => ({
  title: REASON_MAP[key],
  type: key.toLowerCase(),
}));

const STATUS_MAP = {
  PENDING: 'Pending',
  APPROVED: 'Approved',
  REJECTED: 'Rejected',
};

const STATUS_LIST = Object.keys(STATUS_MAP).map(key => STATUS_MAP[key]);

const STATUS_COLOR_MAP = {
  PENDING: 'warning',
  APPROVED: 'success',
  REJECTED: 'danger',
};

export { REASON_MAP, REASON_LIST, STATUS_COLOR_MAP, STATUS_MAP, STATUS_LIST };
