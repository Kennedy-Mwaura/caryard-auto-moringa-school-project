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

var count = document.querySelectorAll(".anim");
var rec = document.querySelector(".rec");

count.forEach((anim) => {
  anim.innerHTML = "0";

  const update = function(){
    var target = anim.getAttribute('data-target');
    var no = +anim.innerHTML;
    var incr =target/300;
    if(no<target){
      var fun = function(){  
      return no+incr;
      };
      anim.innerHTML = Math.ceil(fun());
      setTimeout(update,2)
    }
  }
  update();
});
