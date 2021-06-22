var menu = document.getElementById('menu');
var size = document.getElementById('data');
function popup(){
    if(menu.style.display === "flex"){
        menu.style.display = "none"
        size.style.width = "95%"
        size.style.marginLeft = "5%"
    }else{
        menu.style.display = "flex"
    }
}