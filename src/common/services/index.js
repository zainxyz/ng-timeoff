import moment from 'moment';

import ContentService from './content';
import NavigationService from './navigation';
import DateService from './date';
import TimeOffService from './timeOff';

export default angular
  .module('app.common.services', [])
  .factory('contentService', ContentService)
  .factory('dateService', DateService)
  .factory('moment', () => moment)
  .factory('navigationService', NavigationService)
  .factory('timeOffService', TimeOffService);
