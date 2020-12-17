
    $(document).ready(function() {
        $('.map').click(function() {
            $(this).find("iframe").css('pointer-events', 'auto');
        });

    });

    $(document).click(function(event) { 
        var $target = $(event.target);
        if(!$target.closest('.map').length ){
            $(".iframeClass").css('pointer-events', 'none');
        }    
      });
