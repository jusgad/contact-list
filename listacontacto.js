const ListaContacto = [];

// Funcion para agregar un nuevo contacto a la lista
function agregarContacto(nombre, email, celular) {
  const contacto = {
    nombre: nombre,
    email: email,
    celular: celular
  };
  ListaContacto.push(contacto);
}

// Funcion para crear un nuevo contacto
function crearContacto() {
  const nombre = prompt("Ingresar el nombre:");
  const email = prompt("Ingresar el correo:");
  const celular = prompt("Ingresar el numero de telefono:");
  agregarContacto(nombre, email, celular);
}

// Funcion para editar un contacto
function editarContacto(index) {
  const nombre = prompt("Ingrese el nuevo nombre:");
  const email = prompt("Ingrese el nuevo correo:");
  const celular = prompt("Ingrese el nuevo numero de telefono:");
  ListaContacto[index].nombre = nombre;
  ListaContacto[index].email = email;
  ListaContacto[index].celular = celular;
}

// Funcion para eliminar un contacto
function eliminarContacto(index) {
  ListaContacto.splice(index, 1);
}