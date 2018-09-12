$(function() {

	$.ajax({
	  type: 'GET',	
	  url: 'data.json',
	  success: function(data) {
	  	// var temp = $.parseJSON(data);
	    console.log(data);
	  }
	});

});