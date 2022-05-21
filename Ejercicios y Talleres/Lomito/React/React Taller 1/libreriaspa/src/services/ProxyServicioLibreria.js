import axios from "axios";

const baseURL = "http://localhost:8080/WsLibreria/"//"http://10.43.100.185:8080/WsLibreria/"

const ListarTodosLosLibros = () => {
    return axios
        .create({
            baseURL: baseURL,
            headers: {
                "Content-type": "application/json",
            },
        })
        .get("libreria/managerbook/");
};

const AddLibro = (data) => {
    return axios
        .create({
            baseURL: baseURL,
            headers: {
                "Content-type": "application/json",
            },
        })
        .post("libreria/managerbook/",
            {
                'authorFirstName': data.authorFirstName,
                'authorLastName': data.authorLastName,
                'bookId': data.bookId,
                'title': data.title,
                'rating': data.rating,
            }
        );
};

const GetLibroById = (id) => {
    return axios
        .create({
            baseURL: baseURL,
            headers: {
                "Content-type": "application/json",
            },
        })
        .get("libreria/managerbook/" + id);
};

const UpdateLibro = (data) => {
    return axios
        .create({
            baseURL: baseURL,
            headers: {
                "Content-type": "application/json",
            },
        })
        .put("libreria/managerbook/",
            {
                'authorFirstName': data.authorFirstName,
                'authorLastName': data.authorLastName,
                'bookId': data.bookId,
                'title': data.title,
                'rating': data.rating,
            }
    );
};


const ServiciosLibreria = {
    ListarTodosLosLibros,
    AddLibro,
    UpdateLibro,
    GetLibroById,
};

export default ServiciosLibreria;