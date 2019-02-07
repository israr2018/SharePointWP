// JavaScript source code
$(function () {

    getUserProfile();


});
getUserProfile();
function getUserProfile() {


    var siteUrl = _spPageContextInfo.webAbsoluteUrl;

    var fullUrl2 = siteUrl+"/_api/SP.UserProfiles.PeopleManager/GetMyProperties";




    


    $.ajax({
        url: fullUrl2,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose"
        },

        success: onQuerySucceded,
        error: onQueryFailed
    })





}

function onQuerySucceded(data) {


    
    var name = data.d.AccountName;
    var picUrl = data.d.PictureUrl;
    var name2 = data.d.DisplayName;



   






    $('#userName').text(name2);


    $('#pic').attr("src", picUrl);





}

function onQueryFailed() {


    alert("Sorry something goes wrong , try latter please");


}