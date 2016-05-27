import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNameBindings: ['--loaded', '--transitioned'],
  '--transitioned': computed.alias('transitioned'),

  init() {
    this._super(...arguments);
    Ember.run.later(this, () => this.set('--loaded', true), 300);
  }
});
