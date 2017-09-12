$(document).ready(function()){
      var url = "https://api.twitch.tv/kraken/streams/freecodecamp";
      $.getJSON(url,function(data1){
            if(data.1.stream===null){
                  $("$fccStatus").html("Free Code Camp")
            }
            else{
                  $("#fccStatus").html("FCC");
            }
       
   }); 
   
   var followerURL = "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/";
   $.getJSON(followerURL, function(data){
for (var i = 0;i<data2.follows.length;i++){               
         
   })
});