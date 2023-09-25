document. addEventListener ( 'DOMContentLoaded', function(){
    
    const contenedorMenu =document.getElementById("MenuI")
    const menuHTML = GenerarMenuI();
    
    contenedorMenu.innerHTML= menuHTML;
})