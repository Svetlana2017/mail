;$(document).ready(function() {

	$('.menu-trigger').click(function() {
		$('.menu').slideToggle(500);     
    });
     $(window).resize(function() {
      if ($(window).width()>835){
    	 $('.menu').removeAttr('style');
       }
    });
	
    var menu = $('.menu-trigger');

    menu.click(function(){
        menu.toggleClass('menu-trigger_active');
    });
    $menu.click(function(){   
       menu.removeClass('menu-trigger_active');
    });
    $(document).mouseup(function(){
       menu.removeClass('menu-trigger_active');
    });  

    $(window).resize(function() {
      if ($(window).width()>835){
    	 $('.menu').removeAttr('style');
       }
    });
    
});

//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! Ваша заявка отправлена");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});



	
   

