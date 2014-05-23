function getHits(task){
	var hits;

	$.ajax({
	    url: "Retainer/php/getHits.php",
	    type: "POST",
	    async: false,
	    data: {task: task, useSandbox: sandbox},
	    dataType: "json",
	    success: function(d) {
	        hits = d;
	    },
	    fail: function() {
	        alert("Sending number of workers failed");
	    }
	});

	return hits;
}

function approveHit(assignmentId, hitId, id){
	$.ajax({
	    url: "Retainer/php/approveOrRejectHit.php",
	    type: "POST",
	    async: false,
	    data: {id: assignmentId, operation: "Approve", useSandbox: sandbox},
	    success: function(d) {
	        // alert(d);
	    },
	    fail: function() {
	        alert("Sending number of workers failed");
	    }
	});

	replaceWithDisposeButton(hitId, id);
	
}

function rejectHit(assignmentId, hitId, id){
	$.ajax({
	    url: "Retainer/php/approveOrRejectHit.php",
	    type: "POST",
	    async: false,
	    data: {id: assignmentId, operation: "Reject", useSandbox: sandbox},
	    success: function(d) {
	        // alert(d);
	    },
	    fail: function() {
	        alert("Sending number of workers failed");
	    }
	});

	replaceWithDisposeButton(hitId, id);
}

function disposeHit(hitId, id){
	$.ajax({
	    url: "Retainer/php/approveOrRejectHit.php",
	    type: "POST",
	    async: false,
	    data: {id: hitId, operation: "Dispose", useSandbox: sandbox},
	    success: function(d) {
	        $(id).remove();
	    },
	    fail: function() {
	        alert("Sending number of workers failed");
	    }
	});

	$("#" + id).fadeOut( function() { $(this).remove(); });


}

function replaceWithDisposeButton(hitId, id){
	$("#" + id + " .approveButton," + " #" + id + " .rejectButton").remove();
	$("#" + id).append("<button type='button' onclick = 'disposeHit(&quot;" + hitId + "&quot;, &quot;" + id + "&quot;)' class='disposeButton btn btn-warning btn-sm'>Dispose</button>");

}



