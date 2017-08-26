$(document).ready(function() {
    var $grooves = $("#grooves");

    // Add random grooving
    for (counter = start; counter < end; counter += (increment + random(variance))) {
        $("<div/>")
            .addClass("groove round centered")
            .width(counter)
            .height(counter)
            .appendTo($grooves);
    }

    // Add wider grooving for track breaks
    for (var track in tracks) {
        var size = start + ((end - start) * tracks[track]);

        $("<div/>")
            .addClass("groove round centered trackGroove")
            .width(size)
            .height(size)
            .appendTo($grooves);
    }

    // Set the album-art label
    $("#label").css("background-image", "url(" + covers[random(covers.length - 1)] + ")");
});


var
    counter   = 0,
    start     = $("#label" ).width() * 1.15,
    end       = $("#record").width() * 0.96,
    increment = 6,
    variance  = 3,
    tracks    = [0.1, 0.33, 0.42, 0.56, 0.78, 0.94],
    covers = [
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/21032445_1366147526767250_802216412382799191_n.jpg?oh=94061a8394239a4481f4aa7739254797&oe=5A28DE95"
        ];


function random(n) {
    var r = (Math.round(Math.random() * n))
    return r;
}