import React, { useEffect, Fragment } from "react";
import Swal from "sweetalert2";
import Moment from "react-moment";
import { Link } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { descargarAlbumsAction } from "../actions/albumAction";
import { eliminarAlbumAction } from "../actions/albumAction";

const Albums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cargarAlbums = () => dispatch(descargarAlbumsAction());
    cargarAlbums();
  }, []);

  const loading = useSelector(state => state.albums.loading);
  const error = useSelector(state => state.albums.error);
  const albums = useSelector(state => state.albums.albums);


  const confirmarEliminarAlbum = _id => {
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
        dispatch(eliminarAlbumAction(_id));
        Swal.fire(
          "Imagen borrada!",
          "el archivo ha sido eliminado.",
          "success"
        );
      } else if (error === true) {
        Swal.fire("Algo salio mal", "el archivo no se ha eliminado.", "error");
      }
    });
  };

  return (
    <Fragment>
      <div className=" text-center ">
        <div>{error ? <div className="font-weight-bold alert alert-danger text-center">Algo salio mal...</div>: null}</div>
        <div>{loading ? "Cargando..." : null} </div>  
        <h3 className="my-3">Albums</h3>
        <div>{albums.length ===0 ? "cree un album por favor" : null}</div>
        <div className="card-columns ">
          <div>{albums.map((album, index) => (
            <div key={index} className="card ">
              <div className="card-header">
                <h4>{album.titulo}</h4>
               
                <small>{album.imagenes? album.imagenes.length : null} : Imagenes</small>
              </div>

              <small><Moment>{album.fecha}</Moment></small>
              <div className="card-footer">
                <Link
                  to={`/album/${album._id}`}
                  className="btn btn-secondary btn-block"
                >
                  <i className="fas fa-external-link-alt mr-2  "></i> Ver
                  album..
                </Link>
                <button
                  onClick={e => confirmarEliminarAlbum(album._id)}
                  className="btn btn-danger btn-block"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Albums;
