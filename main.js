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

});