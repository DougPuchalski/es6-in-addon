import Ember from 'ember';
import layout from '../templates/components/x-delta';

export default Ember.Component.extend({
  layout: layout,
  double: (v => v * 2)  
});
