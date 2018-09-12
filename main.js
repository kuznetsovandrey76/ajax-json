$(document).ready(function() {

	$.ajax({
	  url: "data.json",
	  dataType: "json",
	  success: function(data) {	  	
	    console.log(JSON.parse(data));
	  }
	});

});