var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Botón que activó el modal
  var button = event.relatedTarget
  // Extraer información de los atributos data-bs-*
  var recipient = button.getAttribute('data-bs-whatever')
  // Si es necesario, puedes iniciar una solicitud AJAX aquí
  // y luego realiza la actualización en una devolución de llamada.
  //
  // Actualizar el contenido del modal.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'Transportes ' + recipient
  modalBodyInput.value = recipient
})
var exampleModa2 = document.getElementById('exampleModa2')
exampleModa2.addEventListener('show.bs.modal', function (event) {
  // Botón que activó el modal
  var button = event.relatedTarget
  // Extraer información de los atributos data-bs-*
  var recipient = button.getAttribute('data-bs-whatever')
  // Si es necesario, puedes iniciar una solicitud AJAX aquí
  // y luego realiza la actualización en una devolución de llamada.
  //
  // Actualizar el contenido del modal.
  var modalTitle = exampleModa2.querySelector('.modal-title')
  var modalBodyInput = exampleModa2.querySelector('.modal-body input')

  modalTitle.textContent = 'Hospedajes ' + recipient
  modalBodyInput.value = recipient
})