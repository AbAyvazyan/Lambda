$(document).ready(function() {

  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });

    var navbar = $(".navbar");
    $(window).scroll(function() {
      var topPos = $(this).scrollTop();
      if (topPos > 30) {
        $(navbar).css({"background-color": "#000000af"});
        $(".lambdaimg").attr("src","./images/logo.png");
        $(".hda").css({"color": "gold"});
        $(".fixed").css("display","block");
        $(".sec1animateimg").animate({'right': "100"},3000);
        $(".spbutt").css({"color": "white"});
      } else {
        $(navbar).css("background-color", "#00000023");
        $(".lambdaimg").attr("src","../images/header-logo.png");
        $(".hda").css({"color": "white"});
        $(".fixed").css("display","none");
        $(".spbutt").css({"color": "black"});
      }
    })
    
    

    $(".fixed").click(function() {
        $("html").animate({ scrollTop: 0 }, 1500);              
       });

       $("#hdbutton2").click(function() {
        $('html, body').animate({
            scrollTop: $(".section3").offset().top
        }, 1500);
    });

    $("#hdbutton1").click(function() {
      $('html, body').animate({
          scrollTop: $(".section5").offset().top
      }, 1500);
  });



    $( window ).scroll(function() {
	
      if($(this).scrollTop()> 3000){
      $( ".nkar2" ).animate({ "left": "0" }, "slow" );
      $( ".nkar3" ).animate({ "left": "0" }, "slow" );
    }
    
    
    if($(this).scrollTop()> 200){
      $( ".nkar1" ).parent().animate({ "left": "0" }, "slow" );
    }
    
    });


//////////////////////////////////////////////////////// javascript ////////////////////////////////////////
////                                                                                                    ////
////                                                                                                    ////
////                                                                                                    ////
////                           // var butt = document.getElementById("fixed");                          ////
////                                                                                                    ////
////                           // butt.onclick = function () {                                          ////
////                           //     document.body.scrollTop = 0;                                      ////
////                           //     document.documentElement.scrollTop = 0;                           ////
////                           // }                                                                     ////
////                                                                                                    ////
////                                                                                                    ////
////////////////////////////////////////////////////////////////////////////////////////////////////////////



$('#btnValidate').click(function(e) {
  e.preventDefault();

  var last_name = $('#txt').val();  
  var data= $("#dp1561226954396").val();
  var dateformat = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;


  if (last_name.length < 1&& !dateformat.test($('#dp1561226954396').val())){
    $('#txt').next().remove()
    $('#txt').after('<span class="error">This field is required</span>');
    $('#dp1561226954396').next().remove()
    $('#dp1561226954396').after('<span class="error">Invalid date format!</span>');
  }else{
    document.getElementById("txt").value="";
    document.getElementById("dp1561226954396").value="";
    document.getElementById("firstselect").value="18:00";
    document.getElementById("secondselect").value="1";
    $('#txt').next().remove();
    $('#dp1561226954396').next().remove();
    var  conf = confirm("Are you sure that you want to order a table");
      conf;
      if (conf==true) {
        alert("Your order accepted");
      }else{
        alert("you canceled your order");
      }
  } 
  }
)

})