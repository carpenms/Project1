$(document).ready(function() { // do this when the document is loaded
	$("#charts").show(); // show the element with ID "element"
	$("#calc, #temp").hide(); // hide the element with ID "otherElement"
});

$("#bcalc").click(function() { // when "button_id" is clicked
	$("#calc").show(); // show element
	$("#charts, #temp").hide();	// hide other elements
});

$("#bcharts").click(function() { // when "button_id" is clicked
	$("#charts").show(); // show element
	$("#calc, #temp").hide();	// hide other elements
});

$("#btemp").click(function() { // when "button_id" is clicked
	$("#temp").show(); // show element
	$("#charts, #calc").hide();	// hide other elements
});
