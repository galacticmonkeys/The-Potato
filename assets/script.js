$(document).ready(function(){

$(".searchbar").click(function() {
	$(document).keypress(function(e) {
	    if(e.which == 13) {
	    	//nothing
	    }
	});
})

$("#click").click(function() {
	//nothing
});


$(".button").click(function() {
	$("#modal-container").slideDown("500");
	$('body').css("overflow", "hidden");

});

$(".button-in-modal #cancel").click(function() {
	$("#modal-container").slideUp("500");
	$('body').css("overflow", "inherit");
});

$(".button").hover(function() {
	$(this).css("background-color","black");
	$(this).css("color", "white");
	}, 
	function() {
	$(this).css("background-color","white");
	$(this).css("color", "black");

});

$(".button-in-modal").hover(function() {
	$(this).css("background-color","black");
	$(this).css("color", "white");
	}, 
	function() {
	$(this).css("background-color","white");
	$(this).css("color", "black");

	}
);

$(function () {
	var $el;
	$("#topbar-wrapper li a").hover(
			function() {
				$el = $(this)
				$el.css("font-weight", "500");
			},
			function() {
				$el = $(this)
				$el.css("font-weight", "300");
			}
		);
});

$(function() {
    var $el, leftPos, unicorn,
        $mainNav = $("#topbar-wrapper");
    
    $mainNav.append("<li id='indicator'></li>");
    var $magicLine = $("#indicator");
    unicorn = $(".current_page_item a").position().left;
    unicorn += 55 + $(".current_page_item a").width() / 2;

    $magicLine
        .css("left", unicorn)
        .data("origLeft", $magicLine.position().left)

    $("#topbar-wrapper li a")
    	.click(function() {
	        $el = $(this);
	        leftPos = $el.position().left; 
	        leftPos += 20 + $el.width() / 2;
	        $magicLine.stop().animate({
	            left: leftPos,
	        });
		    $('html, body').animate({
			      scrollTop: $( $.attr(this, 'href')).offset().top
			    }, 750);
		    $('body').css("overflow", "initial");
		     
    	})
});

})
/**/