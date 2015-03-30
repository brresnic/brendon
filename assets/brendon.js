$( document ).ready(function() {
	$('#cv p').hide();
    $('#splash-img').fadeIn(450);
    $('#category-wrapper').fadeIn(1150);
    console.log('asdf');

    var open = false;
    $('#cv').click(function(){
    	if(open){
	    	$('#cv p').hide('1000');
	    	open = false;
    	}
    	else{
	    	$('#cv p').show('1000');
	    	open = true;
    	}
    });
});