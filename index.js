function abrirmenu(){
    let BarraMenu = document.getElementById('barra-menu');
    if(BarraMenu.style.width == "0px"){
        BarraMenu.style.width = "400px";
    }else{
        BarraMenu.style.width = "0px";
    }
}