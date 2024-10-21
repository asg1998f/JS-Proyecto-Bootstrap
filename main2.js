document.getElementById("formulario").addEventListener("click", function(e){
    e.preventDefault()

     //Traemos los elementos del DOM

  const miFormulario = document.querySelector("#formulario")
  const miNombre = document.querySelector("#nombre")
  const miCorreo = document.querySelector("#correo")
  const miContraseña1 = document.querySelector("#contraseña1")
  const miContraseña2 = document.querySelector("#contraseña2")
  const miBoton= document.querySelector("#btn")
  const mensajeDiv = document.querySelector(".mensaje")

  //Validaciones
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
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    usuarios.push({miNombre,miCorreo,miContraseña1})
    localStorage.setItem('usuarios',JSON.stringify(usuarios))
})

   /* function showMessage(message, success = false) {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = message;
        messageDiv.className = success ? 'message success' : 'message';
        messageDiv.style.display = 'block';
    
        setTimeout(() => {
            messageDiv.style.display = 'none';
            if (success) {
                window.location.href = 'usuarios.html'; // Redirigir a la vista Usuarios
            }
        }, 3000);
    }*/