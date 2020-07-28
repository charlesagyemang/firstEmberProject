import Route from '@ember/routing/route';

export default class RadioRoute extends Route {

  async model() {

    try {

      const resp = await this.store.findAll('radio');
      return resp

    } catch (e) {

      await this.controllerFor('radio').set('error', e);
    }

 }

}
