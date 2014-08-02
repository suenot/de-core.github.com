$(document).ready(function(){
	//select2
	// $('select.select2').select2();
	$('#logo').load('img/de-core.svg');
	$('#hide-if-svg').hide();
	// footable
	$('.footable').footable();

	$('#filter').on('propertychange change keyup paste input', function(e) {
		e.preventDefault();
		$('.footable').trigger('footable_filter', {filter: $('#filter').val()});
	});
});