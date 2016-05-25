import Ember from 'ember';

export default Ember.Route.extend({
  model({ slug }) {
    return slug;
  },

  redirect(model) {
    if (!model) {
      this.transitionTo('index', 'story');
    }
  }
});
