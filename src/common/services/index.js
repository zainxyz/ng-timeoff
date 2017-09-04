import ContentService from './content';
import DataService from './data';
import DateService from './date';
import NavigationService from './navigation';
import TimeOffService from './timeOff';

export default angular
  .module('app.common.services', [])
  .factory('contentService', ContentService)
  .factory('dataService', DataService)
  .factory('dateService', DateService)
  .factory('navigationService', NavigationService)
  .factory('timeOffService', TimeOffService);
