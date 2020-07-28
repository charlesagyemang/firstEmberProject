import ApplicationAdapter from './application';
import { underscore } from '@ember/string';


export default class RadioAdapter extends ApplicationAdapter {
  // override path
  pathForType = function(type) {
     return underscore(type) + "s" + "/v/all";
  }
}
