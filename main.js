/*let enviar = document.getElementById("submit")
let parrafo = document.createElement('p')

function enviarDatos(e){
    e.preventDefault();
    const nombre = document.getElementById("nombre").value
    const correo = document.getElementById("exampleInputEmail").value
    const contraseña = document.getElementById("exampleInputPassword1").value
    const repetirContraseña = document.getElementById("exampleInputPassword2").value

    const objeto= {nombre,correo,contraseña,repetirContraseña}
    localStorage.setItem("usuario",JSON.stringify(objeto))
    parrafo.innerText=""
    pintarPantalla()
}

function pintarPantalla (){
    document.body.appendChild(parrafo)
    const user = JSON.parse(localStorage.getItem("user"));
    parrafo.innerText = 'Nombre: '+usuario.nombre +' Correo: '+ usuario.correo +' Contraseña: '+usuario.mensaje+' Repetir contraseña: '+usuario.repetirContraseña
  }
  btn.addEventListener("click", onSubmit);*/


  //Guarda la información recogida de cada uno de los usuarios en localStorage.

  document.getElementById("formulario").addEventListener("click", function(e){
    e.preventDefault()

    let datosUsuario = JSON.parse(localStorage.getItem("form"))

    const nombre = document.getElementById("nombre").value
    const correo = document.getElementById("correo").value
    const contraseña = document.getElementById("contraseña1").value
    const repetirContraseña = document.getElementById("contraseña2").value

    const objeto= {nombre,correo,contraseña,repetirContraseña}

    //datosUsuario.push(objeto)

    localStorage.setItem("formulario", JSON.stringify(datosUsuario))
    contenedor.innerHTML=``
    pintarPantalla()
  })

  //Traemos los elementos del DOM

  const miFormulario = document.querySelector("#formulario")
  const miNombre = document.querySelector("#nombre")
  const miCorreo = document.querySelector("#correo")
  const miContraseña1 = document.querySelector("#contraseña1")
  const miContraseña2 = document.querySelector("#contraseña2")
  const miBoton= document.querySelector("#btn")

  function onSubmit(e){
    e.preventDefault()
    //console.log(`Mi nombre es ${miNombre.value}, mi correo electrónico es ${miCorreo.value}, mi contraseña 1 es ${miContraseña1.value} y mi contraseña 2 es ${miContraseña2.value}`)
  }

  miFormulario.addEventListener("submit",onSubmit)

//Implementa validación que obligue a rellenar todos los campos.

const mensajeDiv = document.querySelector(".mensaje")

function onSubmit(e){
    e.preventDefault()
    if(miNombre.value ==="" || miCorreo.value ==="" || miContraseña1==="" || miContraseña2===0){
    mensajeDiv.innerHTML="Por favor, rellena todos los campos"
    }
    if (/(\w+?@\w+?\x2E.+)/.test(miCorreo.value) !== true) {
    mensajeDiv.innerHTML = "Por favor, introduzca un formato de correo válido"
    }
    if(miContraseña1!= miContraseña2){
    mensajeDiv.innerHTML = "Las contraseñas no coinciden"
    }
    if(miContraseña1.length<8){
      mensajeDiv.innerHTML = "La contraseña debe tener al menos 8 caracteres"
    }
    else{
    mensajeDiv.innerHTML="Usuario creado correctamente"
    }
    
    setTimeout(function () {
        // console.log("Han pasado 3 segundos")
        mensajeDiv.innerText = "";
      }, 3000);
  }
  btn.addEventListener("click",onSubmit)

//Implementa una validación para el correo. Hecho


//Implementa una validación que comprueba que la contraseña 1 es la misma que la contraseña 2.
//Implementa una validación de contraseña
//Por cada validación que no se cumpla muestra un mensaje durante 3 segundos y que después desaparezca. Hecho
//Al terminar de rellenar los datos del formulario correctamente muestra un mensaje durante 3 segundos que muestre “Usuario creado correctamente” y redirige a la vista Usuarios.
//Muestra los mensajes utilizando los alerts de Bootstrap.
