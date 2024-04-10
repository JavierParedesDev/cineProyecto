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

function validarCompra() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var quantity = document.getElementById('quantity').value;
    var movie = document.getElementById('movie').value;

    // Validar si los campos no estan vacios
    if (name.trim() === '' || email.trim() === '' || quantity.trim() === '') {

    //Alerta de sweetalert2 la cual mostrara un error cuando los campos no esten completos
        Swal.fire({
            title: 'Error',
            text: 'Por favor Complete Todos los Campos.',
            imageUrl: "img/walletriste.png",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
        return;
    }

     // Función para validar el formato del email
     function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Mostrar en una alerta si el formato del email es invalido
    if (!emailValido(email)) {
        // Alerta de sweetalert2 en caso de que el email no sea valido
        Swal.fire({
            title: 'Error',
            text: 'Por favor Ingrese un Email Valido.',
            imageUrl: "img/walletriste.png",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
        return;
    }

    // Mostrar un mensaje de compra realizada en caso que el script pase todas las validaciones.
    Swal.fire({
        title: 'Éxito',
        text: 'Compra Realizada con Éxito.',
        confirmButtonColor: '#ff0000',
        imageUrl: "img/wallecontento.png",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image"
    }).then((result) => {
        // Después de cerrar el mensaje de éxito, mostrar modal con los datos ingresados
        Swal.fire({
            title: 'Resumen de la Compra',
            html: `
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Película:</strong> ${movie}</p>
                <p><strong>Cantidad:</strong> ${quantity}</p>
            `,
            imageUrl: "img/walleyeva.png",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image",
            showCancelButton: false,
            confirmButtonText: 'Volver a la página principal',
            cancelButtonText: 'Cerrar',
            confirmButtonColor: '#ff0000',

        }).then((result) => {
            if (result.isConfirmed) {
                // Redireccionar a la página principal al hacer clic en el botón de confirmación
                window.location.href = "index.html";
            }
        });
    });
}
