//////WAIT UNTIL PAGE LOADS/////
$(document).ready(function(){
	///////ON BUTTON CLICK TOGGLE CLASS
    $("button").click(function(){
    	$("body").toggleClass("theme normal");
    	//////CONSOLE LOG TO CHECK WHAT CLASS IS APPLIED
        // console.log($("body").attr("class"));
        ////REPLACE HEADLINE AND GO BACK TO ORIGINAL HEADLINE
        $( ".theme h1" ).replaceWith( "<h1>Captain Susan B. Hagen, Starship Intrepid</h1>" );
        $( ".normal h1" ).replaceWith( "<h1>Susan B. Hagen, MA, MEd Counseling Services</h1>" );
        /////CHANGE HEADER IMAGE AND CHANGE IT BACK
        $(".theme .headerpic").attr("src", "images/starfleetsm.jpeg");
        $(".normal .headerpic").attr("src", "images/susan1.png");
        /////CHANGE THIRD BUTTON TO CAPTAIN'S LOG
		$('.theme .butt:contains("Keynote and Speaking")').text("Captain's Log");
		$('.normal .butt:contains("Captain\'s Log")').text("Keynote and Speaking");
        // CODE SEEMS REPETITIVE. REFACTOR?
	});
});

