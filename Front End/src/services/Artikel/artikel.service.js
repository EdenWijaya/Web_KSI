import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const getArtikel = async (callback) => {
  try {
    const res = await axios.get(`${serverUrl}artikel-lingkungan`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    callback(res.data);
  } catch (error) {
    console.log(`${error.response.data.message}`);
  }
};

export const getArtikelById = async (id, setArtikelData) => {
  try {
    const res = await axios.get(`${serverUrl}artikel-lingkungan/${id}`);
    if (res.status === 200) {
      setArtikelData(res.data);
    }
  } catch (error) {
    alert(`${error.response.data.message}`);
  }
};

export const createArtikel = async (event) => {
  const date = new Date();
  const currentDate = date.toLocaleDateString("id-ID");
  event.preventDefault();

  const isConfirmed = confirm(
    "Apakah anda yakin dengan data artikel yang anda masukkan?"
  );

  if (!isConfirmed) {
    return;
  }

  const formData = new FormData();
  formData.append("tanggal_artikel", currentDate);
  formData.append("judul_artikel", event.target.judul_artikel.value);
  formData.append("author", event.target.author.value);
  formData.append("gambar_artikel", event.target.gambar_artikel.files[0]);
  formData.append("isi_artikel", event.target.isi_artikel.value);
  formData.append("sumber_artikel", event.target.sumber_artikel.value);

  try {
    const res = await axios.post(`${serverUrl}artikel-lingkungan`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.status === 201) {
      alert("Artikel Berhasil Ditambahkan");
      event.target.reset();
      window.location.href = "/artikel-table";
    }
  } catch (error) {
    alert(`${error.response.data.message}`);
  }
};

export const deleteArtikel = async (id) => {
  const isConfirmed = confirm("Apakah anda yakin ingin menghapus artikel?");

  if (!isConfirmed) {
    return;
  }

  try {
    const res = await axios.delete(`${serverUrl}artikel-lingkungan/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (res.status === 200) {
      alert("Artikel Berhasil Dihapus");
      location.reload();
    }
  } catch (error) {
    alert(`${error.response.data.message}`);
  }
};

export const updateArtikel = async (event, id) => {
  event.preventDefault();

  const isConfirmed = confirm(
    "Apakah anda yakin untuk melakukan pembaruan artikel?"
  );

  if (!isConfirmed) {
    return;
  }

  const formData = new FormData();
  formData.append("judul_artikel", event.target.judul_artikel.value);
  formData.append("author", event.target.author.value);
  formData.append("gambar_artikel", event.target.gambar_artikel.files[0]);
  formData.append("isi_artikel", event.target.isi_artikel.value);
  formData.append("sumber_artikel", event.target.sumber_artikel.value);

  try {
    const res = await axios.put(
      `${serverUrl}artikel-lingkungan/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (res.status === 200) {
      alert("Artikel Berhasil Diperbarui");
      event.target.reset();
      window.location.href = "/artikel-table";
    }
  } catch (error) {
    alert(`${error.response.data.message}`);
  }
};

export const showGambar = (path) => {
  if (!path) {
    console.log("Tidak Ada Gambar");
    return "";
  }

  const standardizedPath = path.replace(/\\/g, "/");
  const pathGambar = standardizedPath.split("/");

  const gambarUrl = `${serverUrl}artikel-lingkungan/gambar/artikel/${
    pathGambar[pathGambar.length - 1]
  }`;
  return gambarUrl;
};

export const getTotalArtikel = async (callback) => {
  try {
    const res = await axios.get(`${serverUrl}artikel-lingkungan/artikel/total`);
    callback(res.data);
  } catch (error) {
    console.log(`${error.response.data.message}`);
  }
};
