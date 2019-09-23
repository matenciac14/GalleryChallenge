import React, { Fragment, useEffect } from "react";
import Swal from "sweetalert2";
import Moment from "react-moment";

//redux
import { useDispatch, useSelector } from "react-redux";
import { eliminarFotoAction } from "../actions/fotoAction";
import { obtenerFotosAction } from "../actions/fotoAction";

const Img = ({ img, history }) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.fotos.error);

  const confirmarElimarFoto = _id => {
    Swal.fire({
      title: "¿Estás seguro de querer eliminar la imagen?",
      text: "No podrás recuperar este archivo!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borralo!",
      cancelButtonText: "Olvidalo"
    }).then(result => {
      if ((error === false) & (result.value === true)) {
        Swal.fire(
          "Imagen borrada!",
          "el archivo ha sido eliminado.",
          "success"
        );
        dispatch(eliminarFotoAction(_id));
      } else if (error === true) {
        Swal.fire("Algo salio mal", "el archivo no se ha eliminado.", "error");
      }
    });
  };

  return (
    <Fragment>
      <div className="card  text-white tarjeta">
        <img src={img.imageURL} className="card-img" alt="..." />
        <div className="card-img-overlay informacionimagen -flex">
          <h5 className="mb-5">{img.titulo}</h5>
          <p className="mb-5">{img.descripcion}</p>
          <label type="date">
            <Moment>{img.fecha}</Moment>
          </label>
          <div className="card-footer algin-self-end">
            <a
              href={img.imageURL}
              target="_blank"
              without="true"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary mr-3"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
            <button
              className="btn btn-outline-danger"
              onClick={() => confirmarElimarFoto(img._id)}
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Img;
