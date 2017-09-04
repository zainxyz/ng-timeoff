const REASON_MAP = {
  TRAFFIC: 'Traffic Court',
  HTTP: 'Coding Challenge',
  MIC: 'Stand-up Comedy',
  FLAG: 'Drag Racing',
  GESTURE: 'Doodling Day',
  WEEKEND: 'It\'s the Weekend',
};

const STATUS_MAP = {
  PENDING: 'Pending',
  APPROVED: 'Approved',
  REJECTED: 'Rejected',
};

const STATUS_COLOR_MAP = {
  PENDING: 'warning',
  APPROVED: 'success',
  REJECTED: 'danger',
};

export { REASON_MAP, STATUS_COLOR_MAP, STATUS_MAP };
