import { useFormik } from 'formik';
import 'primeflex/primeflex.css';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { useState } from 'react';
import "../css/formatstyle.css";
import AddLibro from "../services/ProxyServicioLibreria";

const AgregarLibro = () => {
    //este almacena los datos del formulario formic, un libro
    const [formData, setFormData] = useState({});
    const [showMessage, setShowMessage] = useState(false);
    const formik = useFormik({
        initialValues: {
            title: "",
            authorFirstName: "",
            authorLastName: "",
            bookId: "",
            rating: 0,
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
            AddLibro.AddLibro(data)
                .then((response) => { console.log(response.data) })
                .catch(() => { console.log("error") });

            setShowMessage(true);
            formik.resetForm();
        }
    });

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
                                id="bookId"
                                name="bookId"
                                value={formik.values.bookId}
                                onChange={formik.handleChange}
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

export default AgregarLibro;