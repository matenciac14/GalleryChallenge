const { Router } = require("express");
const ruta = Router();

const fs = require("fs-extra");
const Photo = require("../models/Photo");
const cloudinary = require("cloudinary");
const Album = require("../models/Album");
const RegistroActividad = require("../models/RegistroActividad");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

//rutas para trabajar con las imagenes
ruta.get("/", async (req, res) => {
  const photos = await Photo.find();
  //console.log(photos);
  res.json(photos);
  //registraremos la actividad
  const fechaR = new Date();
  const nuevoRegistro = new RegistroActividad({
    nombre: "descargando imagenes",
    actividad: "GET",
    fecha: fechaR,
    detalle: "usuario:fulanito"
  });
  await nuevoRegistro.save();
});

ruta.post("/photo/new", async (req, res) => {
  const { titulo, descripcion, fecha } = req.body;
  const result = await cloudinary.v2.uploader.upload(req.file.path);
  //console.log(result);
  const nuevafoto = new Photo({
    titulo,
    descripcion,
    fecha,
    imageURL: result.url,
    public_id: result.public_id
  });
  await nuevafoto.save(); //guardamos los datos en nuestra base de datos
  await fs.unlink(req.file.path); //eliminamos el archivo del servidor
  //registraremos la actividad
  const fechaR = new Date();
  const nuevoRegistro = new RegistroActividad({
    nombre: "guardando nueva foto",
    actividad: "POST",
    fecha: fechaR,
    detalle: `usuario:fulanito guardo la siguiente foto ---> ${result.url}`
  });
  await nuevoRegistro.save();

  res.json({ status: "peticion enviada" });
});

ruta.delete("/photo/:_id", async (req, res) => {
  const { _id } = req.params;
  const photo = await Photo.findByIdAndDelete(_id);
  const result = await cloudinary.v2.uploader.destroy(photo.public_id);

  //registraremos la actividad
  const fechaR = new Date();
  const nuevoRegistro = new RegistroActividad({
    nombre: "descargando imagenes",
    actividad: "DELETE",
    fecha: fechaR,
    detalle: `usuario:fulanito elimino la siguiente foto ---> ${_id}`
  });
  await nuevoRegistro.save();
  res.json({ status: "Imagen Eliminada" });
});

//rutas para trabajar con los albunes
ruta.get("/albums", async (req, res) => {
  const albums = await Album.find();
  //registraremos la actividad
  const fechaR = new Date();
  const nuevoRegistro = new RegistroActividad({
    nombre: "descargando albums",
    actividad: "GET",
    fecha: fechaR,
    detalle: "usuario:fulanito"
  });
  await nuevoRegistro.save();

  res.json(albums);
});

ruta.get("/album/:_id", async (req, res) => {
  //console.log("params", req.params);
  const album = await Album.findById(req.params._id);
  //registraremos la actividad
  const fechaR = new Date();
  const nuevoRegistro = new RegistroActividad({
    nombre: "descargando album especifico",
    actividad: "GET/:id",
    fecha: fechaR,
    detalle: `usuario:fulanito solicito el album ->${album}`
  });
  await nuevoRegistro.save();

  res.json(album);
});

//crearemos el album nuevo
ruta.post("/album/new", async (req, res) => {
  //console.log(req.body);
  const { titulo, fecha, imagenes } = req.body;
  console.log(titulo);
  console.log(fecha);
  console.log(imagenes[0]);
  //res.send('msotraremos los album')
  res.json({ status: "peticion enviada" });

  const nuevoalbum = Album({
    titulo,
    fecha,
    imagenes
  });
  await nuevoalbum.save();
  //agregando el registro
  const fechaR = new Date();
  const nuevoRegistro = new RegistroActividad({
    nombre: "agregando nuevo album",
    actividad: "POST",
    fecha: fechaR,
    detalle: `usuario:fulanito agrego el album ->${titulo}`
  });
  await nuevoRegistro.save();
});

ruta.delete("/albums/:_id/", async (req, res) => {
  await Album.findByIdAndDelete(req.params._id);
  //agregando el registro
  const fechaR = new Date();
  const nuevoRegistro = new RegistroActividad({
    nombre: "eliminando  album",
    actividad: "DELETE",
    fecha: fechaR,
    detalle: `usuario:fulanito elimino el album ->${req.params._id}`
  });
  await nuevoRegistro.save();

  res.json({ status: "Album Eliminado" });
});

ruta.put("/album/:albumId/:_id", async (req, res) => {
  const { albumId, _id } = req.params;
  //await Album.findByIdAndDelete(req.params._id)
  await Album.updateOne({ _id: albumId }, { $pull: { imagenes: { _id: _id } } });

  //agregando el registro
  const fechaR = new Date();
  const nuevoRegistro = new RegistroActividad({
    nombre: "eliminando foto del album",
    actividad: "DELETE",
    fecha: fechaR,
    detalle: `usuario:fulanito elimino el la foto ->${_id}`
  });
  await nuevoRegistro.save();

  res.json({ status: "Foto Eliminada" });
});//db.albums.update({_id:ObjectId("5d6f7f145398a534081b592e")},{$pull:{"imagenes":{_id:ObjectId("5d6f7f145398a534081b5930")}}});
//

ruta.get("/miguelatencia/acciones", async(req,res)=>{
  const Registro = await RegistroActividad.find();
  res.json(Registro);
})


module.exports = ruta;
