import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['--loaded'],

  init() {
    this._super(...arguments);
    Ember.run.later(this, () => this.set('--loaded', true), 300);
  }
});
