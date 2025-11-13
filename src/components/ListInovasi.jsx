import React, { useEffect, useState } from "react";
// import { listInovasi, deleteInovasi } from "../services/inovasiServices";
import { listInovasi, deleteInovasi } from "../services/inovasiServices";
import { Link, useNavigate } from "react-router-dom";

function ListInovasi() {
   const [inovasiData, setInovasiData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const navigate = useNavigate();

   // Fungsi untuk ambil data produk
   const fetchInovasi = async () => {
      try {
         setLoading(true);
         const response = await listInovasi();
         setInovasiData(response.data);
      } catch (error) {
         console.error("Error fetching inovasi data:", error);
         setError("Gagal mengambil data inovasi.");
      } finally {
         setLoading(false);
      }
   };

   // Panggil fetchProduk saat komponen pertama kali di-load
   useEffect(() => {
      fetchInovasi();
   }, []);

   // Hapus produk dan auto-refresh list
   const handleDelete = async (id) => {
      if (window.confirm("Yakin ingin menghapus inovasi ini?")) {
         try {
            console.log("Menghapus inovasi dengan ID:", id);
            const response = await deleteInovasi(id);
            console.log("Respon dari server:", response.data);

            if (response.data && response.data.message) {
               const pesan = response.data.message.toLowerCase();

               if (pesan.includes("berhasil")) {
                  alert("Inovasi berhasil dihapus!");
               } else if (pesan.includes("tidak ditemukan")) {
                  alert("Inovasi tidak ditemukan di server!");
               } else {
                  alert("Respon dari server: " + response.data.message);
               }
            } else {
               alert("Tidak ada respon dari server.");
            }

            // Refresh data setelah delete
            fetchInovasi();
         } catch (error) {
            console.error("Error deleting inovasi:", error);
            alert("Gagal menghapus inovasi. Periksa koneksi atau server API.");
         }
      }
   };

   if (loading) {
      return (
         <div className="text-center mt-5">
            <h4>Loading...</h4>
         </div>
      );
   }

   return (
      <div className="container-fluid mt-4 px-5">
         <h2 className="mb-4 text-center">List Inovasi</h2>
         <div className="d-flex justify-content-start mb-3">
            <Link to="/tambah-inovasi" className="btn btn-primary">
               Tambah Inovasi
            </Link>
         </div>

         {error && <div className="alert alert-danger">{error}</div>}

         <table className="table table-striped table-bordered align-middle text-center">
            <thead className="table-dark">
               <tr>
                  <th>ID</th>
                  <th>Judul Inovasi</th>
                  <th>Kategori</th>
                  <th>Pengusul</th>
                  <th>Unit</th>
                  <th>Potensi Savings</th>
                  <th>Aksi</th>
               </tr>
            </thead>
            <tbody>
               {inovasiData.length > 0 ? (
                  inovasiData.map((item) => (
                     <tr key={item.id}>
                        <td>{item.ino_id}</td>
                        <td className="text-start">{item.ino_judul}</td>
                        <td className="text-start">{item.ino_kategori}</td>
                        <td className="text-start">{item.ino_pengusul}</td>
                        <td className="text-start">{item.ino_unit}</td>
                        <td>
                           {parseFloat(item.ino_potensi_savings).toLocaleString(
                              "id-ID"
                           )}
                        </td>
                        <td>
                           <button
                              className="btn btn-sm btn-warning me-2"
                              onClick={() =>
                                 navigate(`/update-inovasi/${item.ino_id}`)
                              }
                           >
                              Edit
                           </button>
                           <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(item.ino_id)}
                           >
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))
               ) : (
                  <tr>
                     <td colSpan="8">Tidak ada inovasi ditemukan.</td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
}

export default ListInovasi;
