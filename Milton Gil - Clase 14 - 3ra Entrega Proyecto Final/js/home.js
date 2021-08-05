class Gasto {
  constructor(medioDePago, tienda, categoria, fecha, producto, costo, cuotas) {
    this.medioDePago = medioDePago;
    this.tienda = tienda;
    this.categoria = categoria;
    this.producto = producto;
    this.costo = costo;
    this.cuotas = cuotas;
    this.valorCuota = costo / cuotas;
  }
}

var listaGastos = [];

var nuevoGasto = document.createElement("div");
nuevoGasto.className = "gasto";

var divGastos = document.getElementById("gastosIngresados");
divGastos.appendChild(nuevoGasto);

var mostrarGastos = document.getElementById("mostrarGastos");
var form = document.getElementById("form");

// Carga de gasto a través del form
// Se carga la info al LocalStorage
$("#cargaGasto").click(function (e) {
  //Utilizando Jquery para determinar respuesta a ciertos eventos (Click del submit)
  e.preventDefault();
  let medioDePago = $("#formMedioDePago").val();
  let categoria = $("#formCategoria").val();
  let tienda = $("#formTienda").val();
  let producto = $("#formProducto").val();
  let costo = $("#formCosto").val();
  let cuotas = $("#formCuotas").val();
  let nuevoGasto = new Gasto(
    medioDePago,
    tienda,
    categoria,
    producto,
    costo,
    cuotas
  );
  form.reset();
  listaGastos.push(nuevoGasto);
  localStorage.setItem("Gastos", JSON.stringify(listaGastos));
});

// Se toma la info del LocalStorage y se muestra en Divs nuevos
mostrarGastos.addEventListener("click", function (e) {
  e.preventDefault();
  nuevoGasto.innerHTML = "";

  let listaGastos = JSON.parse(localStorage.getItem("Gastos"));

  listaGastos.forEach((gasto) => {
    agregarATabla = `<tr><td>${gasto.medioDePago}</td>
  <td>${gasto.tienda}</td>
  <td>${gasto.categoria}</td>
  <td>${gasto.producto}</td>
  <td>${gasto.costo}</td>
  <td>${gasto.cuotas}</td>
  <td>${gasto.valorCuota}</td></tr>`;
    tBody = $("table tbody");
    tBody.append(agregarATabla);
    // Creacion del nuevo div utilizando Jquery, para agregar gastos en la lista a mostrar
    // $(nuevoGasto).append(
    //   `
    //   <tr>
    //     <td>${gasto.medioDePago}</td>
    //     <td>${gasto.tienda}</td>
    //     <td>${gasto.categoria}</td>
    //     <td>${gasto.producto}</td>
    //     <td>${gasto.costo}</td>
    //     <td>${gasto.cuotas}</td>
    //     <td>${gasto.valorCuota}</td>
    //   </tr>
    //   `
    // `
    // <div class=gasto>
    //   <p>Medio de Pago: ${gasto.medioDePago}<br>
    //   Tienda: ${gasto.tienda}<br>
    //   Categoria: ${gasto.categoria}<br>
    //   Producto: ${gasto.producto}<br>
    //   Costo: ${gasto.costo}<br>
    //   Cuotas: ${gasto.cuotas}<br>
    //   Valor de Cada Cuota: ${gasto.valorCuota}
    //   </p>
    // </div>`
  });
});

// $(document).ready(function () {
//   $("#mostrarGastos").click(function () {
//     markup = `<tr><td> + <td>${gasto.medioDePago}</td>
//     <td>${gasto.tienda}</td>
//     <td>${gasto.categoria}</td>
//     <td>${gasto.producto}</td>
//     <td>${gasto.costo}</td>
//     <td>${gasto.cuotas}</td>
//     <td>${gasto.valorCuota}</td> + </td></tr>`;
//     tableBody = $("table tbody");
//     tableBody.append(markup);
//   });
// });
