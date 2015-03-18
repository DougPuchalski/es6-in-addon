import Ember from 'ember';
import layout from '../templates/components/x-charlie';

export default Ember.Component.extend({
  layout: layout,
  
  double: (v => v * 2)
});
