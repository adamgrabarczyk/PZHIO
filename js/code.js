



$changeLink = $(document).ready(function () {

    $('#content').load('content/index.php');

$('ul#nav li a').click(function () {

   var page = $(this).attr('href');

   $('#content').load('content/' + page + '.php');

   return false;
});

});



$(document).ready(function () {



    $('.link-part').click(function () {



        var pagePart = $(this).attr('href');

        $('#content').load('content/' + pagePart + '.php');

        return false;
    });

});






if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}