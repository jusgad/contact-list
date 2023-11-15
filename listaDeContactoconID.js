
const Listacontacto = [];

// Funcion para agregar contacto
function agregarContacto(id, nombre, apellido, telefono, ubicacion, ciudad, direccion) {
  const contacto = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    ubicacion: ubicacion,
    ciudad: ciudad,
    direccion: direccion
  };
  Listacontacto.push(contacto);
}

// Funcion para editar contacto
function editarContacto(id, nombre, apellido, telefono, ubicacion, ciudad, direccion) {
  const contacto = Listacontacto.find(contacto => contacto.id === id);
  if (contacto) {
    contacto.nombre = nombre;
    contacto.apellido = apellido;
    contacto.telefono = telefono;
    contacto.ubicacion = ubicacion;
    contacto.ciudad = ciudad
    contacto.direccion = direccion;
  }
}

// Funcion para eliminar contacto
function eliminarContacto(id) {
  Listacontacto = Listacontacto.filter(contacto => contacto.id !== id);
}