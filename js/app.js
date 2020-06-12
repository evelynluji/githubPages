
document.querySeletor(`#generar-nombre`).addEventlistener(`submit`, cargarNombres);

//Llamado 
function cargarNombres(e) {
    e.preventDefault();

    const origen = document.getElementById(`origen`);
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById(`genero`);
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    
    const cantidad = document.getElementById(`value`),value;

    let url = '';
    url += 'http://uiname.com/api/?';

    if(origenSeleccionado !==''){
        url +='region=${origenSeleccionado}&';
    }
    if(origenSeleccionado !==''){
        url +='gender=${origenSeleccionado}&';    
    }
    if(cantidad !==''){
        url +='amount=${cantidad}&';      
    }
    const xhr =new XMLHttpRequest(); 
    xhr.open('GET',url,true);

    xhr.onload = function(){
        if(this.status === 200){
            const nombres =JSON.parse( this.responseText  ) ;

            let htmlNombres = '<h2>Nombres Generados </h2>';
            htmlNombres += '<ul class="Lista">';

            nombres.forEach(function(nombre){
                htmlNombres += `
                         <li>${nombre,name}
                `;
            })
            hmltNombres += '<ul>';
            document.getElementById('resultado').innerHTML = hmltNombres;
        }
    } 
    xhr.send();
}
  