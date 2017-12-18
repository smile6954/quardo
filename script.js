$('.menuToggle').click(function(){
       $('.main__navbar').slideToggle(300, function(){
       	if($(this).css('display') === 'none'){
       		$(this).removeAttr('style');
       	}
       });

    });