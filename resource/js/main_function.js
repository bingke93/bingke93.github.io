$(function() {

	/* PART1 + PART2 interaction */
	var $container = $( '#uc-container' ),
		pfold = $( '#uc-container' ).pfold({
			easing : 'ease-in-out',
			folds : 3,
			folddirection : ['left','bottom','right']
		});

	$container.find( 'span.clickme' ).on( 'click', function() {
		pfold.unfold();
		setTimeout(function() {
			$('#hide_section').removeClass('hide');
		},1500);
	} ).end().find( 'span.close' ).on( 'click', function() {
		pfold.fold();
		$('#hide_section').addClass('hide');
	} );
	/* END PART1 + PART2 interaction */
	




	// PART2 interaction
	var opened = false;

	$( '#hide_section > div.uc-container' ).each( function( i ) {

		var $item = $( this ), direction;

		switch( i ) {
			case 0 : direction = ['right','bottom']; break;
			case 1 : direction = ['right','top']; break;
			case 2 : direction = ['right','top']; break;
			case 3 : direction = ['left','top']; break;
		}
		
		var pfold = $item.pfold( {
			folddirection : direction,
			speed : 300,
			onEndFolding : function() { opened = false; },
			centered : true
		} );

		$item.find( 'span.icon-eye' ).on( 'click', function() {

			if( !opened ) {
				opened = true;
				pfold.unfold();

				$(this).closest('.uc-container').siblings().css("display", "none");
				$(this).closest('.initial-bg').css("z-index",1);
			}


		} ).end().find( 'span.close' ).on( 'click', function() {

			pfold.fold();

			setTimeout(() => {
				$(this).closest('.uc-container').siblings().css("display", "block");
			},700);

		} );

		$item.find('div.uc-final-wrapper').css("z-index", 999);

	} );
	// END PART2 interaction




	// Part3: click on "link" to see detailed information
	$("#link_1").on( 'click', function() {
		$('#fix_all').fadeIn('slow');
		$('#fix_all').removeClass('hide');
		$("body").css("overflow", "hidden");
    	$("#ori_img").animate({ position: "fixed", left: "0", top: "-43px", width: "100%" });
    } );

    $(".xclose").on( 'click', function() {
		$("body").css("overflow", "auto");
		$('#fix_all').fadeOut('slow');
		setTimeout(function(){
			$('#fix_all').addClass('hide');
		},1500);
    	
    } );


	$(".arr_left").hover( function() {
		$(this).attr("src", "resource/images/arrow_on_pre.png");
	}, function() {
		$(this).attr("src", "resource/images/arrow_pre.png");
	});

	$(".arr_next").hover( function() {
		$(this).attr("src", "resource/images/arrow_on_ne.png");
	}, function() {
		$(this).attr("src", "resource/images/arrow_ne.png");
	});

	var imgCount_previous = 2;
	var imgCount_next = -1
	var images = ['resource/images/large/2.jpg', 'resource/images/large/3.jpg', 'resource/images/large/4.jpg'];

	$(".arr_next").on( 'click', function() {
		if (imgCount_next !== images.length -1)
			imgCount_next++;
		else
			imgCount_next = 0;
		$("#ori_img").attr("src", images[imgCount_next]);
	});

	$(".arr_left").on( 'click', function() {
		if (imgCount_previous !== 0)
			imgCount_previous--;
		else
			imgCount_previous = 3;
		$("#ori_img").attr("src", images[imgCount_previous]);
	});
	// END PART3: click on "link" to see detailed information
	
});

