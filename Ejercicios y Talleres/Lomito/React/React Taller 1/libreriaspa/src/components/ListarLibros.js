import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListarTodosLosLibros from "../services/ProxyServicioLibreria";

const ListarLibros = () => {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        ListarTodosLosLibros.ListarTodosLosLibros()
            .then((response) => {
                console.log(response.data);
                setLibros(response.data);
            });
    }, []);

    return (
        <div>
            <div className="card" style={{ marginInlineEnd: 'auto', marginInlineStart: 'auto', width: '90%' }}>
                <Link to="/agregarlibro">Nuevo Libro</Link>
                <h1>Listado de libros</h1>
                <DataTable value={libros} responsiveLayout="scroll">
                    <Column field="bookId" header="Id"></Column>
                    <Column field="title" header="Titulo"></Column>
                    <Column field="authorFirstName" header="Autor FirstName"></Column>
                    <Column field="authorLastName" header="Autor LastName"></Column>
                    <Column field="rating" header="Rating"></Column>
                    <Column body={(rowData) => {
                        return (
                            <Link to={`/editarlibro/${rowData.bookId}`}>Editar</Link>
                        );
                    }}></Column>
                </DataTable>
            </div>
        </div>
    );
}

export default ListarLibros;