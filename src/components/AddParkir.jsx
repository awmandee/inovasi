import React, { useState } from "react";
import { addParkir } from "../services/parkirServices";
import { Link } from "react-router-dom";

function AddParkir() {
    const [namaParkir, setNamaParkir] = useState("");
    const [perJam, setPerJam] = useState("");
    const [status, setStatus] = useState("Aktif");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);
        console.log(namaParkir);
        console.log(perJam);
        console.log(status);

        try {
            const newParkir = {
                jpr_nama: namaParkir,
                jpr_perjam: perJam,
                jpr_status: status,
            };

            await addParkir(newParkir);
            setSuccessMessage("Parkir berhasil ditambahkan!");

            // Reset form
            setNamaParkir("");
            setPerJam("");
            setStatus("");
        } catch (error) {
            console.error("Error adding parkir:", error);
            setError("Gagal menambahkan parkir. Silakan coba lagi.");
        }
    };

    return (
        <div className="container mt-4 ">
            <div className="col-md-6">
                <h2 className="mb-4">Tambah Jenis Parkir</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="namaParkir" className="form-label">
                            Nama Jenis Parkir
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="namaParkir"
                            placeholder="Contoh: Motor, Mobil, Truk"
                            value={namaParkir}
                            onChange={(e) => setNamaParkir(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="perJam" className="form-label">
                            Tarif Per Jam (Rp)
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="perJam"
                            placeholder="Contoh: 3.000"
                            value={perJam}
                            onChange={(e) => setPerJam(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">
                            Status
                        </label>
                        <select
                            className="form-select"
                            id="status"
                            required
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="Aktif">Aktif</option>
                            <option value="Non-Aktif">Non-Aktif</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Tambah Parkir
                    </button>

                    <Link to="/list-parkir" className="btn btn-secondary ms-2">
                        Kembali
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default AddParkir;
