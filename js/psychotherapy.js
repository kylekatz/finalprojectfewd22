// Read more button code from Edd Yerburgh's Pen Read More/ Read Less Button on Codepen
$(function(){
	$('.reveal_more').click(function(){
		$('.box').hide();
		       
        $(this).text(function(_, val){
            return val == "Read More" ? "Read Less" : "Read More"
     });
        
        $('#item-'+$(this).attr('target')).toggle($(this).text() == "Read Less");
        
	}); 
}); 