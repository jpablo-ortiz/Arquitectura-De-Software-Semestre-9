import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import AgregarLibro from './components/AgregarLibro';
import EditarLibro from './components/EditarLibro';
import ListarLibros from './components/ListarLibros';

function App() {
  return (
    <div className="App">
      <header className="App">

        <Link to="/listarlibros">Listar Libros</Link>
        <Routes>
          <Route path="/listarlibros" element={<ListarLibros />} />
          <Route path="/agregarlibro" element={<AgregarLibro />} />
          <Route path="/editarlibro/:id" element={<EditarLibro />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
