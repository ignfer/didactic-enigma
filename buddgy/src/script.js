function sumar(){
  let DOM_entrada = document.getElementById("entrada");
  let cantidad = DOM_entrada.value;
  monto += cantidad;
  let DOM_monto = document.getElementById("div_monto");
  alert(monto);
  //DOM_monto.value = monto;
}

function restar(){
  monto -= cantidad;
}