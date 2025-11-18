import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AddParkir from "./components/AddParkir";
import ListParkir from "./components/ListParkir";
import AddParkirMasukKeluar from "./components/AddParkirMasukKeluar";
import ListParkirMasukKeluar from "./components/ListParkirMasukKeluar";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <HeaderComponent />
                <div className="flex-grow-1">
                    <Routes>
                        <Route path="/tambah-parkir" element={<AddParkir />} />
                        <Route path="/list-parkir" element={<ListParkir />} />
                        <Route
                            path="/tambah-parkirMasukKeluar"
                            element={<AddParkirMasukKeluar />}
                        />
                        <Route
                            path="/list-parkirMasukKeluar"
                            element={<ListParkirMasukKeluar />}
                        />
                    </Routes>
                </div>
                <FooterComponent />
            </div>
        </Router>
    );
}

export default App;
