$("#mostrarPokemon").click((e) => {
  $.ajax({
    url: "./listadoPokemon.json",
    success: function(listadoPokemon) {
      listadoPokemon.forEach (p => $("#divPokes").append("<p>Nombre: " + p.name + "</p>"));
    }
  })
})