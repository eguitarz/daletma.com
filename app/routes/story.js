import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition() {
      Ember.run.later(() => this.controller.set('transitioned', true), 100);
    },

    willTransition(transition) {
      if (this.controller.get('transitioned')) {
        transition.abort();
        this.controller.set('transitioned', false);
      }
      Ember.run.later(() => transition.retry(), 800);
    }
  }
});
