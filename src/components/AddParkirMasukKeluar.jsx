import React, { useState } from "react";
import { addParkirMasukKeluar } from "../services/parkirMasukKeluar ";
import { Link } from "react-router-dom";

function AddParkirMasukKeluar() {
    const [platNomor, setPlatNomor] = useState("");
    const [waktuMasuk, setWaktuMasuk] = useState("");
    const [waktuKeluar, setWaktuKeluar] = useState("");
    const [totaltarif, setTotaltarif] = useState("");
    const [idParkir, setIdParkir] = useState("");
    const [namaParkir, setNamaParkir] = useState("");
    const [perJam, setPerJam] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);
        console.log(platNomor);
        console.log(waktuMasuk);
        console.log(waktuKeluar);
        console.log(totaltarif);
        console.log(idParkir);
        console.log(namaParkir);
        console.log(perJam);

        try {
            const newParkirMasukKeluar = {
                prk_platnomor: platNomor,
                prk_waktumasuk: waktuMasuk,
                prk_waktukeluar: waktuKeluar,
                prk_totaltarif: totaltarif,
                jpr_id: idParkir,
                jpr_nama: namaParkir,
                jpr_perjam: perJam,
            };

            await addParkirMasukKeluar(newParkirMasukKeluar);
            setSuccessMessage(" Parkir Masuk berhasil dicatat ");

            // Reset form
            setPlatNomor("");
            setWaktuMasuk("");
            setWaktuKeluar("");
            setTotaltarif("");
            setIdParkir("");
            setNamaParkir("");
            setPerJam("");
        } catch (error) {
            console.error("Error adding parkir masuk:", error);
            setError("Gagal menambahkan parkir masuk. Silakan coba lagi.");
        }
    };

    return (
        <div className="container mt-4 ">
            <div className="col-md-6">
                <h2 className="mb-4">PARKIR MASUK</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="platNomor" className="form-label">
                            Plat Nomor
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="platNomor"
                            placeholder="Contoh: B 1234 XYZ"
                            value={platNomor}
                            onChange={(e) => setPlatNomor(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="waktuMasuk" className="form-label">
                            Waktu Masuk
                        </label>
                        <input
                            type="datetime-local"
                            className="form-control"
                            id="waktuMasuk"
                            value={waktuMasuk}
                            onChange={(e) => setWaktuMasuk(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="waktuKeluar" className="form-label">
                            Waktu Keluar
                        </label>
                        <input
                            type="datetime-local"
                            className="form-control"
                            id="waktuKeluar"
                            value={waktuKeluar}
                            onChange={(e) => setWaktuKeluar(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="totaltarif" className="form-label">
                            Total Tarif
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="totaltarif"
                            value={totaltarif}
                            onChange={(e) => setTotaltarif(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="idParkir" className="form-label">
                            ID Parkir
                        </label>
                        <input
                            type="enabled"
                            className="form-control"
                            id="idParkir"
                            value={idParkir}
                            onChange={(e) => setIdParkir(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="namaParkir" className="form-label">
                            Jenis Parkir
                        </label>
                        <input
                            type="enabled"
                            className="form-control"
                            id="namaParkir"
                            value={namaParkir}
                            onChange={(e) => setNamaParkir(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="perJam" className="form-label">
                            Per Jam
                        </label>
                        <input
                            type="enabled"
                            className="form-control"
                            id="perJam"
                            value={perJam}
                            onChange={(e) => setPerJam(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Simpan
                    </button>

                    <Link
                        to="/list-parkirMasukKeluar"
                        className="btn btn-secondary ms-2"
                    >
                        Kembali
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default AddParkirMasukKeluar;
