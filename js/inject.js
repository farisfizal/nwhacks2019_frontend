(function() {
    console.log("something happened");
    $( "a" ).hover(
        function() {
            $( this ).append( $( "<span> ***</span>" ) );
        }, function() {
            $( this ).find( "span:last" ).remove();
        }
    );

    $("a.fade").hover(function() {
        $( this ).fadeOut( 100 );
        $( this ).fadeIn( 500 );
    });

})();