

AOS.init();

$(window).on('resize', function() {
    var win = $(this);
    if (win.width() > 600) {
  
      $('#heading').addClass('display-4');
  
    } else {
      $('#heading').removeClass('display-4');
    }
  });


function mySearch(){
  item = document.getElementById("search").value.toUpperCase();
  // window.find(item).scrollIntoView();
  
    
 }





  // setTimeout(function(){ alert("Information and Pictures belong to Wikipedia"); }, 4000);