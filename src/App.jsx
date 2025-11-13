import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AddInovasi from "./components/AddInovasi";
import EditInovasi from "./components/EditInovasi";
import ListInovasi from "./components/ListInovasi";
import "./App.css";

function App() {
   return (
      <Router>
         <div className="d-flex flex-column min-vh-100">
            <HeaderComponent />
            <div className="flex-grow-1">
               <Routes>
                  <Route path="/tambah-inovasi" element={<AddInovasi />} />
                  <Route path="/list-inovasi" element={<ListInovasi />} />

                  <Route path="/update-inovasi/:id" element={<EditInovasi />} />
               </Routes>
            </div>
            <FooterComponent />
         </div>
      </Router>
   );
}

export default App;
