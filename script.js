let cuentas = [
  { nombre: "Juan", saldo: 200 },
  { nombre: "Maria", saldo: 290 },
  { nombre: "Santiago", saldo: 100 }
];

let cuentaSeleccionada = -1;
let saldoActual = 0;


function seleccionarCuenta(event) {
  cuentaSeleccionada = event;
  document.getElementById("cuentas-container").style.display = "none";
  document.getElementById("operaciones-container").style.display = "block";
}

function ingresar() {
  let passwordInput = document.getElementById("password-input").value;
  let cuenta = cuentas[cuentaSeleccionada];
  
  if (passwordInput === "1234") {
    saldoActual = cuenta.saldo;
    document.getElementById("opciones-container").style.display = "block";
    document.getElementById("operaciones-container").style.display = "none";
    
  } else {
    alert("Contraseña incorrecta. Inténtalo nuevamente.");
  }
}

function consultarSaldo() {
  alert("El saldo actual es: $" + saldoActual);
}

function ingresarMonto() {
  let monto = prompt("Ingrese el monto a ingresar:");
  
  if (monto) {
    monto = parseInt(monto);
    
    if (monto >= 10 && monto <= 990) {
      saldoActual += monto;
      alert("Monto ingresado: $" + monto + "\nNuevo saldo: $" + saldoActual);
    } else {
      alert("Monto inválido. Debe ser mayor o igual a $10 y menor o igual a $990.");
    }
  }
}

function retirarMonto() {
  let monto = prompt("Ingrese el monto a retirar:");
  
  if (monto) {
    monto = parseInt(monto);
    
    if (monto >= 10 && monto <= 990 && monto <= saldoActual) {
      saldoActual -= monto;
      alert("Monto retirado: $" + monto + "\nNuevo saldo: $" + saldoActual);
    } else {
      alert("Monto inválido o saldo insuficiente.");
    }
  }
} 

function botonRegresar(){
  document.getElementById("cuentas-container").style.display = "block";
  document.getElementById("opciones-container").style.display = "none";
  document.getElementById("operaciones-container").style.display = "none";
}
