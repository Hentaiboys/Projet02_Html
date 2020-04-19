$(document).ready(function(){

    $(".navbar").hide();

    $(function () {
        $(window).scroll(function () {

            if ($(this).scollTop() > 10) {
                $('.navbar').fadeIn()
            }
            else{
                $('.navbar').fadeOut()
            }
        });
    });
});