// function for getting URL parameters
function gup(name) {
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if(results == null)
		return "";
	else
		return unescape(results[1]);
}

$(document).ready(function () {
	// is assigntmentId is a URL parameter
	if((aid = gup("assignmentId"))!="" && aid != "ASSIGNMENT_ID_NOT_AVAILABLE") {

		setInterval( function() {
			var worker = gup("workerId");
			var task = gup('task') ? gup('task') : "default";
			$.ajax({
				url: "LegionTools/Retainer/php/ajax_whosconnected.php",
				data: {task: task, worker: worker, role: "crowd"},
				dataType: "text",
				success: function(d) {
					//
				},
				fail: function() {
					//alert("setOnline failed!")
				},
			});
		}, 3000);
	}
});