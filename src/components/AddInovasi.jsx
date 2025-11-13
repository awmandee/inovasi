import React, { useState } from "react";
// import { addInovasi } from "../../services/inovasiServices";
import { addInovasi } from "../services/inovasiServices";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

function AddInovasi() {
   const [judulInovasi, setJudulInovasi] = useState("");
   const [deskripsiInovasi, setDeskripsiInovasi] = useState("");
   const [kategori, setKategori] = useState("");
   const [tanggalSubmit, setTanggalSubmit] = useState("");
   const [pengusul, setPengusul] = useState("");
   const [unit, setUnit] = useState("");
   const [manfaat, setManfaat] = useState("");
   const [potensiSavings, setPotensiSavings] = useState("");
   const [error, setError] = useState(null);
   const [successMessage, setSuccessMessage] = useState(null);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError(null);
      setSuccessMessage(null);

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
         const newInovasi = {
            ino_judul: judulInovasi,
            ino_deskripsi: deskripsiInovasi,
            ino_kategori: kategori,
            ino_tanggalsubmit: tanggalSubmit,
            ino_pengusul: pengusul,
            ino_unit: unit,
            ino_manfaat: manfaat,
            ino_potensi_savings: Number(potensiSavings),
         };

         await addInovasi(newInovasi);
         setSuccessMessage("Inovasi berhasil ditambahkan!");

         // Reset form
         setJudulInovasi("");
         setDeskripsiInovasi("");
         setKategori("");
         setTanggalSubmit("");
         setPengusul("");
         setUnit("");
         setManfaat("");
         setPotensiSavings("");
      } catch (error) {
         console.error("Error adding inovasi:", error);
         setError("Gagal menambahkan inovasi. Silakan coba lagi.");
      }
   };

   return (
      <div className="container mt-4 ">
         <div className="col-md-6">
            <h2 className="mb-4">Tambah Inovasi</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && (
               <div className="alert alert-success">{successMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
               <div className="mb-3">
                  <label htmlFor="judulInovasi" className="form-label">
                     Judul Inovasi
                  </label>
                  <input
                     type="text"
                     className="form-control"
                     id="judulInovasi"
                     value={judulInovasi}
                     onChange={(e) => setJudulInovasi(e.target.value)}
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
                     id="deskripsiInovasi"
                     value={deskripsiInovasi}
                     onChange={(e) => setDeskripsiInovasi(e.target.value)}
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
                     type="Date"
                     className="form-control"
                     id="tanggalSubmit"
                     value={tanggalSubmit}
                     onChange={(e) => setTanggalSubmit(e.target.value)}
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
                     id="pengusul"
                     value={pengusul}
                     onChange={(e) => setPengusul(e.target.value)}
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
                     id="unit"
                     value={unit}
                     onChange={(e) => setUnit(e.target.value)}
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
                     id="manfaat"
                     value={manfaat}
                     onChange={(e) => setManfaat(e.target.value)}
                     required
                  />
               </div>

               <div className="mb-3">
                  <label htmlFor="potensiSavings" className="form-label">
                     Potensi Savings
                  </label>
                  <input
                     type="number"
                     className="form-control"
                     id="potensiSavings"
                     value={potensiSavings}
                     onChange={(e) => setPotensiSavings(e.target.value)}
                     required
                  />
               </div>

               <button type="submit" className="btn btn-primary">
                  Tambah Inovasi
               </button>

               <Link to="/list-inovasi" className="btn btn-secondary ms-2">
                  Kembali
               </Link>
            </form>
         </div>
      </div>
   );
}

export default AddInovasi;
