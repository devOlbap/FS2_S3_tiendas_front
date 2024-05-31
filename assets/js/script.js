
//Clase Usuario
class Usuario {
    constructor(
        nombres, 
        apellidos,
        correo, 
        id_rol,
        username,
        pass,
        fecha_nac,
        calle,
        numeracion,
        comuna

    ) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.username = username;
        this.correo = correo;
        this.id_rol = id_rol;
        this.pass = pass;
        this.fecha_nacimiento = fecha_nac;
        this.calle = calle;
        this.numeracion = numeracion;
        this.comuna = comuna;
    }
}

//clase Rol
class Rol {
    constructor(id,descripcion){
        this.id = id;
        this.descripcion = descripcion;
    }
}

//usuarios.push(usuario);
//usuarios.forEach(usuario => { console.log(usuario.username)})





$(document).ready(()=>{

    let usuarios = [];

    let admin = new Usuario(
        'Pablo F.', 
        'Garrido Cid',
        'pa.garrido.cid@gmail.com', 
        1,
        'admin',
        'Pass1010!',
        '04-06-1999',
        '',
        '',
        ''
    );
    let usuario = new Usuario(
        'Javier', 
        'Gonzalez',
        'j.gonzalez@gmail.com', 
        2,
        'javierito',
        'Javierito123',
        '01-01-2000',
        'El manzano',
        '338',
        'Las Condes'
    );
    let cliente = new Usuario(
        'Paulina', 
        'Pinto',
        'p.pinto@gmail.com', 
        3,
        'pauli',
        'Pauli123',
        '01-01-2000',
        '',
        '',
        ''
    );

    usuarios.push(admin);
    usuarios.push(usuario);
    usuarios.push(cliente);


    usuarios.forEach(usuario=>{
        console.log(usuario.nombres+' '+usuario.apellidos);
    })


    $('#home').css('display', 'none');
    $('#product').css('display', 'none');
    $('#shoplist').css('display', 'none');
    $('#nav_user').css('display', 'none');
})








function mostrar(element){
    // Mostrar la pantalla de carga
    $('#loading').css('display', 'flex');

    // Simular un retardo para la carga (por ejemplo, 1 segundo)
    setTimeout(function() {
        // Ocultar todos los artículos
        $('#home_div').css('display', 'none');
        $('#products_div').css('display', 'none');
        $('#user_form_div').css('display', 'none');
        $('#carrito_div').css('display', 'none');
        $('#login_div').css('display', 'none');


        
        // Mostrar el artículo correspondiente
        switch (element.id) {
            case 'home':
                $('#home_div').css('display','block');
                break;
            case 'product':
                $('#products_div').css('display','block');
                break;
            case 'contact':
                $('#user_form_div').css('display','block');
                break;
            case 'shoplist':
                $('#carrito_div').css('display','block');
                break;
            case 'login':
                $('#login_div').css('display','block');
                break;
        }

        // Ocultar la pantalla de carga
        $('#loading').css('display', 'none');
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
    $("#nombres").val('');
    $("#apellidos").val('');
    $("#username").val('');
    $("#email").val('');
    $("#pass").val('');
    $("#repet_pass").val('');
    $("#fecha_nacimiento").val('');
    $("#direccion").val('');
    $("#numeracion").val('');
    $("#comuna").val('');
}



function accederUsuario(){
    let username = document.getElementById('username_login').value;
    let pass = document.getElementById('pass_login').value;

    if(!username || !pass){
        let msje = !username?'un nombre de usuario' : 'una contraseña';
        alert('Error: Falta indicar '+msje+'.');
        return
    }
    /**
     * tenemos que preguntar si el username existe en nuestro array de usuarios.
     */

}







