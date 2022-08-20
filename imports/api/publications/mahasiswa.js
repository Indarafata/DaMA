import { Meteor } from 'meteor/meteor';
import Mahasiswa from '../collections/Mahasiswa.js';

Meteor.publish('mahasiswa', function () {
  return Mahasiswa.find();
});
