		$(document).ready(function(){		$("#button1").click(function(){        $("#gallery").load("./dataload/1.txt").text();		$("#gallery").show(); 	 $("#newsp").hide();	 $("#about").hide();		});				$("#button2").click(function(){       $("#about").load("./dataload/2.txt"); 		$("#about").show();		 $("#gallery").hide();		 $("#newsp").hide();		});         	    });

$(document).ready(function(){$("#newsp").hide();$("#news").click(function(){$("#newsp").show();$("#about").hide();$("#gallery").hide();  }); $.ajax({type: "GET",url: "http://turumbapakil.knowitguide.info/feeds/posts/default?start-index=1",dataType: "xml",success: function(xml) { var i = 0; $("#news").click(function(){   var d = $(xml).find('entry');  var f = d.length;  var fa = f - 2;   ++fa;$(xml).find('entry').eq(fa).each(function(){ var title = $(this).find("title").first().text(); var article = $(this).find("content").first().text(); var updated = $(this).find("updated").first().text(); $("#newsp").prepend("<p style='color: blue;'>" + updated + "</p>"); $("#newsp").prepend("<h1 style='color: blue;'>" + title + "</h1>"); $("#newsp").prepend("<p style='color: black; width: 50%; overflow: hidden;'>" + article + "</p>"); $("#newsp").prepend(f);   });    });}});}); 