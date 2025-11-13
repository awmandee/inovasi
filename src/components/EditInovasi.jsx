import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// import { getInovasiById, updateInovasi } from "../../services/inovasiServices";
import { getInovasiById, updateInovasi } from "../services/inovasiServices";

function EditInovasi() {
   const { id } = useParams();
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      ino_id: id,
      ino_judul: "",
      ino_deskripsi: "",
      ino_kategori: "",
      ino_tanggalsubmit: "",
      ino_pengusul: "",
      ino_unit: "",
      ino_manfaat: "",
      ino_potensi_savings: "",
   });
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [successMessage, setSuccessMessage] = useState(null);

   useEffect(() => {
      const fetchInovasi = async () => {
         try {
            const response = await getInovasiById(id);
            if (response?.data?.data) {
               setFormData(response.data.data);
            } else if (response?.data) {
               setFormData(response.data);
            } else {
               setError("Data inovasi tidak ditemukan.");
            }
         } catch (err) {
            console.error(err);
            setError("Gagal mengambil data inovasi.");
         } finally {
            setLoading(false);
         }
      };
      fetchInovasi();
   }, [id]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError(null);
      setSuccessMessage(null);

      // Validasi sederhana
    //   if (
    //      !judulInovasi ||
    //      !deskripsiInovasi ||
    //      !kategori ||
    //      !tanggalSubmit ||
    //      !pengusul ||
    //      !unit ||
    //      !manfaat ||
    //      !potensiSavings
    //   ) {
    //      setError("Semua field wajib diisi!");
    //      return;
    //   }

      try {
         await updateInovasi(id, formData);
         setSuccessMessage("Inovasi berhasil diperbarui!");
         setTimeout(() => navigate("/list-inovasi"), 1500);
      } catch (err) {
         console.error(err);
         setError("Gagal memperbarui inovasi.");
      }
   };

   if (loading) {
      return (
         <div className="text-center mt-5">
            <h4>Memuat data...</h4>
         </div>
      );
   }

   return (
      <div className="container mt-4 text-start">
         <div className="row">
            <div className="col-md-6">
               <h2 className="mb-4">Edit Inovasi</h2>

               {error && <div className="alert alert-danger">{error}</div>}
               {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
               )}

               <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                     <label className="form-label">Judul Inovasi</label>
                     <input
                        type="text"
                        className="form-control"
                        name="ino_judul"
                        value={formData.ino_judul}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <div className="mb-3">
                     <label htmlFor="deskripsiInovasi" className="form-label">
                        Deskripsi
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        name="ino_deskripsi"
                        value={formData.ino_deskripsi}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <div className="mb-3">
                     <label htmlFor="kategori" className="form-label">
                        Kategori
                     </label>
                     <select class="form-control" id="kategori" required>
                        <option value="SS">SS</option>
                        <option value="Non-SS">Non-SS</option>
                     </select>
                  </div>

                  <div className="mb-3">
                     <label htmlFor="tanggalSubmit" className="form-label">
                        Tanggal Submit
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        name="ino_tanggalsubmit"
                        value={formData.ino_tanggalsubmit}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <div className="mb-3">
                     <label htmlFor="pengusul" className="form-label">
                        Pengusul
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        name="ino_pengusul"
                        value={formData.ino_pengusul}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <div className="mb-3">
                     <label htmlFor="unit" className="form-label">
                        Unit
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        name="ino_unit"
                        value={formData.ino_unit}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <div className="mb-3">
                     <label htmlFor="manfaat" className="form-label">
                        Manfaat
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        name="ino_manfaat"
                        value={formData.ino_manfaat}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <div className="mb-3">
                     <label htmlFor="potensiSavings" className="form-label">
                        Potensi Savings
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        name="ino_potensi_savings"
                        value={formData.ino_potensi_savings}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <button type="submit" className="btn btn-success">
                     Update Inovasi
                  </button>
                  <Link to="/list-inovasi" className="btn btn-secondary ms-2">
                     Kembali
                  </Link>
               </form>
            </div>
         </div>
      </div>
   );
}

export default EditInovasi;
