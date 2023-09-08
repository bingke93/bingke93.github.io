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
<<<<<<< Updated upstream
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
=======
		$('#fix_all_1').fadeIn('slow');
		$('#fix_all_1').removeClass('hide');
		$("body").css("overflow", "hidden");
    	$("#ori_img_1").animate({ position: "fixed", left: "0", top: "-43px", width: "100%" });
    } );

    $("#xclose_1").on( 'click', function() {
		$("body").css("overflow", "auto");
		$('#fix_all_1').fadeOut('slow');
		setTimeout(function(){
			$('#fix_all_1').addClass('hide');
>>>>>>> Stashed changes
		},1500);
    	
    } );


<<<<<<< Updated upstream
=======



    $("#link_2").on( 'click', function() {
		$('#fix_all_2').fadeIn('slow');
		$('#fix_all_2').removeClass('hide');
		$("body").css("overflow", "hidden");
    	$("#ori_img_2").animate({ position: "fixed", left: "0", top: "-43px", width: "100%" });
    } );

    $("#xclose_2").on( 'click', function() {
		$("body").css("overflow", "auto");
		$('#fix_all_2').fadeOut('slow');
		setTimeout(function(){
			$('#fix_all_2').addClass('hide');
		},1500);
    	
    } );





    $("#link_3").on( 'click', function() {
		$('#fix_all_3').fadeIn('slow');
		$('#fix_all_3').removeClass('hide');
		$("body").css("overflow", "hidden");
    	$("#ori_img_3").animate({ position: "fixed", left: "0", top: "-43px", width: "100%" });
    } );

    $("#xclose_3").on( 'click', function() {
		$("body").css("overflow", "auto");
		$('#fix_all_3').fadeOut('slow');
		setTimeout(function(){
			$('#fix_all_3').addClass('hide');
		},1500);
    	
    } );




    $("#link_4").on( 'click', function() {
		$('#fix_all_4').fadeIn('slow');
		$('#fix_all_4').removeClass('hide');
		$("body").css("overflow", "hidden");
    	$("#ori_img_4").animate({ position: "fixed", left: "0", top: "-43px", width: "100%" });
    } );

    $("#xclose_4").on( 'click', function() {
		$("body").css("overflow", "auto");
		$('#fix_all_4').fadeOut('slow');
		setTimeout(function(){
			$('#fix_all_4').addClass('hide');
		},1500);
    	
    } );





    $("#link_5").on( 'click', function() {
		$('#fix_all_5').fadeIn('slow');
		$('#fix_all_5').removeClass('hide');
		$("body").css("overflow", "hidden");
    	$("#ori_img_5").animate({ position: "fixed", left: "0", top: "-43px", width: "100%" });
    } );

    $("#xclose_5").on( 'click', function() {
		$("body").css("overflow", "auto");
		$('#fix_all_5').fadeOut('slow');
		setTimeout(function(){
			$('#fix_all_5').addClass('hide');
		},1500);
    	
    } );





    $("#link_6").on( 'click', function() {
		$('#fix_all_6').fadeIn('slow');
		$('#fix_all_6').removeClass('hide');
		$("body").css("overflow", "hidden");
    	$("#ori_img_6").animate({ position: "fixed", left: "0", top: "-43px", width: "100%" });
    } );

    $("#xclose_6").on( 'click', function() {
		$("body").css("overflow", "auto");
		$('#fix_all_6').fadeOut('slow');
		setTimeout(function(){
			$('#fix_all_6').addClass('hide');
		},1500);
    	
    } );




