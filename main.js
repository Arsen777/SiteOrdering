/**
 * Created by User on 17.02.2016.
 */


$(document).ready(function () {

    //$(".hvr-bubble-float-top").click(function(){
    //$("#text").hide();
    //$("#contactUsForm").show();
    //});


    $("#inputHref").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#notNow").trigger("click");
    });

    bodyMouseMove();
});


function bodyMouseMove() {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("body").mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('body').css("background-position", newvalueX + "px     " + newvalueY + "px");
    });
}