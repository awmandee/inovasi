import React, { useEffect, useState } from "react";
import { listParkirMasukKeluar } from "../services/parkirMasukKeluar";
import { Link, useNavigate } from "react-router-dom";

function ListParkirMasukKeluar() {
    const [parkirMasukKeluarData, setParkirMasukKeluarData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fungsi untuk ambil data produk
    const fetchParkirMasukKeluar = async () => {
        try {
            setLoading(true);
            const response = await listParkirMasukKeluar();
            setParkirMasukKeluarData(response.data);
        } catch (error) {
            console.error("Error fetching parking data:", error);
            setError("Gagal mengambil data parkir.");
        } finally {
            setLoading(false);
        }
    };

    // Panggil fetchProduk saat komponen pertama kali di-load
    useEffect(() => {
        fetchParkirMasukKeluar();
    }, []);

    // hapus gaada

    if (loading) {
        return (
            <div className="text-center mt-5">
                <h4>Loading...</h4>
            </div>
        );
    }

    return (
        <div className="container-fluid mt-4 px-5">
            <h2 className="mb-4 text-center">List Data Parkir</h2>
            <div className="d-flex justify-content-start mb-3">
                <Link
                    to="/tambah-parkirMasukKeluar"
                    className="btn btn-primary"
                >
                    Tambah Data Parkir
                </Link>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <table className="table table-striped table-bordered align-middle text-center">
                <thead className="table-dark">
                    <tr>
                        <th>No</th>
                        <th>Plat Nomor</th>
                        <th>Jenis</th>
                        <th>Waktu Masuk</th>
                        <th>Waktu Keluar</th>
                        <th>Total Tarif</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {parkirMasukKeluarData.length > 0 ? (
                        parkirMasukKeluarData.map((item) => (
                            <tr key={item.prk_id}>
                                <td>{item.prk_id}</td>
                                <td className="text-start">
                                    {item.prk_platnomor}
                                </td>
                                <td className="text-start">{item.jpr_nama}</td>
                                <td className="text-start">
                                    {item.prk_waktumasuk}
                                </td>
                                <td className="text-start">
                                    {item.prk_waktukeluar}
                                </td>
                                <td>
                                    {parseFloat(
                                        item.prk_totaltarif
                                    ).toLocaleString("id-ID")}
                                </td>
                                <td>
                                    {/* <button
                                        className="btn btn-sm btn-warning me-2"
                                        onClick={() =>
                                            navigate(
                                                `/update-parkirMasukKeluar/${item.prk_id}`
                                            )
                                        }
                                    >
                                        Parkir Keluar
                                    </button> */}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">Tidak ada parkir ditemukan.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ListParkirMasukKeluar;
