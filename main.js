//Apuntador 
const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
const btnagregarTarea = document.querySelector('.btn-agregar-tarea')
//Apunto al litado de contactos
const listadoTareas = document.querySelector('.tareas')


//accedo al local storage
const db = window.localStorage


btnagregarTarea.onclick = () =>{
          let contacto ={
            id:Math.random(1,100),
            nombre: nombre.value,
            numero: numero.value,
            direccion: direccion.value,  
          } 
      
         guardarContacto(db, contacto)

cargarContactos(contacto,db);

}