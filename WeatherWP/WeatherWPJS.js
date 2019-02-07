$(function () {


    // var endPoint = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D1940345&format=json";

    var endPoint = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D1940345%20%20%20and%20u%3D'c'&format=json";

    $.ajax({
        url: endPoint,
        type: "GET",


        success: onQuerySucceded,
        error: onQueryFailed
    })


    function onQuerySucceded(data) {

       

        var today = data.query.results.channel.item.forecast[0];
        var tomorrow = data.query.results.channel.item.forecast[1];

        var day1 = today.day + "  ";
        var date1 = today.date;
        var code1 = today.code;
        var text1 = today.text;
        var high1 = today.high + "<sup>o</sup>";

        var day2 = tomorrow.day+"   ";
        var date2 = tomorrow.date;
        var code2 = tomorrow.code;
        var text2 = tomorrow.text;
        var high2 = tomorrow.high + "<sup>o</sup>";



        var image1 = "<img src='" + "http://l.yimg.com/a/i/us/we/52/" + code1 + ".gif'" + "  title='" + text1 + "'/>";
        var image2 = "<img src=" + "http://l.yimg.com/a/i/us/we/52/" + code2 + ".gif" + "  title='" + text2 + "'/>";


        $("#todayImage").append(image1);
        $("#day1").append(day1);
        $("#date1").append(date1);

        $("#todayTemp").append(high1);


        $("#tomorrowImage").append(image2);
        $("#day2").append(day2);
        $("#date2").append(date2);

        $("#tomorrowTemp").append(high2);






    }

    function onQueryFailed() {


        alert("on Query Failed");


    }



});