let numero = 0;
function agregar(nombreProducto){
    swal({
        title: nombreProducto ,
        text: "Ingrese la cantidad que desea agregar:",
        content: {
            element: "input",
            attributes: {
                type: "number",
                id: "cantidadInput",
                min: "1",
                value: "1"
            },
        },
        buttons: {
            cancel: "Cancelar",
            confirm: {
                text: "Aceptar",
                value: true,
                visible: true,
                className: "swal-button--confirm",
                closeModal: false
            }
        }
    })
    .then((value) => {
        if (value) {
            let cantidad = parseInt(document.getElementById('cantidadInput').value);
            numero += cantidad;
            document.getElementById('labelNumero').innerText = numero;
            swal("Producto(s) agregado(s) correctamente.", {
                icon: "success",
            });
        }
    });
    ;};