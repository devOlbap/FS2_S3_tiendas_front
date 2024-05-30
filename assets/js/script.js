

document.getElementById('home').style.display = 'none';
document.getElementById('product').style.display = 'none';
document.getElementById('shoplist').style.display = 'none';
document.getElementById('nav_user').style.display = 'none';


function mostrar(element){
    // Mostrar la pantalla de carga
    document.getElementById('loading').style.display = 'flex';

    // Simular un retardo para la carga (por ejemplo, 1 segundo)
    setTimeout(function() {
        // Ocultar todos los artículos
        document.getElementById('home_div').style.display = 'none';
        document.getElementById('products_div').style.display = 'none';
        document.getElementById('user_form_div').style.display = 'none';
        document.getElementById('carrito_div').style.display = 'none';
        document.getElementById('login_div').style.display = 'none';


        
        // Mostrar el artículo correspondiente
        switch (element.id) {
            case 'home':
                document.getElementById('home_div').style.display = 'block';
                break;
            case 'product':
                document.getElementById('products_div').style.display = 'block';
                break;
            case 'contact':
                document.getElementById('user_form_div').style.display = 'block';
                break;
            case 'shoplist':
                document.getElementById('carrito_div').style.display = 'block';
                break;
            case 'login':
                document.getElementById('login_div').style.display = 'block';
                break;
        }

        // Ocultar la pantalla de carga
        document.getElementById('loading').style.display = 'none';
    }, 1000); // 1000 milisegundos = 1 segundo


}


function registrarUsuario() {
    // Obtener los valores de los campos del formulario
    let nombres = document.getElementById("nombres").value.trim();
    let apellidos = document.getElementById("apellidos").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("pass").value.trim();
    let repetirPassword = document.getElementById("repet_pass").value.trim();
    let fechaNacimiento = document.getElementById("fecha_nacimiento").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let numeracion = document.getElementById("numeracion").value.trim();
    let comuna = document.getElementById("comuna").value;

    // Realizar las validaciones
    if (nombres === "" || apellidos === "" || username === "" || email === "" || password === "" || repetirPassword === "" || fechaNacimiento === "") {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    if (password !== repetirPassword) {
        alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        return;
    }

    if (!validatePassword(password)) {
        alert("La contraseña debe contener al menos un número, una letra mayúscula y tener una longitud entre 6 y 18 caracteres.");
        return;
    }

    // Validación de edad mínima (13 años)
    let fechaNacimientoDate = new Date(fechaNacimiento);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    let mes = hoy.getMonth() - fechaNacimientoDate.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }
    if (edad < 13) {
        alert("Debes tener al menos 13 años para registrarte.");
        return;
    }

    alert("Usuario"+nombres+' '+apellidos+" registrado correctamente.");
    limpiarFormulario();
}
function validateEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    // Utilizamos una expresión regular para validar la contraseña
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;
    return passwordRegex.test(password);
}

function limpiarFormulario() {
    // Limpiar todos los campos del formulario
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("repet_pass").value = "";
    document.getElementById("fecha_nacimiento").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("numeracion").value = "";
    document.getElementById("comuna").value = "";
}


