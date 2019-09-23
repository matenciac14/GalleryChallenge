import React, { useEffect, Fragment } from "react";
import Img from "./Img";

import { useDispatch, useSelector } from "react-redux";
import { obtenerFotosAction } from "../actions/fotoAction";
import { busquedaTerminoAction } from "../actions/fotoAction";

const Photos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cargarFotos = () => dispatch(obtenerFotosAction());
    cargarFotos();
  }, []);

  //ccedemos a loading
  const loading = useSelector(state => state.fotos.loading);
  const error = useSelector(state => state.fotos.error);
  const fotos = useSelector(state => state.fotos.fotos);

  const buscarTermino = e => {
    let termino = e.target.value;
    if (termino.length > 3) {
      let resultado;
      resultado = fotos.filter(
        foto => foto.titulo.toLowerCase().indexOf(termino.toLowerCase()) !== -1
      );

      dispatch(busquedaTerminoAction(resultado));
    } else dispatch(busquedaTerminoAction(""));
  };

  return (
    <Fragment>
      <div className="text-center">
      <h3>Imagenes</h3>
        <input
          className="form-control my-3  col-8 offset-2"
          type="text"
          placeholder="Search"
          onChange={e => buscarTermino(e)}
        />
        <div >{fotos.length ===0 ? 'Agregue una imagen por favor' : null}</div>
      </div>
      

      <div>{error ? <div className="font-weight-bold alert alert-danger text-center"> salio mal...</div> : null}</div>
      <div className="card-columns ">
        <div>{loading ? "Cargando.." : null}</div>

        {fotos.map((img, index) => (
          <div key={index}>
            <Img img={img} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Photos;
