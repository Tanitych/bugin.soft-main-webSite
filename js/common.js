$(document).ready(function () {

    $('.call-menu').click(function(){
        $(this).toggleClass('open');
        $('.menuBox').toggleClass('menu-show');
        $('body').toggleClass('scroll-locked');
        $('.menu').toggleClass('menu-hide');
    });
    $('.call-video').click(function(){
        $('.videoBox').addClass('menu-show');
    });
    $('.close-video').click(function(){
        $('.videoBox').removeClass('menu-show');
    });
    $('.add-order').on('click', function (e) {
        e.preventDefault();
        $('.modal-order').addClass('showed');
        $('.overlay').addClass('showed');
    });

    $('.call-search').on('click', function () {
        $('.searchCover').addClass('search-show');
    });
    $('.close-search').on('click', function () {
        $('.searchCover').removeClass('search-show');
    });

    $('.table-responsive-stack').find("th").each(function (i) {

        $('.table-responsive-stack  td:nth-child(' + (i + 1) + ')').prepend(
            '<h4 class="table-responsive-stack-thead">'+ $(this).find('h4').text() + '</h4>' +
            '<span>' + $(this).find('span').text() + '</span>');
        $('.table-responsive-stack-thead').hide();
    });


    $( '.table-responsive-stack' ).each(function() {
        var thCount = $(this).find("th").length;
        var rowGrow = 100 / thCount + '%';
        //console.log(rowGrow);
        $(this).find("th, td").css('flex-basis', rowGrow);
    });




    function flexTable(){
        if ($(window).width() < 768) {

            $(".table-responsive-stack").each(function (i) {
                $(this).find(".table-responsive-stack-thead").show();
                $(this).find('thead').hide();
            });


            // window is less than 768px
        } else {


            $(".table-responsive-stack").each(function (i) {
                $(this).find(".table-responsive-stack-thead").hide();
                $(this).find('thead').show();
            });



        }
// flextable
    }

    flexTable();

    window.onresize = function(event) {
        flexTable();
    };

    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();
});







