import { Meteor } from 'meteor/meteor';
import Pengaduan from '../collections/Pengaduan.js';

Meteor.publish('pengaduan', function () {
  return Pengaduan.find();
});
