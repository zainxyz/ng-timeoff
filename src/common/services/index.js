import ContentService from './content';
import NavigationService from './navigation';

export default angular
  .module('app.common.services', [])
  .factory('contentService', ContentService)
  .factory('navigationService', NavigationService);
