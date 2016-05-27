import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    didTransition() {
      Ember.run.later(() => this.controllerFor('application').set('transitioned', true), 100);
    },

    willTransition(transition) {
      if (this.controllerFor('application').get('transitioned')) {
        transition.abort();
        this.controllerFor('application').set('transitioned', false);
      }
      Ember.run.later(() => transition.retry(), 300);
    }
  }
});
