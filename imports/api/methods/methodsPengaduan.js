import { Meteor } from "meteor/meteor";
import Pengaduan from "../collections/Pengaduan.js";

Meteor.methods({
  tambahPengaduan(isi_pengaduan, lokasi_pengaduan, image, mahasiswa_id) {
    Pengaduan.insert({
      isi_pengaduan,
      lokasi_pengaduan,
      image,
      status: false,
      mahasiswa_id,
      createdAt: new Date(),
    });
  },

  konfirmasiPengaduan(id, status) {
    return Pengaduan.update(id, {
      $set: { status: !status },
    });
  },

  hapusPengaduan(id) {
    return Pengaduan.remove(id);
  },
});
