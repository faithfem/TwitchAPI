$(document).ready(function()){
      var url = "https://api.twitch.tv/kraken/streams/freecodecamp";
      $.getJSON(url,function(data1){
            if(daa.1.stream===null){
                  $("$fccStatus").html("Free Code Camp")
            }
            else{
                  $("#fccStatus").html("FCC");
            }
       
   }); 
});