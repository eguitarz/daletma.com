import Ember from 'ember';
import DelayableMixin from 'daletma-dot-com/mixins/delayable';
import { module, test } from 'qunit';

module('Unit | Mixin | delayable');

// Replace this with your real tests.
test('it works', function(assert) {
  let DelayableObject = Ember.Object.extend(DelayableMixin);
  let subject = DelayableObject.create();
  assert.ok(subject);
});
