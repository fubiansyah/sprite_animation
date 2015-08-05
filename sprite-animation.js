/**
 * jQuery plugin for animating the sprite.
 * 
 * MIT License
 */
(function($) {
  
  $.fn.animatingSprite = function(options) {
    
    // create the default options
    var settings = $.extend({
      animPos: {
        "right" : [[-127,0],[0,0],[-254,0],[-381,0]], 
        "left"  : [[-127,-190],[0,-190],[-254,-190],[-381,-190]]
		  } 
    }, options);

    var lastScrollTop = 0;
    var scrolling = true;
    var animationStatus = 'idle';
    var animationInterval = '';
    var spriteIndex = 0;
    var isTired = false;
    var element = this;

    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      scrolling = true;
      if (st > lastScrollTop){
        // downscroll code
        if(animationInterval == "" || animationStatus != "right"){
          window.clearInterval(animationInterval);
          animationStatus = "right";
          spriteIndex = 1;
          isTired = false;
          animationInterval = setInterval(function(){playAnim(element, settings.animPos.right)},100);
        }
      } else {
        // upscroll code
        if(animationInterval == "" || animationStatus != "left"){
          window.clearInterval(animationInterval);
          animationStatus = "left";
          spriteIndex = 1;
          isTired = false;
          animationInterval =setInterval(function(){playAnim(element, settings.animPos.left)},100);
        }
      }
      lastScrollTop = st;
    });

    $.fn.scrollStopped = function(callback) {           
      $(this).scroll(function(){
        var self = this, $this = $(self);
        if ($this.data('scrollTimeout')) {
          clearTimeout($this.data('scrollTimeout'));
        }
        
        $this.data('scrollTimeout', setTimeout(callback,400,self));
      });
    };

    $(window).scrollStopped(function(){
      scrolling = false;
      
      if(!isTired || animationStatus != "tired") {
        animationStatus = "tired";
        isTired = true;
      }
    });

    /**
     * Making the animation work.
     *
     * param element - is the element for the sprite
     * param anim - is the array of the sprite
     */
    function playAnim(element, anim){
      element.css({'backgroundPosition': anim[spriteIndex][0] + 'px ' + anim[spriteIndex][1] + 'px'});
      
      if(!isTired){
        if(spriteIndex < anim.length-2){
          spriteIndex +=1;
        } else {
          spriteIndex = 0;
        }
      } else {
        if(spriteIndex < anim.length-1){
          spriteIndex +=1;
        } else {
          spriteIndex = 0;
          window.clearInterval(animationInterval);
          animationInterval = "";
        }
      }
    }
  };

} (jQuery));
