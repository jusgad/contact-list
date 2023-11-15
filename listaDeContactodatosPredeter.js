const contactos = [
    { nombre: "Jhon Gomez", edad: 25, email: "jhon.gomez@example.com" },
    { nombre: "Camila Sanchez", edad: 30, email: "camila.sanchez@example.com" },
    { nombre: "Diego Ramirez", edad: 35, email: "diego.ramirez@example.com" }
  ];
  

  function agregarContacto(contacto) {
    contactos.push(contacto);
  }
  

  function borrarContacto(contacto) {
    const index = contactos.findIndex(c => c.nombre === contacto.nombre);
    if (index !== -1) {
      contactos.splice(index, 1);
    }
  }
  

  function ImprimirContactos() {
    contactos.forEach(contacto => {
      console.log(`Nombre: ${contacto.nombre}`);
      console.log(`Edad: ${contacto.edad}`);
      console.log(`Email: ${contacto.email}`);
      console.log("--------------------");
    });
  }
  

  