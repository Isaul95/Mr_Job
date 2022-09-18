


/* ---------------------------- limpia cuando se cierra Modal --------------------------- */
$("#ModalAgregarDetalleCliente").on("hide.bs.modal", function (e) {
    $("#resetDetalles")[0].reset();
});

