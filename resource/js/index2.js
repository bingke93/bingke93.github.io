$(function() {

/* We need to create dynamic keyframes to show the animation from full-screen to normal. So we create a stylesheet in which we can insert CSS keyframe rules */
$("body").append('<style id="lightbox-animations" type="text/css"></style>');

/* Click on the container */
$("#container-1").on('click', function() {
    /* The position of the container will be set to fixed, so set the top & left properties of the container */ 
    var bounding_box = $("#container-1").get(0).getBoundingClientRect();
    $(this).css({ top: bounding_box.top + 'px', left: bounding_box.left + 'px' });

    /* Set container to fixed position. Add animation */
    $(this).addClass('in-animation');
  
  $(this).css('overflow', 'auto');

    /* An empty container has to be added in place of the lightbox container so that the elements below don't come up
    Dimensions of this empty container is the same as the original container */
    $('<div id="empty-container"></div>').insertAfter("#container-1");

    /* To animate the container from full-screen to normal, we need dynamic keyframes */
    var styles = ``;
    styles = `@keyframes outlightbox {
        0% {
      height: 100%;
      width: 100%;
      top: 0px;
      left: 0px;
        }
        50% {
      height: 200px;
      top: ${bounding_box.y}px;
        }
        100% {
      height: 200px;
      width: 500px;
      top: ${bounding_box.y}px;
      left: ${bounding_box.x}px;
        }
    }`;

    /* Add keyframe to CSS */
    $("#lightbox-animations").get(0).sheet.insertRule(styles, 0);

    /* Hide the window scrollbar */
    $("body").css('overflow', 'hidden');
});

/* Click on close button when full-screen */
$("#xclose").on('click', function(e) {
    $("#xclose").hide();

    /* Window scrollbar normal */
    $("body").css('overflow', 'auto');

    /* Show animation */
    $("#container-1").addClass('out-animation');

    e.stopPropagation();
});

/* On animationend : from normal to full screen & full screen to normal */
$("#container-1").on('animationend', function(e) {
    /* On animation end from normal to full-screen */
    if(e.originalEvent.animationName == 'inlightbox') {
        $("#xclose").show();
    }
    /* On animation end from full-screen to normal */
    else if(e.originalEvent.animationName == 'outlightbox') {
    $("#container-1").css('overflow', 'hidden');
        /* Remove fixed positioning, remove animation rules */
        $("#container-1").removeClass('in-animation').removeClass('out-animation');
        
        /* Remove the empty container that was earlier added */
        $("#empty-container").remove();

        /* Delete the dynamic keyframe rule that was earlier created */
        $("#lightbox-animations").get(0).sheet.deleteRule(0);
    }
});

});