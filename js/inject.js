(function() {
    console.log("something happened");
    $( "a" ).hover(
        function() {
            $(this ).append( $( "<span> ***</span>" ));
            $(this).attr("data-tippy","Tooltip");
            tippy($(this));
        }, function() {
            $( this ).find( "span:last" ).remove();
        }
    );

    $("a.fade").hover(function() {
        $( this ).fadeOut( 100 );
        $( this ).fadeIn( 500 );
    });

})();
