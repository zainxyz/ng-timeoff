/**
 * A map of all of the available reasons (6 of them) and their readable string formats
 * @type {Object}
 */
const REASON_MAP = {
  TRAFFIC: 'Traffic Court',
  HTTP: 'Coding Challenge',
  MIC: 'Stand-up Comedy',
  FLAG: 'Drag Racing',
  GESTURE: 'Doodling Day',
  WEEKEND: 'It\'s the Weekend',
};

/**
 * A list of all of the reason's keys (traffic, http, etc.)
 * @type {Array}
 */
const REASON_LIST = Object.keys(REASON_MAP).map(key => ({
  title: REASON_MAP[key],
  type: key.toLowerCase(),
}));

/**
 * A map of all of the current status' in the app (3 of them) and their readable string formats.
 * @type {Object}
 */
const STATUS_MAP = {
  PENDING: 'Pending',
  APPROVED: 'Approved',
  REJECTED: 'Rejected',
};

/**
 * A list of all of the status' keys (pending, approved, and Rejected)
 * @type {Array}
 */
const STATUS_LIST = Object.keys(STATUS_MAP).map(key => STATUS_MAP[key]);

/**
 * A mapping of the current statuses and their designated color choice.
 * @type {Object}
 */
const STATUS_COLOR_MAP = {
  PENDING: 'warning',
  APPROVED: 'success',
  REJECTED: 'danger',
};

export { REASON_MAP, REASON_LIST, STATUS_COLOR_MAP, STATUS_MAP, STATUS_LIST };
