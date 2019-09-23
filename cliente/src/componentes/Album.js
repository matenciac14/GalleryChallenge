import React, { Fragment, useEffect } from "react";
import Swal from "sweetalert2";

//redux
import { useDispatch, useSelector } from "react-redux";
import { descargarAlbumsAction } from "../actions/albumAction";
import { buscarIdAlbumAction } from "../actions/albumAction";
import { eliminarFotoAlbumAction } from "../actions/albumAction";

const Album = ({ match }) => {
  const dispatch = useDispatch();
  const imagenes = useSelector(state => state.albums.album.imagenes);
  const albumId = useSelector(state => state.albums.album._id);
  const error = useSelector(state => state.albums.error);
  const eliminaFotoAlbum = (albumId, _id) =>
    dispatch(eliminarFotoAlbumAction(albumId, _id));

  //obtenemos ID
  const _id = match.params.id;
  useEffect(() => {
    dispatch(buscarIdAlbumAction(_id));
    dispatch(descargarAlbumsAction());
  }, [dispatch, _id]);

  if (!imagenes) return "Cargando..";
  //console.log(imagenes)

  const confirmarEliminarFotoAlbum = (albumId, _id) => {
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
        //console.log(albumId);
        //console.log("id foto en album" + _id);
        eliminaFotoAlbum(albumId, _id);
      } else if (error === true) {
        Swal.fire("Algo salio mal", "el archivo no se ha eliminado.", "error");
      }
    });
  };

  return (
    <Fragment>
      <div className="">
        <div className="card-columns">
         <div>{imagenes.map(item => (
            <div key={item._id} className="card  text-white tarjeta">
              <img src={item.url} className="card-img" alt="..." />
              <div className="card-img-overlay informacionimagen">
                <div className="card-footer">
                  <a
                    href={item.url}
                    target="_blank"
                    without="true"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary mr-3"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <button
                    className="btn btn-outline-danger"
                    onClick={e => confirmarEliminarFotoAlbum(albumId, item._id)}
                  >
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Album;






