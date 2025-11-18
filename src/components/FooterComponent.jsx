import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FooterComponent() {
    return (
        <footer className="bg-light- text-center text-lg-start mt-auto">
            <div className="container p-4">
                <div className="text-center">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Parkiran Uhuy
                    </h6>
                    <p>
                        {new Date().getFullYear()} Parkiran Uhuy . Awmandee's
                        only
                    </p>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/list-parkir" className="me-4 text-reset">
                        Master Jenis Parkir
                    </a>
                    <a
                        href="/list-parkirMasukKeluar"
                        className="me-4 text-reset"
                    >
                        Transaksi Parkir Masuk Keluar
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;
