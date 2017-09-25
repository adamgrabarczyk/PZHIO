
window.onload = function () {

    var dropDownButton = document.getElementsByClassName("dropdown");

    dropDownButton.onclick = function (e) {

        e.preventDefault();

    }



//     var galleryButton = document.getElementById("gallery");
//
// // var x = location.href="Project's"
//
//     galleryButton.onclick = function () {
//
//
//
//     }


    $("#gallery").change(function()
    {
        document.location.href = $(this).val();
    });

}