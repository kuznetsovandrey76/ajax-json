$(function() {

	$.ajax({
	  type: 'GET',	
	  url: 'data.txt',
	  success: function(data) {
	    // test phone		  
	    alert(data);
	  }
	});

});
