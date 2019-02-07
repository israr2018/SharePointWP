IsMemberOf();
IsMemberOf();
function IsMemberOf() {

    var siteUrl = _spPageContextInfo.webAbsoluteUrl;

//var id=_spPageContextInfo.userId;
  var id=11;

  alert(_spPageContextInfo.userId);
  
    var fullUrl2 = siteUrl + "/_api/web/sitegroups/GetById('6')/"+ "Users/GetById('"+id+"')";
  
  alert(fullUrl2);

    $.ajax({
        url: fullUrl2,
        type: "GET",
        cache:false,
        headers: {
            "accept": "application/json;odata=verbose"
        },

        success: onQuerySucceded,
        error:   onQueryFailed
    })




    
}

function onQuerySucceded(data) {
   
alert("Sucess");
  
  
 

}

function onQueryFailed() {


    alert("Sorry something goes wrong , try latter please");


}