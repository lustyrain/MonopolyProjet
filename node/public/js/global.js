
$(document).ready(function(){
    $("img").each(function(i){
        if($(this).attr('id')==='img_centre'){
            
        }else{
            var name = 'img_zoom_image';
            $("body").append("<div id='"+name+i+"' style='position:absolute; visibility:hidden; left:-286px; top:0px; z-index:1000;'><figure><img class='img_zoom_image' src='"+$(this).attr('src')+"'/><figcaption>"+$(this).attr('title')+"</figcaption></figure></div>");

            var my_tooltip = $("#"+name+i);

            $(this).mouseover(function(){
                    my_tooltip.css({opacity:1, display:"none", visibility:"visible"}).fadeIn(0);
            }).mousemove(function(kmouse){
                    my_tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY+15});
            }).mouseout(function(){
                    my_tooltip.fadeOut(0);
            });
        }
	}); 
    
});
     
function getNumber() {
        var minNumber = 1; // le minimum
        var maxNumber = 5; // le maximum
        var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
        return randomnumber;
    }  

function lancer(){
        de=Math.ceil(6*Math.random())
        $("#de1").remove();
        $("#de2").remove();
        $("body").append("<div id='de1' style='position:absolute; visibility:visible; left:350px; top:100px; z-index:999;'><img class='img_zoom_image' src='/images/de_"+de+".png'/></div>");
        $("body").append("<div id='de2' style='position:absolute; visibility:visible; left:300px; top:100px; z-index:999;'><img class='img_zoom_image' src='/images/de_"+getNumber()+".png'/></div>");

 }
