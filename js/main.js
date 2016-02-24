$(document).ready(function(){
	
$('#submit-btn').click(function(event) {
		event.preventDefault();
		
		var city = $('#city-type').val();

		if (city == 'nyc' || city == 'new york city' || city == 'new york') {
			$('body').removeClass();
			$('body').addClass('nyc');
			$('#city-type').val('');

		}
	
		else if (city == 'sf' || city == 'sanfransico' || city == 'sanfran') {
			$('body').removeClass();
			$('body').addClass('sf');
			$('#city-type').val(''); 
		}

		else if (city == 'LA' || city == 'Losangeles' || city == 'la') {
			$('body').removeClass();
			$('body').addClass('la');
			$('#city-type').val(''); 
		}	

		else if (city == 'Austin' || city == 'austin' || city == 'AUSTIN') {
			$('body').removeClass();
			$('body').addClass('austin');
			$('#city-type').val(''); 

		}

		else if (city == 'syd' || city == 'sydney' || city == 'Sydney') {
			$('body').removeClass();
			$('body').addClass('sydney');
			$('#city-type').val(''); 
		}


	});

	});




