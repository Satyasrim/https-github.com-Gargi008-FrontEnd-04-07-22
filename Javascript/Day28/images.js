//AJAX with jQuery

/* $(document).ready(function(){ */
//we write ?jsoncallback=? to avoid cross rigin error
$(function(){

    const apiImages="https://flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

    $.getJSON(apiImages,{
        format: "json",
        tagmode:"any"
    }).done(function(imageData){
        console.log(imageData)
        $.each(imageData.items,function(idx,pic){
            console.log(pic)
            $("<img>").attr("src",pic.media.m).appendTo("#imageApi")
        })

    }).fail(function(){
        console.log("sryy it failed")
    })

})