var Tablinks = document.getElementsByClassName("Tabla-Links");
var tabcontents = document.getElementsByClassName("Tabla-Contenido");

function opentab(tabname){
    for(Tablink of Tablinks){
        Tablink.classList.remove("Link-Activo");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("Tabla-Activa");
    }
    event.currentTarget.classList.add("Link-Activo");
    document.getElementById(tabname).classList.add("Tabla-Activa");
}