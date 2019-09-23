import React, { useEffect, Fragment, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { obtenerFotosAction } from "../actions/fotoAction";
import {
  validarFormularioAction,
  validacionExito,
  validacionError
} from "../actions/validacionAction";
import { crearnuevoAlbumAction } from "../actions/albumAction";

const NewAlbum = ({ history }) => {
  //manejaremos el state de nuestro album
  const [titulo, guardarTitulo] = useState("");
  const [fecha, guardarFecha] = useState("");
  const [imagenes, guardarImagenes] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    //cuando el componente este listo..push
    const cargarFotos = () => dispatch(obtenerFotosAction());
    cargarFotos();
  }, []);

  
  const fotos = useSelector(state => state.fotos.fotos);
  const error = useSelector(state => state.error.error);
  const agregarNuevoAlbum = album => dispatch(crearnuevoAlbumAction(album));
  const validarformulario = () => dispatch(validarFormularioAction());
  const exitoValidacion = () => dispatch(validacionExito());
  const errorValidacion = () => dispatch(validacionError());

  //metodo para hacer el arreglo de fotos y guardar en state
  const obtenerimagenes = e => {
    const id = e.target.id;
    const activo = e.target.checked;
    const url = e.target.value;
    const image = { id, activo, url };

    //serie de condiciones para solo agregar al album las imagenes que queden seleccionadas
    if (activo === true) {
      //console.log('siiiii')
      const nuevaimagen = [...imagenes, image];
      guardarImagenes(nuevaimagen);
    } else if (activo === false) {
      console.log("nooo");
      console.log(id);
      const nuevaimagen2 = imagenes.filter(function(imagenes) {
        return imagenes.id !== id;
      });
      //const nuevaimagen = [...imagenes,nuevaimagen2]
      guardarImagenes(nuevaimagen2);
    }
  };

  //metodo se dispara al dear click en boton crear
  const crearAlbum = e => {
    e.preventDefault();
    // validar formulario
    validarformulario();
    if (imagenes.length === 0 || titulo === "") {
      console.log("necesita guardar una imagen");
      errorValidacion();
    } else {
      exitoValidacion();
      //paso la validacion
      //crear el album
      const fecha = new Date(); //fecha creacion album
      guardarFecha(JSON.stringify(fecha));
      //-->dispatch actions
      agregarNuevoAlbum({
        titulo,
        fecha,
        imagenes,
      });

      history.push("/albums");
    }

    //redireccionar

    //console.log('son las imagenes actuales' + JSON.stringify(imagenes) )
    //console.log('tu album seria asi ||||||' +titulo+fecha+JSON.stringify(imagenes))
  };

  return (
    <Fragment>
      <div className="text-center p-3  ">
        <h3 className="mt-3">Nuevo Album</h3>
        <small>Digite el nombre y seleccione las imagenes a guardar</small>
        <form
          className="mt-4"
          onSubmit={crearAlbum}
          encType="multipart/form-data"
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control col-9 d-inline  "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Titulo del album"
              onChange={e => guardarTitulo(e.target.value)}
            />
          </div>
          <div className="ctimg overflow-auto">
            <div className="card-columns text-left bg-light">
              {fotos.map(img => (
                <div key={img._id} className="col">
                  <div className="card bg-dark text-white">
                    <img src={img.imageURL} className="card-img" alt="..." />
                    <div className="card-img-overlay b ">
                      <div className="form-check form-check-inline mr-4 p-2 bg-dark">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name={img.titulo}
                          id={img._id}
                          value={img.imageURL}
                          onChange={e => obtenerimagenes(e)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck1"
                        >
                          {img.titulo}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {error ? (
            <div className="font-weight-bold alert alert-danger">
              Digite un titulo y seleccione al menos una
            </div>
          ) : null}
          <button type="submit" className="btn btn-success btn-block">
            Crear Album
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default NewAlbum;
