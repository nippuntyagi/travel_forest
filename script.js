function enterSite(){
   $('#landing').css("transform", "translate(-200vw)");
   $('#dimmed-bg').css({
     "visibility": "visible",
     "transform": "translate(0)"
   });

   $("#above-fold").css({
     "opacity": 1
   });

   $("#full-site").css({
     "visibility": "visible",
     "overflow": "auto",
     "max-height": "auto"
   });
}
