function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Codigo para validar el ingreso de un correo electronico el cual debe tener
    // si o si los caracteres @ y el punto
    if (email.trim() === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        Swal.fire({
            title: 'Error de validación',
            text: 'Por favor, ingrese un correo electrónico válido (Debe poseer "@" y ".").',
            confirmButtonColor: '#ff0000',
            imageUrl: "img/wall-e.png",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"

        });
        return false;
    }

    // Codigo para validar el ingreso de una contraseña donde el recuadro no puede quedar vacio
    if (password.trim() === "") {
        Swal.fire({

            title: 'Error de validación',
            text: 'Por favor, ingrese su contraseña.',
            confirmButtonColor: '#ff0000',
            imageUrl: "img/wall-e.png",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"

        });
        return false;
    }

    // Si ambos campos están validados, puedes proceder con el envío del formulario
    return true;
}
