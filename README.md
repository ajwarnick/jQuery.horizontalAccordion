jQuery.horizontalAccordion
==========================

jQuery plugin for responsive horizontal accordion.

__InIt__

you make it by calling it on what ever you want that has the form: 

    <div class='section_links'>
    
      <div class='section'>
        <div class='headers'>
          <span><!-- your title here --></span>
        </div>
        <div class='section_container'>
          <!-- what ever you want here -->
        </div>
      </div>    

      <div class='section'>
        <div class='headers'>
          <span><!-- your title here --></span>
        </div>
        <div class='section_container'>
          <!-- what ever you want here -->
        </div>
      </div>            
        
    <!-- you can have as many sections as you want -->
    </div>
    
and then you would want to instatiate it by calling:

    $('.section_links').horizontalAccordion();

__Public Methods__

    $('.section_links').horizontalAccordion('destroy');

This will destory the object. use when you are done with it.

    $('.section_links').horizontalAccordion('next');

This will advance to the next slide. Will rotate to first after last.

    $('.section_links').horizontalAccordion('prev');

Same as above, but oposite direction.