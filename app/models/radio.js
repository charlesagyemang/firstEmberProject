import Model, { attr }  from '@ember-data/model';

export default class RadioModel extends Model {
  @attr("string") name;
  @attr("string") streamingLink;
  @attr() other;
}
