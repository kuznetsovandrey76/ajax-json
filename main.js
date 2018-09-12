$(function() {

	$.ajax({
	  type: 'GET',	
	  url: 'data.txt',
	  success: function(data) {
	    console.log(JSON.parse(data));
	  }
	});

});