$(function () {

    


    getImages();
      sliderScript();

});
getImages();
function getImages() {


    var siteUrl = _spPageContextInfo.webAbsoluteUrl;

    var fullUrl2 = siteUrl + "/_api/web/lists/GetByTitle('MyPicLib')/items?$select=EncodedAbsUrl,Title,Description";

    $.ajax({
        url: fullUrl2,
        type: "GET",
	cache: false,
        headers: {
            "accept": "application/json;odata=verbose"
        },
    }).success(function (data) {



       
        var count = 0;
                 

        $.each(data.d.results, function (key, value) {

           
            var itemStart0 = "<div  class='item active ' >";
            var itemStart1 = "<div  class='item  ' >";

            var image = "<img src='" + value.EncodedAbsUrl + "' />"

            var containerStart = "<div class='slider-heading  '>";
           // var captionStart = " <div class='carousel-caption'>";
            var h4Html = "<h4>" + value.Description + "</h4>";

            var itemEnd = "</div>";
            var containerEnd = "</div>";


            var captionEnd = "</div>";


            if(count==0)
                var customHtml = itemStart0 + image + containerStart +   h4Html  + containerEnd + itemEnd;
            else
                var customHtml = itemStart1 + image + containerStart + h4Html + containerEnd + itemEnd;
            count++;
            jQuery(".carousel-inner").append(customHtml);
           
        });


    })
}  // end of getImages()

    function sliderScript(){
       
        $('.carousel').carousel();
            
    }//  end of sliderScript

             