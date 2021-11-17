// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Europe") {
         $("#feedback").css("color","#083057","200%");
         $("#feedback").html("You can use Ctrl+d to fill the information down");
      }

      if ($(this).attr("id") == "Column") {
         $("#feedback").css("color","#083057");
         $("#feedback").html("You can use Ctrl+Space to select a whole column");
      }

      if ($(this).attr("id") == "Row") {
         $("#feedback").css("color","#083057");
         $("#feedback").html("You can use Shift+Space to select an entire row");
      }
 if ($(this).attr("id") == "All") {
         $("#feedback").css("color","#083057");
         $("#feedback").html("You can use Ctrl+f to find any information you need");
      }
  $("#feedback").css("backgroundColor","#FF8201");
	   $('#myModal').modal("show");

   });
}); //end main jQuery function
