import { Meteor } from "meteor/meteor";
import Mahasiswa from "../collections/Mahasiswa.js";
import { Accounts } from "meteor/accounts-base";

Meteor.methods({
  tambahMahasiswa(nrp, nama, alamat, nomer_telp, email, password) {
    const data = Mahasiswa.insert({
      nrp,
      nama,
      email,
      alamat,
      nomer_telp,
      createdAt: new Date(),
    });

    return Accounts.createUser({
      email: email,
      username: nama,
      password: password,
      profile: {
        id_mahasiswa: data,
        name: nama,
        role: "mahasiswa",
      },
    });
  },

  editMahasiswa(id, nrp, nama, alamat, nomer_telp) {
    return Mahasiswa.update(id, {
      $set: { nrp, nama, alamat, nomer_telp, updatedAt: new Date() },
    });
  },
  hapusMahasiswa(id) {
    Mahasiswa.remove(id);

    return Meteor.users.remove({'profile.id_mahasiswa': id});
  },
});
