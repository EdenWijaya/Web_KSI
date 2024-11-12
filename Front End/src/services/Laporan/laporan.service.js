import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const submitLaporan = async (event) => {
  const date = new Date();
  const currentDate = date.toLocaleDateString("id-ID");
  event.preventDefault();

  const isConfirmed = confirm(
    "Apakah anda yakin dengan data yang anda masukkan?"
  );

  if (!isConfirmed) {
    return;
  }

  const formData = new FormData();
  formData.append("tanggal_laporan", currentDate);
  formData.append("nama", event.target.nama_pelapor.value);
  formData.append("no_telepon", event.target.nomor_telepon.value);
  formData.append("lokasi_laporan", event.target.lokasi.value);
  formData.append("deskripsi_laporan", event.target.deskripsi.value);
  formData.append("gambar_laporan", event.target.gambar_laporan.files[0]);

  try {
    const res = await axios.post(`${serverUrl}laporan-lingkungan`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.status === 201) {
      alert("Laporan Berhasil Ditambahkan");
      event.target.reset();
    } else {
      alert("Laporan Gagal Ditambahkan");
    }
  } catch (err) {
    alert("Laporan Gagal Ditambahkan");
  }
};
