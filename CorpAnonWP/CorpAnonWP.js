
getAnnoncments();
function getAnnoncments() {

    var siteUrl = _spPageContextInfo.webAbsoluteUrl;

  //   http://[...]/_api/web/lists/getbytitle('Employees')/Items/?$select=Title,Employer/Id&$expand=Employer/Id&$filter=Employer/Id eq 1
    var fullUrl2 = siteUrl + "/_api/web/lists/GetByTitle('MDCustomFields')/items?$select=FieldsName&$filter=(SourceName eq 'OrderList1' and  CustomFieldName eq 'FoeField1')";

    $.ajax({
        url: fullUrl2,
        type: "GET",
        cache:false,
        headers: {
            "accept": "application/json;odata=verbose"
        },

        success: onQuerySucceded,
        error: onQueryFailed
    })
}

function onQuerySucceded(data) {
   alert("Success");

  


}

function onQueryFailed(data,args) {

    alert("Sorry something goes wrong , try latter please");
	console.log("data:"+args);

}