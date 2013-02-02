$(document).ready(function() {
	$.ajax({
		url: 'http://reddit.com/new.json',
		method: 'GET',
		dataType: 'jsonp',
		done: function(a) {
			console.log(jQuery.parseJSON(a));
		}
	});
});
