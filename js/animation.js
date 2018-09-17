/* Leadro Zambelli
*/

$(document).ready(function(){
    
    // Loading screen animation and duration
    function showPage() {
        $('.loading').animate({
            opacity: 0
        }, 500, function(){ $('.loading').css('width', '0'); } ); // removing the element so it does not get in the middle
    }

    setTimeout(function(){ showPage(); }, 800);
    
    $('.loading-face').animate({
        top: '25%'
    }, 1300, function(){ $('.loading-face').css('top', '50%'); } ); // reseting the state for the next click
    
    // Loading screen on click 
    $('nav a, .js-btn-load').click(function(e){
    
        e.preventDefault();
        
        var url = $(this).attr('href');
        
        $('.loading').css('width', '100%');// reseting the state for the next click
        
        // Loading animation and transition
        $('.loading').animate({
            opacity: 1
        }, {
                queue: true,
                duration: 150,
                complete: function(){
                    setTimeout( function(){
                        window.location.href = url;
                    }, 400 );
                }
            }
        );
    });
});