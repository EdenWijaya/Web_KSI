import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const getLaporan = async (callback) => {
  try {
    const res = await axios.get(`${serverUrl}laporan-lingkungan`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    callback(res.data);
  } catch (error) {
    console.log(`${error.response.data.message}`);
  }
};
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
  formData.append("status", "Aktif");

  try {
    const res = await axios.post(`${serverUrl}laporan-lingkungan`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    alert(`${err.response.data.message}`);
  }
};

export const updateStatus = async (id, status, setLaporanStatus) => {
  const isConfirmed = confirm(
    "Apakah anda yakin untuk merubah status laporan?"
  );

  if (!isConfirmed) {
    return;
  }

  const statusLaporan = status === "Aktif" ? "Selesai" : "Aktif";

  const statusReq = {
    status: statusLaporan,
  };

  try {
    const res = await axios.put(
      `${serverUrl}laporan-lingkungan/${id}`,
      statusReq,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status === 200) {
      alert("Status Laporan Berhasil Diubah");
      location.reload();
    }
  } catch (error) {
    console.log(`${error.response.data.message}`);
  }
};

export const showGambarLaporan = (path) => {
  if (!path) {
    console.log("Tidak Ada Gambar");
    return "";
  }

  const standardizedPath = path.replace(/\\/g, "/");
  const pathGambar = standardizedPath.split("/");

  const gambarUrl = `${serverUrl}laporan-lingkungan/gambar/laporan/${
    pathGambar[pathGambar.length - 1]
  }`;
  return gambarUrl;
};

export const getTotalLaporan = async (callback) => {
  try {
    const res = await axios.get(`${serverUrl}laporan-lingkungan/laporan/total`);
    callback(res.data);
  } catch (error) {
    console.log(`${error.response.data.message}`);
  }
};

export const getLaporanSelesai = async (callback) => {
  try {
    const res = await axios.get(
      `${serverUrl}laporan-lingkungan/laporan/total/selesai`
    );
    callback(res.data);
  } catch (error) {
    console.log(`${error.response.data.message}`);
  }
};
