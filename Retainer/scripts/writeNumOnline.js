function startWriteNumOnline(){
    setInterval( function() {
        // var task = gup('task') ? gup('task') : "default";
        var task = $("#taskSession").val();
            $.ajax({
                url: "Retainer/php/ajax_whosonline.php",
                type: "POST",
                data: {task: task, role: "trigger", accessKey: $("#accessKey").val(), secretKey: $("#secretKey").val()},
                dataType: "text",
                success: function(d) {
                    //
                    // document.getElementById("numOnline").innerHTML= "There are " + d + " worker(s) online for this task";
                    $("#numOnline").text(d);
                },
            fail: function() {
                alert("setOnline failed!")
            },
        });
    }, 1000);
}