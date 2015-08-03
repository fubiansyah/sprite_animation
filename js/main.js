$( document ).ready(function() {
    //test//
var lastScrollTop = 0;
var scrolling;
var animStatus = "iddle";
var myAnimInterval = "";
var spriteIndex = 0;
var isTired =false;

var animPos = {"right" : [[-127,0],[0,0],[-254,0],[-381,0]], 
               "left"  : [[-127,-190],[0,-190],[-254,-190],[-381,-190]]
			   };


$(window).scroll(function(event){
   var st = $(this).scrollTop();
   scrolling = true;
   if (st > lastScrollTop){
       // downscroll code
	   if(myAnimInterval == "" || animStatus != "right"){
	     window.clearInterval(myAnimInterval);
	     animStatus = "right";
		 spriteIndex = 1;
		 isTired = false;
	     myAnimInterval =setInterval(function(){playAnim(animPos.right)},100);
	   }
   } else {
      // upscroll code
	 if(myAnimInterval == "" || animStatus != "left"){
	     window.clearInterval(myAnimInterval);
	     animStatus = "left";
		 spriteIndex = 1;
		 isTired = false;
	     myAnimInterval =setInterval(function(){playAnim(animPos.left)},100);
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
	  if(!isTired || animStatus != "tired"){
	     animStatus = "tired";
		 isTired = true;
	   }
});

 function playAnim(anim){
    $('#nano-id').css({'backgroundPosition': anim[spriteIndex][0] + 'px ' + anim[spriteIndex][1] + 'px'});
	if(!isTired){
	    if(spriteIndex < anim.length-2){
	       spriteIndex +=1;
	    }else{
	       spriteIndex = 0;
	    }
	}else{
	    if(spriteIndex < anim.length-1){
	       spriteIndex +=1;
	    }else{
	       spriteIndex = 0;
	       window.clearInterval(myAnimInterval);
           myAnimInterval = "";
	    }
	}
	
 }
 
});

