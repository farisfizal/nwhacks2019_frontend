(function() {
    console.log("something happened");
    $( "a" ).hover(
        function() {
            tippy('a', {'content': 'Thog dont care'});
        }
    );

    $("a.fade").hover(function() {
        $( this ).fadeOut( 100 );
        $( this ).fadeIn( 500 );
    });

})();
