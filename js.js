var i=0;/*current page*/ 
var j=5;/*total pages*/ 
 
$(document).ready(function(){ 
    $(".button-next").click(function(){ 
        $(".page-"+(i+1)).hide(); 
        i = (j + i + 1) % j; 
        $(".page-"+(i+1)).show(); 
    }); 
    $(".button-prev").click(function(){ 
        $(".page-"+(i+1)).hide(); 
        i = (j + i - 1) % j; 
        $(".page-"+(i+1)).show(); 
    }); 
});

function myFunction() { document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}