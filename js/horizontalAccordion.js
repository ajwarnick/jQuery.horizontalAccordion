(function( $ ){
  var $EL;
  var listItem = 0;  
  var MY_CONSTANT = 'value';
  var accordionHeight = "12";
  var sectionWidth = 0;
  var windowSize = 0;
  var total_pages = 0;
  var listItem = 0;
  var position = 0;
  var settings = {};
  var defaults = {
    DEBUG: false,
    defaultOptionA: 'defaultValue',
    speed: 1000
  }
  var methods = {
        
     init : function( options ) {
       $EL = this;
       settings = $.extend({}, defaults, options);
       
       total_pages = $EL.find(".section").length;
       accordionHeight = parseInt($EL.children(".section").first().css("width"));
       methods._setWindowSize();
       
       $EL.children(".section").each(function(index) {
         sectionWidth += parseInt($(this).outerWidth(true));
       });
       $EL.css("width", "110%");
       var iW = methods._hz_innerWidth();
       $EL.find(".section .fixed").each(function( index ) {
         $(this).css("width", iW);
       });
       $EL.children(".section").first().addClass("active");
       $EL.find(".active").css("width", methods._hz_outerWidth());
      
      
       $EL.on("click", ".section", function(event) {
         event.preventDefault();
         if (!$(this).hasClass("active")) {
           $(this).parent().children(".section").each(function(index, value) {
             if ($(this).is(".active")) {
               $(this).addClass("closing");
             }
           });
           $(this).addClass("opening active");
           methods._animateMethod();
         }
       });
      
       $(document).keydown(function(e) {
         if (e.keyCode === 37) {
           methods._next_slide();
         } else if (e.keyCode === 38) {
           methods._slide(0);
         } else if (e.keyCode === 39) {
           methods._prev_slide();
         } else if (e.keyCode === 40) {
           methods._slide(total_pages);
         }
       });
      
       $(window).resize(function() {
         $EL.css("width", "110%");
         methods._setWindowSize();
         methods._simpleMethod();
       });
       


       return this.each(function(){
         $(window).bind('reset.horizontalAccordion', methods.reset);
       });

     },
     destroy : function( ) {

       return this.each(function(){
         $(window).unbind('.horizontalAccordion');
       })

     },
     reset : function( ) { 
       // ... 
     },
     
     
     /** #### PUBLIC METHODS #### */
     publicMethod : function ()
     {
         console.log('inside publicMethod!');
         return $EL;        // support jQuery chaining
     },
     
     hide : function( ) {
       // ... 
     },
     update : function( content ) { 
       // ...
     },
     next : function( ) {
       methods._next_slide();
       return $EL;        // support jQuery chaining
     },
     prev : function(){
       methods._prev_slide();
       return $EL;        // support jQuery chaining
       
     },
     slide : function( num ) { 
       // ...
     },
     
     
 
     /** #### PRIVATE METHODS #### */
     _privateMethod : function () 
     {
       console.log($myEL);
     },
    
    
     _simpleMethod : function() {
       console.log($EL);
       $EL.children(".closing").removeClass("active");
       $EL.children(".section").css("width", accordionHeight);
       $EL.find(".active").css("width", methods._hz_outerWidth());
       $EL.find(".active .fixed").css("width", methods._hz_innerWidth());
       $EL.children(".section").removeClass("closing");
     },
    
     _animateMethod : function() {
       $EL.find(".opening .fixed").css("width", methods._hz_innerWidth());
       $EL.find(".closing").animate({
         width: accordionHeight
       }, settings.speed, "linear", function() {
         $EL.children(".section").removeClass("active").removeClass("closing");
       });
       $EL.find(".opening").animate({
         width: methods._hz_outerWidth()
       }, settings.speed, "linear", function() {
         $EL.children(".section").removeClass("active").removeClass("opening");
         $(this).addClass("active");
       });
     },
    
     _setWindowSize : function() {
       var oldWidth;
       oldWidth = void 0;
       oldWidth = $EL.css("width");
       $EL.css("width", "100%");
       windowSize = $EL.outerWidth(true);
       $EL.css("width", oldWidth);
     },
    
     _hz_innerWidth : function() {
       var iW;
       iW = void 0;
       iW = parseInt(methods._hz_outerWidth() - (2 * accordionHeight - 25));
       return iW;
     },
    
     _hz_outerWidth : function() {
       var oW = windowSize - sectionWidth + 5;
       return oW;
     },
    
     _next_slide : function() {
       listItem = $EL.find(".active");
       position = (listItem.index(".section") + 1) % total_pages;
       $EL.find(".active").addClass("closing");
       $EL.find(".section").eq(position).addClass("opening active");
       methods._animateMethod();
     },
     
     _prev_slide : function() {
       listItem = $EL.find(".active");
       position = (listItem.index(".section") - 1) % total_pages;
       $EL.find(".active").addClass("closing");
       $EL.find(".section").eq(position).addClass("opening active");
       methods._animateMethod();
     },
    
     _slide : function(num) {
       listItem = $EL.find(".active");
       if (listItem.index(".section") === num) {
         return console.log("hahahah");
       } else {
         $EL.find(".active").addClass("closing");
         $EL.find(".section").eq(num).addClass("opening active");
         methods._animateMethod();
       }
     },
     
     
     
  };
  
  $.fn.horizontalAccordion = function( method ) {
    
    if ( methods[method] ) {
      if ( String(method).indexOf('_') == 0 ){
        $.error( 'Method ' + method + ' is a private function of jQuery.horizontalAccordion' );
      }else{
        return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
      }
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' + method + ' does not exist on jQuery.horizontalAccordion' );
    }    
  
  };
  
})( jQuery );


