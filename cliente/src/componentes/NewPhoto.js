import React, { useState } from "react";

//redux
import { crearNuevaFotoAction } from "../actions/fotoAction";
import {
  validarFormularioAction,
  validacionExito,
  validacionError
} from "../actions/validacionAction";
import { useDispatch, useSelector } from "react-redux"; //nos permite ejecutar nuestras acciones mediante hooks

const NewPhoto = ({ history }) => {
  //manejaremos el state local del formulario
  const [titulo, guardarTitulo] = useState("");
  const [descripcion, guardarDescripcion] = useState("");
  const [image, guardarImagen] = useState(null);
  const [fecha, guardarFecha] = useState("");

  //crearemos la nueva foto
  const dispatch = useDispatch();
  //mediante esta funcion accionamos la funcion principal de nuestro reducer pasandole los datos(payload)
  const agregarFoto = foto => dispatch(crearNuevaFotoAction(foto));
  const validarformulario = () => dispatch(validarFormularioAction());
  const exitoValidacion = () => dispatch(validacionExito());
  const errorValidacion = () => dispatch(validacionError());

  //obtenemos los datos del state
  const error = useSelector(state => state.error.error);

  //agregamos  nueva foto
  const submitNuevaFoto = e => {
    e.preventDefault();

    validarformulario();
    //validar formulario
    if (titulo.trim() === "" || descripcion.trim() === "") {
      errorValidacion();
      return;
    }
    //si pasa validacion hacemos..App
    exitoValidacion();
    const fecha = new Date(); //fecha creacion album
    guardarFecha(JSON.stringify(fecha));
    //creamos la foto nueva
    //pasamos los datos de nuestro state(formulario) a la funcion de nuestras acciones
    agregarFoto({
      titulo,
      descripcion,
      image,
      fecha
    });

    //redireccionamos
    history.push("/");
  };

  return (
    <div className=" p-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <form onSubmit={submitNuevaFoto} encType="multipart/form-data">
                <div className="input-group mb-3">
                  <div className="custom-file">
                    <input
                      name="image"
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile02"
                      onChange={e => guardarImagen(e.target.files[0])}
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile02"
                      aria-describedby="inputGroupFileAddon02"
                    >
                      Seleccione la Imagen
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="titulo"
                    placeholder="titulo"
                    className="form-control"
                    value={titulo}
                    onChange={e => guardarTitulo(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="descripcion"
                    className="form-control"
                    placeholder="descripcion"
                    value={descripcion}
                    onChange={e => guardarDescripcion(e.target.value)}
                  ></textarea>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Subir Imagen
                  </button>
                </div>
              </form>
              {error ? (
                <div className="font-weight-bold alert alert-danger">
                  Todos los campos son obligatorios
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPhoto;
