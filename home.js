(function() {
	
	$(".rotate-container").click(function(){
		window.location.replace("contact.html");
	});
	
   var InfiniteRotator =
    {
        init: function () {
            var isPaused = false;   // New variable
            var initialFadeIn = 1000;
            var itemInterval = 2500;
            var fadeTime = 2000;
            var numberOfItems = $('.default-slider').length;
            var currentItem = 0;

            $('.default-slider').mouseenter(function () { // Mouse over slider, pause
                isPaused = true;
            }).mouseleave(function () { // mouse out of slider, unpause
                isPaused = false;
            });

            $('.default-slider').eq(currentItem).fadeIn(initialFadeIn);
            var infiniteLoop = setInterval(function () {
                if (!isPaused) { // only run if not paused
                    $('.default-slider').eq(currentItem).fadeOut(fadeTime);
                    if (currentItem == numberOfItems - 1) {
                        currentItem = 0;
                    } else {
                        currentItem++;
                    }
                    $('.default-slider').eq(currentItem).fadeIn(fadeTime);
                }
            }, itemInterval);
        }
    };
    InfiniteRotator.init();

}());
