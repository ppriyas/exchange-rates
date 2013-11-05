$(function(){
	$('#result').remove();
	
// open exchange api key
// 8ff908b6ac944637ae64d7a02f88a57f
	
	var newBase = '';
	var exchange = '';
	var newBaseRate = 0;
	var exchangeRate = 0;
	var finalRate = 0;
	//Get the list of currencies
	// Use jQuery.ajax to get the latest exchange rates, with JSONP:
	$.ajax({
		url: 'http://openexchangerates.org/api/currencies.json?app_id=8ff908b6ac944637ae64d7a02f88a57f',
		dataType: 'jsonp',
		success: function(json) {
			// Rates are in `json.rates`
			// Base currency (USD) is `json.base`
			console.log(json);
			//FKP: "Falkland Islands Pound"
			//GBP: "British Pound Sterling"                                          
			
			$.each( json, function( key, val ) {
				$(".currencies").append("<option value='"+key+"'>"+val+", "+key+"</option>");				
			});
			
		}
	});
	

	$('#submit').click(function(e){
		e.preventDefault();
		newBase = $('#base-currency').val();
		exchange = $('#exchange-currency').val();
		$('#result').remove();
		//console.log("base is: "+newBase+", exchange is: "+exchange);
		$.ajax({
			url: 'http://openexchangerates.org/api/latest.json?app_id=8ff908b6ac944637ae64d7a02f88a57f',
			dataType: 'jsonp',
			success: function(json) {
				console.log("the latest ajax call was successful");
				$.each( json.rates, function( key, val ) {
					if (key == newBase)
						newBaseRate = val;
					if (key == exchange)
						exchangeRate = val;
					//console.log("rate key is: "+key+", rate value is: "+val);						
				});					
				
				finalRate = (1/newBaseRate) * exchangeRate;
				console.log("final rate is: "+finalRate);
				$("body").append("<div id='result'><h2>Exchange rate is: "+finalRate+"</h2></div>");				
			}
		});
	});

});
