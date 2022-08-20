import { Meteor } from 'meteor/meteor';
import Pertanyaan from '../collections/Pertanyaan.js';

Meteor.publish('pertanyaan', function () {
  return Pertanyaan.find();
});
