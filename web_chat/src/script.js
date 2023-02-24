
function enviar() {
  const enviado = document.createElement("mensaje");
  let texto = document.getElementById("entrada").value;
  enviado.innerHTML = texto;
  enviado.className = "enviado";
  document.getElementById("chat-bloque2").appendChild(enviado);
}

function recibir() {
  const enviado = document.createElement("mensaje");
  let texto = document.getElementById("entrada").value;
  enviado.innerHTML = texto;
  enviado.className = "recibido";
  document.getElementById("chat-bloque2").appendChild(enviado);
}