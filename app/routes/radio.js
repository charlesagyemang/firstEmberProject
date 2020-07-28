import Route from '@ember/routing/route';

export default class RadioRoute extends Route {
  model() {
   return this.store.findAll('radio')
 }
}
