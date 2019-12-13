$(document).ready(function () {

    $(".menu ul li").click(function () {

        $(".menu ul li").removeClass("active");
        $( this ).addClass("active");

    });

});
