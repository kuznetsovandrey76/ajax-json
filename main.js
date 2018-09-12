$(function() {

	$.ajax({
	  type: 'GET',	
	  url: 'data.txt',
	  success: function(data) {
	    console.log(data);
	  	var temp = JSON.parse(data)
	    console.log(temp);
	  }
	});

});