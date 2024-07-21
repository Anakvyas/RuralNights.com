
    let user = document.querySelector('.user');
    let div = document.querySelector('.user-cere');
    let body  = document.querySelector('body');

    if (user && div) {
        user.addEventListener('click', (event) => {
            div.style.visibility = 'visible';
            event.stopPropagation(); // Prevent the event from propagating to the body
        });

        if(body){
            body.addEventListener('click', () => {
                div.style.visibility = 'hidden';
            });
        }
        
        // Prevent the click event on the div itself from hiding it
        div.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }



document.querySelectorAll('.ico').forEach(function(ico) {
    ico.addEventListener('click', function() {

        document.querySelectorAll('.bars').forEach(function(bar) {
            bar.style.opacity = '0';
        });

        
        var bars = this.querySelector('.bars');
        bars.style.opacity = '1'; // Fully visible on click
    });
});