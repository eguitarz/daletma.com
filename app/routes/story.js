import Ember from 'ember';
import Delayable from '../mixins/delayable';

export default Ember.Route.extend(Delayable, {
  renderTemplate() {
    this._super(...arguments);
    this.render('story-widget', {outlet: 'widget'});
  }

});
