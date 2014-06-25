/* =========================================================
*   ParallaxPro.js 1.0
*   Author: Alexander Bech / www.alexanderbech.com
*   https://github.com/AlexanderBech/ParallaxPro.js
* ========================================================== */
(function ($){

    $(window).load(function() {

        // For each element that has the class
        $('.parallaxpro').each(function(){

            // Store some variables based on where we are
            var $self = $(this),
                offsetCoords = $self.offset(),
                initTopOffset = offsetCoords.top,
                imageHeight = $self.data('imgheight');

            // When the window is scrolled...
            $(window).scroll(function(){

                // If this section is in view
                if( (($window.scrollTop() + $window.height()) > initTopOffset) && ((initTopOffset + $self.height()) > $window.scrollTop())) {
                  
                    var percentNow = ($window.scrollTop() + $window.height()) - initTopOffset;
                    var percentStart = initTopOffset-$window.height();
                    var percentEnd = initTopOffset+$self.height();
                    var percentMax = (percentEnd - percentStart);
                    var percentNum = Math.round((100/percentMax) * percentNow) / 100;

                    // How much of image left to scroll
                    var imagePos = ((imageHeight-$self.height())*(-1)) * percentNum;
                    
                    // Put together our final background position
                    var coords = '50% '+ imagePos + 'px';

                    // Move the background
                    $self.css({ backgroundPosition: coords }); 
                
                }

            }); // window scroll
                
        });

    });

})(jQuery);