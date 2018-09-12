$(document).ready(function() {

	$.ajax({
	  url: "data.json",
	  // dataType: "html",
	  success: function(data) {	  	
	    console.log(JSON.parse(data));
	  }
	});

});