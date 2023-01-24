$(document).ready(function(){
	$('#image1').show();
	$('#image2').hide();
	$('#image3').hide();
	$('#image4').hide();

	$('#imageone span').addClass('line');


	// if click on ticket
	$('#image2').click(function(){
		$('#image1').hide();
	    $('#image2').show();
	    $('#image3').hide();
	    $('#image4').hide();


	    $('#imageone span').removeClass('line');
	    $('#imagetow span').addClass('line');
	    $('#imagethere span').removeClass('line');
	    $('#imagefor span').removeClass('line');
	});
	// if click on place
	$('#image3').click(function(){
		$('#image1').hide();
	    $('#image2').hide();
	    $('#image3').show();
	    $('#image4').hide();


	    $('#imageone span').removeClass('line');
	    $('#imagetow span').removeClass('line');
	    $('#imagethere span').addClass('line');
	    $('#imagefor span').removeClass('line');
	});
	// if click on place
	$('#image4').click(function(){
		$('#image1').hide();
	    $('#image2').hide();
	    $('#image3').hide();
	    $('#image4').show();


	    $('#imageone span').removeClass('line');
	    $('#imagetow span').removeClass('line');
	    $('#imagethere span').removeClass('line');
	    $('#imagefor span').addClass('line');
	});
  	// if click on place
	$('#image1').click(function(){
		$('#image1').show();
	    $('#image2').hide();
	    $('#image3').hide();
	    $('#image4').hide();


	    $('#imageone span').addClass('line');
	    $('#imagetow span').removeClass('line');
	    $('#imagethere span').removeClass('line');
	    $('#imagefor span').removeClass('line');
	});

});