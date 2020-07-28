import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RadioController extends Controller {

  @action
  reload() {
    const but = document.getElementById('kulibali');
    but.innerText = "Reloading..."
    location.reload();
  }

}
