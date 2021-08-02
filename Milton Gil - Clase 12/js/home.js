class Gasto {
  constructor(producto, costo, cuotas) {
    this.producto = producto;
    this.costo = costo;
    this.cuotas = cuotas;
    this.valorCuota = costo/cuotas;
  }
}

var listaGastos = [];

var nuevoGasto = document.createElement("div");
nuevoGasto.className = 'gasto';

var divGastos = document.getElementById("gastosIngresados");
divGastos.appendChild(nuevoGasto)

var mostrarGastos = document.getElementById('mostrarGastos');
var form = document.getElementById('form');

// Carga de gasto a través del form
// Se carga la info al LocalStorage
$("#cargaGasto").click((e) =>{
  //Utilizando Jquery para determinar respuesta a ciertos eventos (Click del submit)
  e.preventDefault();
  let producto = $('#formProducto').val();
  let costo = $('#formCosto').val();
  let cuotas = $('#formCuotas').val();
  let nuevoGasto = new Gasto (producto,costo,cuotas);
  form.reset();
  listaGastos.push(nuevoGasto);
  localStorage.setItem("Gastos", JSON.stringify(listaGastos));
});

// Se toma la info del LocalStorage y se muestra en Divs nuevos
mostrarGastos.addEventListener("click", function(){
	nuevoGasto.innerHTML="";
	
  let listaGastos = JSON.parse(localStorage.getItem("Gastos"))

  listaGastos.forEach(gasto => {
    // Creacion del nuevo div utilizando Jquery, para agregar gastos en la lista a mostrar
    $(nuevoGasto).append( `
      <div class=gasto>
        <p>Producto: ${gasto.producto}<br>
        Costo: ${gasto.costo}<br>
        Cuotas: ${gasto.cuotas}<br>
        Valor de Cada Cuota: ${gasto.valorCuota}
        </p>
      </div>`
    )
  });
});

var prueba = $('.formInput').serializeArray()