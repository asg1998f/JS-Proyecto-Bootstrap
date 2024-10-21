document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const contraseña1 = document.getElementById('contraseña1').value;
    const contraseña2 = document.getElementById('contraseña2').value;
    const contenedor = document.getElementById('contenedor');

    contenedor.textContent = '';
    contenedor.className = '';

    if (!nombre || !correo || !contraseña1 || !contraseña2) {
        showMessage("Todos los campos son obligatorios");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        showMessage("Por favor, introduce un correo electrónico válido");
        return;
    }

    if (contraseña1 !== contraseña2) {
        showMessage("Las contraseñas no coinciden");
        return;
    }
    if (contraseña1.length < 8) { 
        showMessage("La contraseña debe tener al menos 8 caracteres");
        return;
    }
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push({ nombre, correo, contraseña: contraseña1 });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    showMessage("Usuario creado correctamente", true);
});

function showMessage(message, success = false) {
    const contenedor = document.getElementById('contenedor');
    contenedor.textContent = message;
    contenedor.className = success ? 'alert alert-success' : 'alert alert-danger';
    contenedor.style.display = 'block';

    setTimeout(() => {
        contenedor.style.display = 'none';
        if (success) {
            window.location.href = 'usuarios.html'; 
        }
    }, 3000);
}
function showMessage(message, success = false) {
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = `<div class="alert ${success ? 'alert-success' : 'alert-danger'}" role="alert">${message}</div>`;
    contenedor.style.display = 'block';

    setTimeout(() => {
        contenedor.style.display = 'none';
        if (success) {
            window.location.href = 'usuarios.html'; 
        }
    }, 3000);
}

