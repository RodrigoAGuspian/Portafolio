function validarFormulario() {
    const nombre = document.getElementById("name").value;
    const correo = document.getElementById("email").value;
    const mensaje = document.getElementById("message").value;

    // Validación de nombre (no debe estar vacío)
    if (nombre.trim() === "") {
      alert("Por favor, ingresa tu nombre.");
      return;
    }

    // Validación de correo electrónico (debe tener un formato válido)
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Validación de mensaje (no debe estar vacío)
    if (mensaje.trim() === "") {
      alert("Por favor, ingresa un mensaje.");
      return;
    }

    // Si todas las validaciones pasan, puedes enviar el formulario aquí
    alert("Formulario válido. Se enviará a continuación.");
}