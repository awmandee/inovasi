import React, { useEffect, useState } from "react";
import { listParkir } from "../services/parkirServices";
import { Link, useNavigate } from "react-router-dom";

function ListParkir() {
    const [parkirData, setParkirData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fungsi untuk ambil data produk
    const fetchParkir = async () => {
        try {
            setLoading(true);
            const response = await listParkir();
            setParkirData(response.data);
        } catch (error) {
            console.error("Error fetching parkir data:", error);
            setError("Gagal mengambil data parkir.");
        } finally {
            setLoading(false);
        }
    };

    // Panggil fetchProduk saat komponen pertama kali di-load
    useEffect(() => {
        fetchParkir();
    }, []);

    // // Hapus produk dan auto-refresh list
    // const handleDelete = async (id) => {
    //     if (window.confirm("Yakin ingin menghapus parkir ini?")) {
    //         try {
    //             console.log("Menghapus parkir dengan ID:", id);
    //             const response = await deleteParkir(id);
    //             console.log("Respon dari server:", response.data);

    //             if (response.data && response.data.message) {
    //                 const pesan = response.data.message.toLowerCase();

    //                 if (pesan.includes("berhasil")) {
    //                     alert("Inovasi berhasil dihapus!");
    //                 } else if (pesan.includes("tidak ditemukan")) {
    //                     alert("Inovasi tidak ditemukan di server!");
    //                 } else {
    //                     alert("Respon dari server: " + response.data.message);
    //                 }
    //             } else {
    //                 alert("Tidak ada respon dari server.");
    //             }

    //             // Refresh data setelah delete
    //             fetchInovasi();
    //         } catch (error) {
    //             console.error("Error deleting inovasi:", error);
    //             alert(
    //                 "Gagal menghapus inovasi. Periksa koneksi atau server API."
    //             );
    //         }
    //     }
    // };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <h4>Loading...</h4>
            </div>
        );
    }

    return (
        <div className="container-fluid mt-4 px-5">
            <h2 className="mb-4 text-center">List Parkir</h2>
            <div className="d-flex justify-content-start mb-3">
                <Link to="/tambah-parkir" className="btn btn-primary">
                    Tambah Parkir
                </Link>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <table className="table table-striped table-bordered align-middle text-center">
                <thead className="table-dark">
                    <tr>
                        <th>No</th>
                        <th>Nama Jenis</th>
                        <th>Tarif / Jam</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {parkirData.length > 0 ? (
                        parkirData.map((item) => (
                            <tr key={item.jpr_id}>
                                <td>{item.jpr_id}</td>
                                <td className="text-start">{item.jpr_nama}</td>
                                <td className="text-start">
                                    {item.jpr_perjam}
                                </td>
                                <td className="text-start">
                                    {item.jpr_status}
                                </td>

                                {}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">Tidak ada data ditemukan.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ListParkir;
