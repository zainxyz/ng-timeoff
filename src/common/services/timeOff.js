import random from 'lodash/random';
import findIndex from 'lodash/findIndex';

export default function TimeOffService(TIME_OFF) {
  'ngInject';

  const REASON_MAP = { ...TIME_OFF.REASON_MAP };
  const STATUS_COLOR_MAP = { ...TIME_OFF.STATUS_COLOR_MAP };
  const STATUS_LIST = [...TIME_OFF.STATUS_LIST];
  const STATUS_MAP = { ...TIME_OFF.STATUS_MAP };

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
     * A simple method to count a given key inside a list of objects
     * @method countArrayObjValue
     * @param  {Array}        arr The list to iterate over
     * @param  {string}       key The key to look for
     * @param  {string}       eq  The value to check
     * @return {Array}
     */
    countArrayObjValue(arr, key, eq) {
      return (
        arr.reduce((accum, val) => {
          if (val[key] === eq) accum += 1;
          return accum;
        }, 0) || 0
      );
    },
    /**
     * Extract all of the statuses from the passed in requests and tally them up
     * @method getStatusList
     * @param  {Array}       requests The current time off requests
     * @return {Array}
     */
    getStatusList(requests) {
      const statusCounts = {
        pending: this.countArrayObjValue(requests, 'status', 'pending'),
        rejected: this.countArrayObjValue(requests, 'status', 'rejected'),
        approved: this.countArrayObjValue(requests, 'status', 'approved'),
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
    /**
     * Fix the dates that are being saved and read from the local / session storage
     * @method fixDates
     * @param  {Object|Array} request The list of requests or single request
     * @return {Array}                 The request(s) with fixed date objects
     */
    fixDates(request) {
      if (angular.isArray(request)) {
        return request.map(item => ({
          ...item,
          submittedDate: new Date(item.submittedDate),
          startDate: new Date(item.startDate),
          endDate: new Date(item.endDate),
        }));
      }
      return {
        ...request,
        submittedDate: new Date(request.submittedDate),
        startDate: new Date(request.startDate),
        endDate: new Date(request.endDate),
      };
    },
    /**
     * Add a request to the current list of given timeOffRequests
     * @method addRequestToStorage
     * @param  {Object}            timeOffRequests The list of all the current requests
     * @param  {Object}            request         The request to be added to the storage
     * @return {Array}
     */
    addRequestToStorage(timeOffRequests, request) {
      const status = request.randomizeStatus ? this.getRandomStatus() : 'pending';

      return [
        ...timeOffRequests,
        {
          ...request,
          status,
          submittedDate: new Date(),
        },
      ];
    },
    /**
     * Remove a request from the list of given timeOffRequests
     * @method removeRequestFromStorage
     * @param  {Array}                  timeOffRequests The list of all the current requests
     * @param  {Object}                 request         The request to be removed from the list
     * @return {Array}
     */
    removeRequestFromStorage(timeOffRequests, request) {
      const idx = findIndex(timeOffRequests, {
        notes: request.notes,
        submittedDate: request.submittedDate,
      });

      // We ran into some error and the given request is not within the list of timeOffRequests.
      // Thus we return back the list as it is.
      if (idx === -1) {
        return [...timeOffRequests];
      }

      return [...timeOffRequests.slice(0, idx), ...timeOffRequests.slice(idx + 1)];
    },
    /**
     * Update a request in the list of given timeOffRequests
     * @method updateRequestInStorage
     * @param  {Array}                timeOffRequests The list of all the current requests
     * @param  {Object}               request         The request to be updated in the list
     * @return {Array}
     */
    updateRequestInStorage(timeOffRequests, request) {
      const status = request.randomizeStatus ? this.getRandomStatus() : request.status;

      const idx = findIndex(timeOffRequests, {
        submittedDate: request.submittedDate,
      });

      // We ran into some error and the given request is not within the list of timeOffRequests
      // Thus we return back the list as it is.
      if (idx === -1) {
        return [...timeOffRequests];
      }

      return [
        ...timeOffRequests.slice(0, idx),
        { ...request, status },
        ...timeOffRequests.slice(idx + 1),
      ];
    },
  };
}
