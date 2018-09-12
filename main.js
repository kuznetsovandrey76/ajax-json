$(function() {

	$.ajax({
	  type: 'GET',	
	  url: 'data.txt',
	  success: function() {
	    console.log('ok');
	  }
	});

});