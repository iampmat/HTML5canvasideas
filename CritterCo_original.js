// Assign values to divs 
  $("img#tileRed").text("red");
  $("img#mapRed").text("red");

  $(function(){
    for( var i = 0; i < 10; i++){
      
    }

  })

  $(function() {
    $( ".tile" ).draggable({ revert: "invalid",
// identfy tile
      var tileValue = $(this).;
// Find original position of dragged image.
      start: function(event, ui) {
// Show start dragged position of image.
        var Startpos = $(this).position();
        $("div#start").text("START: \nLeft: "+ Startpos.left + "\nTop: " + Startpos.top);
      },
// Find position where image is dropped.
      stop: function(event, ui) {
      // Show dropped position.
        var Stoppos = $(this).position();
        $("div#stop").text("STOP: \nLeft: "+ Stoppos.left + "\nTop: " + Stoppos.top);
      }
    })

    $( ".map" ).droppable({
// identify piece
      var mapValue = $(this).text;

      if(tileValue == mapValue){

        over: function(event, ui) {
//de-indicate target tile
          $(".map").removeClass( "ui-state-highlight" );
//indicate target tile
          $( this ).addClass( "ui-state-highlight" )},


        drop: function( event, ui ) {
//Snap to grid - http://stackoverflow.com/questions/1254665/jquery-draggable-droppable-how-to-snap-dropped-element-to-dropped-on-element
          $(ui.draggable).detach().css({top: 0,left: 0}).appendTo(this);
//UI indication that it's dropped
          $( this ).addClass( "dropped" )
        }
      }
    });
  });
