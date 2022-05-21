
import { useFormik } from 'formik';
import 'primeflex/primeflex.css';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/formatstyle.css";
import { default as GetLibroById, default as UpdateLibro } from "../services/ProxyServicioLibreria";

// editarlibro/:id

const EditarLibro = () => {
    console.log("EditarLibro");
    const { id } = useParams();
    const [libro, setLibro] = useState({});

    // Form like AgregarLibro

    const [formData, setFormData] = useState({});
    const [showMessage, setShowMessage] = useState(false);



    const formik = useFormik({
        initialValues: {
            title: libro.title,
            authorFirstName: libro.authorFirstName,
            authorLastName: libro.authorLastName,
            bookId: libro.bookId,
            rating: libro.rating,
        },
        validate: (data) => {
            let errors = {};
            if (!data.title) {
                errors.title = 'Title requerido.';
            }
            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            console.log(data);

            //aqui debe insertarse el codigo para invocar el back end
            UpdateLibro.UpdateLibro(data)
                .then((response) => { console.log(response.data) })
                .catch(() => { console.log("error") });

            setShowMessage(true);
            //formik.resetForm();
        }
    });

    useEffect(() => {
        GetLibroById.GetLibroById(id)
            .then((response) => {
                console.log(response.data);
                setLibro(response.data);
                formik.setValues(response.data);
                setFormData(response.data);
            })
            .catch(() => {
                console.log("error");
            });
    }, []);

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <div className="flex justify-content-center">
            <div className="card">
                <h5 className="text-center">Nuevo</h5>
                <form onSubmit={formik.handleSubmit} className="p-fluid">
                    <div className="field" style={{ marginTop: "30px" }}>
                        <span className="p-float-label">
                            <InputText
                                readOnly="false"
                                id="bookId"
                                name="bookId"
                                defaultValue={formik.values.bookId}
                                autoFocus
                                className={classNames({
                                    "p-invalid": isFormFieldValid("bookId"),
                                })}
                            />
                            <label
                                htmlFor="bookId"
                                className={classNames({ "p-error": isFormFieldValid("bookId") })}
                            >
                                BookId:*
                            </label>
                        </span>
                        {getFormErrorMessage("bookId")}
                    </div>
                    <div className="field" style={{ marginTop: "30px" }}>
                        <span className="p-float-label">
                            <InputText
                                id="title"
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                autoFocus
                                className={classNames({
                                    "p-invalid": isFormFieldValid("title"),
                                })}
                            />
                            <label
                                htmlFor="title"
                                className={classNames({ "p-error": isFormFieldValid("title") })}
                            >
                                Titulo:*
                            </label>
                        </span>
                        {getFormErrorMessage("title")}
                    </div>
                    <div className="field" style={{ marginTop: "30px" }}>
                        <span className="p-float-label">
                            <InputText
                                id="authorFirstName"
                                name="authorFirstName"
                                value={formik.values.authorFirstName}
                                onChange={formik.handleChange}
                                className={classNames({
                                    "p-invalid": isFormFieldValid("authorFirstName"),
                                })}
                            />
                            <label
                                htmlFor="authorFirstName"
                                className={classNames({ "p-error": isFormFieldValid("authorFirstName") })}
                            >
                                Autor FirstName:*
                            </label>
                        </span>
                        {getFormErrorMessage("authorFirstName")}
                    </div>
                    <div className="field" style={{ marginTop: "30px" }}>
                        <span className="p-float-label">
                            <InputText
                                id="authorLastName"
                                name="authorLastName"
                                value={formik.values.authorLastName}
                                onChange={formik.handleChange}
                                className={classNames({
                                    "p-invalid": isFormFieldValid("authorLastName"),
                                })}
                            />
                            <label
                                htmlFor="authorLastName"
                                className={classNames({ "p-error": isFormFieldValid("authorLastName") })}
                            >
                                Autor LastName:*
                            </label>
                        </span>
                        {getFormErrorMessage("authorLastName")}
                    </div>
                    <div className="field" style={{ marginTop: "30px" }}>
                        <span className="p-float-label">
                            <InputNumber
                                id="rating"
                                name="rating"
                                value={formik.values.rating}
                                onChange={formik.handleChange}
                                max={10}
                                min={0}
                                className={classNames({
                                    "p-invalid": isFormFieldValid("rating"),
                                })}
                            />
                            <label
                                htmlFor="rating"
                                className={classNames({ "p-error": isFormFieldValid("rating") })}
                            >
                                Rating:*
                            </label>
                        </span>
                        {getFormErrorMessage("rating")}
                    </div>
                    <button type="submit" label="Enviar" className="mt-2">
                        Enviar
                    </button>
                </form>
                {showMessage && <div className="alert alert-success">Libro guardado correctamente</div>}
            </div>
        </div>
    );
}

export default EditarLibro;