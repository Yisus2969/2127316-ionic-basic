
    
    var monto = document.getElementById("Monto");
    var articulo = document.getElementById("Articulo");
    var lista = document.getElementById("lista");
    var parrafoTotal = document.querySelector("p");
    var total = 0;
    
function imprimirCosastotal(){
    
    var articuloValue = articulo.value;
    var montoValue = monto.value;
  
    if (montoValue !=='' && articuloValue!== ''){
        total = total + parseFloat(montoValue);
        var elemento = document.createElement("li");
        elemento.innerHTML = `${articuloValue} ...........$${montoValue}`
        lista.appendChild(elemento);
        parrafoTotal.innerHTML = `Total: <strong>${total}</strong>`
        document.getElementById("Articulo").value ='';
        document.getElementById("Monto").value =''
    }
   
    

}

