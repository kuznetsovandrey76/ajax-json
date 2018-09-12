$(function() {

	$.ajax({
	  type: 'GET',	
	  url: 'data.txt',
	  success: function(data) {
	  	var temp = $.parseJSON(data);
	    console.log(temp);
	  }
	});

});