>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
	var imgCount_previous = 2;
	var imgCount_next = -1
	var images = ['resource/images/large/2.jpg', 'resource/images/large/3.jpg', 'resource/images/large/4.jpg'];

	$(".arr_next").on( 'click', function() {
=======



	var imgCount_previous = 2;
	var imgCount_next = -1
	var images_1 = ['resource/images/100.png', 'resource/images/101.png', 'resource/images/102.png', 'resource/images/103.png', 'resource/images/104.png', 'resource/images/105.png', 'resource/images/106.png', 'resource/images/107.png'];
	var images_2 = ['resource/images/200.png', 'resource/images/201.png', 'resource/images/202.png', 'resource/images/203.png', 'resource/images/204.png', 'resource/images/205.png', 'resource/images/206.png', 'resource/images/207.png', 'resource/images/208.png', 'resource/images/209.png', 'resource/images/210.png'];
	var images_3 = ['resource/images/300.png', 'resource/images/301.png'];
	var images_4 = ['resource/images/400.png'];
	var images_5 = ['resource/images/500.png'];
	var images_6 = ['resource/images/600.png'];




	$("#arr_n_1").on( 'click', function() {
>>>>>>> Stashed changes
		if (imgCount_next !== images.length -1)
			imgCount_next++;
		else
			imgCount_next = 0;
<<<<<<< Updated upstream
		$("#ori_img").attr("src", images[imgCount_next]);
	});

	$(".arr_left").on( 'click', function() {
=======
		$("#ori_img_1").attr("src", images_1[imgCount_next]);
	});

	$("#arr_l_1").on( 'click', function() {
>>>>>>> Stashed changes
		if (imgCount_previous !== 0)
			imgCount_previous--;
		else
			imgCount_previous = 3;
<<<<<<< Updated upstream
		$("#ori_img").attr("src", images[imgCount_previous]);
=======
		$("#ori_img_1").attr("src", images_1[imgCount_previous]);
	});




	$("#arr_n_2").on( 'click', function() {
		if (imgCount_next !== images.length -1)
			imgCount_next++;
		else
			imgCount_next = 0;
		$("#ori_img_2").attr("src", images_2[imgCount_next]);
	});

	$("#arr_l_2").on( 'click', function() {
		if (imgCount_previous !== 0)
			imgCount_previous--;
		else
			imgCount_previous = 3;
		$("#ori_img_2").attr("src", images_2[imgCount_previous]);
	});





	$("#arr_n_3").on( 'click', function() {
		if (imgCount_next !== images.length -1)
			imgCount_next++;
		else
			imgCount_next = 0;
		$("#ori_img_3").attr("src", images_3[imgCount_next]);
	});

	$("#arr_l_3").on( 'click', function() {
		if (imgCount_previous !== 0)
			imgCount_previous--;
		else
			imgCount_previous = 3;
		$("#ori_img_3").attr("src", images_3[imgCount_previous]);
	});






	$("#arr_n_4").on( 'click', function() {
		if (imgCount_next !== images.length -1)
			imgCount_next++;
		else
			imgCount_next = 0;
		$("#ori_img_4").attr("src", images_4[imgCount_next]);
	});

	$("#arr_l_4").on( 'click', function() {
		if (imgCount_previous !== 0)
			imgCount_previous--;
		else
			imgCount_previous = 3;
		$("#ori_img_4").attr("src", images_4[imgCount_previous]);
	});






	$("#arr_n_5").on( 'click', function() {
		if (imgCount_next !== images.length -1)
			imgCount_next++;
		else
			imgCount_next = 0;
		$("#ori_img_5").attr("src", images_5[imgCount_next]);
	});

	$("#arr_l_5").on( 'click', function() {
		if (imgCount_previous !== 0)
			imgCount_previous--;
		else
			imgCount_previous = 3;
		$("#ori_img_5").attr("src", images_5[imgCount_previous]);
	});






	$("#arr_n_6").on( 'click', function() {
		if (imgCount_next !== images.length -1)
			imgCount_next++;
		else
			imgCount_next = 0;
		$("#ori_img_6").attr("src", images_6[imgCount_next]);
	});

	$("#arr_l_6").on( 'click', function() {
		if (imgCount_previous !== 0)
			imgCount_previous--;
		else
			imgCount_previous = 3;
		$("#ori_img_6").attr("src", images_6[imgCount_previous]);
>>>>>>> Stashed changes
	});
	// END PART3: click on "link" to see detailed information
	
});

