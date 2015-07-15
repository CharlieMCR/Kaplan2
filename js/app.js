;(function($){
	// $(document).ready(function(){});
	$(window).load(function () {

		// console.log('Created by charliemcr.com');

		var windowWidth = 0,
		$overlay = $('#overlay');

		// $(function() {
		// 	$('.toggle-nav').click(function() {
		// 		// Calling a function in case you want to expand upon this.
		// 		toggleNav();
		// 	});
		// });

		// $(function() {
		// 	$('.exit-off-canvas').click(function() {
		// 		// Calling a function in case you want to expand upon this.
		// 		toggleNav();
		// 	});
		// });

		// function convertHtmlToText(input) {
		//     var inputText = input;
		//     var returnText = "" + inputText;

		//     //-- remove BR tags and replace them with line break
		//     returnText=returnText.replace(/<br>/gi, "\n");
		//     returnText=returnText.replace(/<br\s\/>/gi, "\n");
		//     returnText=returnText.replace(/<br\/>/gi, "\n");

		//     //-- remove P and A tags but preserve what's inside of them
		//     returnText=returnText.replace(/<p.*>/gi, "\n");
		//     returnText=returnText.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 ($1)");

		//     //-- remove all inside SCRIPT and STYLE tags
		//     returnText=returnText.replace(/<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi, "");
		//     returnText=returnText.replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi, "");
		//     //-- remove all else
		//     returnText=returnText.replace(/<(?:.|\s)*?>/g, "");

		//     //-- get rid of more than 2 multiple line breaks:
		//     returnText=returnText.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim, "\n\n");

		//     //-- get rid of more than 2 spaces:
		//     returnText = returnText.replace(/ +(?= )/g,'');

		//     //-- get rid of html-encoded characters:
		//     returnText=returnText.replace(/&nbsp;/gi," ");
		//     returnText=returnText.replace(/&amp;/gi,"&");
		//     returnText=returnText.replace(/&quot;/gi,'"');
		//     returnText=returnText.replace(/&lt;/gi,'<');
		//     returnText=returnText.replace(/&gt;/gi,'>');

		//     //-- return
		//     return returnText;
		// }

		// function setOverlayHeight() {
		// 	$overlay.css({'height': $('#site-wrapper').height() + "px"});
		// }

		// function openOverlay() {
		// 	$overlay.addClass('show');
		// 	setOverlayHeight();
		// 	// if ($('#contactForm').css('display') === 'none') {
		// 		// $('#contactForm').fadeIn();
		// 	// };
		// }
		// openOverlay();

		// function closeOverlay() {
		// 	$overlay.removeClass('show');
		// 	$overlay.css({'height': '0px'});
		// 	// $('.message').hide();
		// 	// if ($('#contactForm').css('display') !== 'none') {
		// 		// $('#contactForm').hide();
		// 	// };
		// }
		/*========================================
		=            CUSTOM FUNCTIONS            =
		========================================*/
		// function toggleNav() {
		// 	if ($('#site-wrapper').hasClass('show-nav')) {
		// 		// Do things on Nav Close
		// 		$('#site-wrapper').removeClass('show-nav');
		// 	} else {
		// 		// Do things on Nav Open
		// 		$('#site-wrapper').addClass('show-nav');
		// 	}

		// 	//$('#site-wrapper').toggleClass('show-nav');
		// }

		function getWrapperWidth() {
			var windowWidth = $('#js-width').width();
			return windowWidth;
		}

		// function bodyHeight() {
		// 	$('#site-canvas').css({
		// 		'min-height': $(window).height()
		// 	});
		// }
		// bodyHeight();

		$(window).resize(function(){
			window.setTimeout(function(){
				// bodyHeight();
				getWrapperWidth();
			},200);
		});

		// console.log($('.page-template-page-about .header').css('background-image'));
		// $(function(){
		// 	var image_url = $('.page-template-page-about .header').css('background-image'),
		// 	    image;

		// 	// Remove url() or in case of Chrome url("")
		// 	image_url = image_url.match(/^url\("?(.+?)"?\)$/);

		// 	if (image_url[1]) {
		// 	    image_url = image_url[1];
		// 	    image = new Image();

		// 	    // just in case it is not already loaded
		// 	    $(image).load(function () {
		// 	        alert(image.width + 'x' + image.height);
		// 	    });

		// 	    image.src = image_url;
		// 	}
		// });

		// $(function(){
		// 	$(window).scroll(function(){
		// 		var scroll = $(document).scrollTop();
		// 		var logo = $('.logo');
		// 		if (scroll > 120) {
		// 			logo.addClass('logo-small');
		// 		} else if (scroll === 0) {
		// 			logo.removeClass('logo-small');
		// 		};
		// 	});
		// });

		$(function(){
			var $images = $('#image-slider >'),
			$imageLinks = $('#image-slider >a'),
			$image = $('#image-slider img'),
			imageHeight = [],
			imageHeightAttr = [],
			$container = $('.slider-container'),
			$imageGallery = $('.image-gallery',$container),
			$rightSlider = $('#js-slide-right'),
			$leftSlider = $('#js-slide-left'),
			j = 0,
			$listCount = $('#js-list-count', $container);
			// if (!$image.length) {
			// 	$image = $images;
			// };
			function setContainer() {
				var maxHeight = 0,
				windowHeight = function(){
					return $(window).height();
				},
				leftoffset = 0;
				imageHeight = [];
				$images.width(getWrapperWidth());
				$container.width(getWrapperWidth());
				$imageGallery.width(getWrapperWidth() * $image.length);
				$imageGallery.css({'margin-left': -getWrapperWidth()*j});
					$images.each(function(i){
						var margin = 0; 
						if ($listCount.children().length < $images.length) {
							$listCount.append('<li><a class="js-count" id="list-item-'+i+'"><span></span></a></li>');
						};
						imageHeightAttr.push($image.eq(i).attr('height'));
						imageHeight.push($image.eq(i).height());
						$image.eq(i).width(getWrapperWidth());
						// console.log($images.eq(i));
						console.log(Math.max.apply(Math, imageHeight));
						console.log(Math.max.apply(Math, imageHeightAttr)/(getWrapperWidth()/windowHeight()));
						console.log(getWrapperWidth()/windowHeight());
						// console.log($('#image-slider img').eq(i).attr('height'));
						if (Math.max.apply(Math, imageHeight) < windowHeight()) {
							$imageLinks.eq(i).css({'height':Math.max.apply(Math, imageHeight)});
						} else {
							$imageLinks.eq(i).css({'height': windowHeight()});
						};
						$image.eq(i).css({'margin-top': '0px'});
							// console.log(imageHeight);
							margin = ($images.eq(i).height()-$image.eq(i).height())/2;
							// console.log(margin);
							if (margin > 0) {
								$('img', $images).eq(i).css({'margin-top':margin});
							};
						if ($images.eq(i).position().top !== 0) {
							// $images.eq(i).offset({ top: $images.eq(i).prev().offset().top, left: $images.eq(i).offset().left});
							$images.eq(i).offset({ top: '0px', left: $images.eq(i).offset().left});
						};
						// console.log($images.eq(i).position().top);
					});
					
				if (getWrapperWidth() > windowHeight() && Math.max.apply(Math, imageHeight) < windowHeight()) {
					// console.log('image height is smaller than window height');
					// console.log(imageHeight);
					$container.css({'height':Math.max.apply(Math, imageHeightAttr)/(getWrapperWidth()/windowHeight())});
					$imageGallery.css({'height':Math.max.apply(Math, imageHeightAttr)/(getWrapperWidth()/windowHeight())});
				} else if (getWrapperWidth() < windowHeight()) {
					// console.log('portrait');
					$container.css({'height':Math.max.apply(Math, imageHeight)});
					$imageGallery.css({'height':Math.max.apply(Math, imageHeight)});
				} else if (getWrapperWidth() > windowHeight()) {
					// console.log('landscape');
					// Math.max.apply(Math, imageHeightAttr)/(getWrapperWidth()/windowHeight())
					$container.css({'height': Math.max.apply(Math, imageHeightAttr)/(getWrapperWidth()/windowHeight())});
					$imageGallery.css({'height': Math.max.apply(Math, imageHeightAttr)/(getWrapperWidth()/windowHeight())});
				} else {
					// console.log('image height is larger than window height');
					$container.css({'height': windowHeight()});
					$imageGallery.css({'height': windowHeight()});
				};
				if ($image.length) {
					leftoffset = $image.eq(j).offset().left-49;
					$leftSlider.css({'left': Math.floor(leftoffset) });
					$rightSlider.css({'right': Math.floor(leftoffset) });
				};

			}
			// function checkOr(){
			//     if (window.matchMedia("(orientation:portrait)").matches) {
			//       // alert('portrait ' + window.orientation);
			//       setContainer();
			//     } else {
			//       // alert('landscape '+ window.orientation);
			//       setContainer();
			//     }
			// }

			function resizeWindow() {
				$(window).resize(function(){
					window.setTimeout(function(){
						setContainer();
					},200);
				});
			}
			function buttonColor(target) {
				target.addClass('slide-control-active');
				window.setTimeout(function(){
					target.removeClass('slide-control-active');
				},500);
			}
			function activeListItem() {
				$listCount.children().removeClass('active');
				$listCount.children().eq(j).addClass('active');
			}

			if ($images.length>1) {
				$container.addClass('active');
				setContainer();
				resizeWindow();
				activeListItem();
				function getExistingMargin() {
					var existingMargin = parseInt($imageGallery.css('margin-left'));
					return existingMargin;
				}
				function moveRight() {
					j++;
					if (j < $images.length) {
						$imageGallery.animate({'margin-left': -getWrapperWidth()*j + 'px'}, 500, 'swing');
						buttonColor($rightSlider);
						activeListItem();
					} else {
						$imageGallery.animate({'margin-left': '0px'}, 500, 'swing');
						buttonColor($leftSlider);
						j = 0;
						activeListItem();
					};
				}
				function moveLeft() {
					j--;
					if (j>=0) {
						$imageGallery.animate({'margin-left': -getWrapperWidth()*j + 'px'}, 500, 'swing');
						buttonColor($leftSlider);
						activeListItem();
					} else { j = 0 };
				}
				$rightSlider.click(function(e){
					e.preventDefault();
					moveRight();
				});
				$leftSlider.click(function(e){
					e.preventDefault();
					moveLeft();
				});
				$(document).keydown(function(e) {
					if (e.keyCode === 37) {
						moveLeft();
					} else if (e.keyCode === 39) {
						moveRight();
					}
				});
				$('.js-count').click(function(e){
					e.preventDefault();
					k = $(this).parent().index();
					if (j < k) {
						buttonColor($rightSlider);
					} else if (j > k) {
						buttonColor($leftSlider);
					};
					j = k;
					$imageGallery.animate({'margin-left': -getWrapperWidth()*j + 'px'}, 500, 'swing');
					activeListItem();
				});

				document.addEventListener('touchstart', handleTouchStart, false);        
				document.addEventListener('touchmove', handleTouchMove, false);

				var xDown = null;                                                        
				var yDown = null;                                                        

				function handleTouchStart(evt) {                                         
				    xDown = evt.touches[0].clientX;                                      
				    yDown = evt.touches[0].clientY;                                      
				};                                                

				function handleTouchMove(evt) {
					if ($('.slider-container').has(evt.target).length > 0) {
					    if ( ! xDown || ! yDown ) {
					        return;
					    }

					    var xUp = evt.touches[0].clientX;                                    
					    var yUp = evt.touches[0].clientY;

					    var xDiff = xDown - xUp;
					    var yDiff = yDown - yUp;

					    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
					        if ( xDiff > 0 ) {
					            /* left swipe */ 
					            moveRight();
					        } else {
					            /* right swipe */
					            moveLeft();
					        }                       
					    } else {
					        if ( yDiff > 0 ) {
					            /* up swipe */ 
					        } else { 
					            /* down swipe */
					        }                                                                 
					    }
					    /* reset values */
					    xDown = null;
					    yDown = null;                                             
					}
				};

				document.addEventListener('wheel', function(e){
					// if (e.target === document.querySelectorAll('.slider-container')) {

					// console.log(e);
						
					// }
					if ($('.slider-container').has(e.target).length > 0) {
						// console.log(e.wheelDeltaX);
					}
				}, false);
				document.addEventListener('wheel', handleMouseStart, false);
				document.addEventListener('wheel', handleMouseMove, false);

				var xMouse = null;
				var yMouse = null;

				function handleMouseStart(evt) {
				    xMouse = evt.wheelDeltaX; 
				    yMouse = evt.wheelDeltaY; 
				    console.log('bar');
				};

				function handleMouseMove(evt) {
					// if ($('.slider-container').has(evt.target).length > 0) {
					    if ( ! xMouse || ! yMouse ) {
					        return;
					        console.log('ffoo');
					    }

					    var xUp = evt.wheelDeltaX;                                    
					    var yUp = evt.wheelDeltaY;

					    var xDiff = xMouse - xUp;
					    var yDiff = yMouse - yUp;

					    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
					        if ( xDiff > 0 ) {
					            /* left swipe */ 
					            moveRight();
					        } else {
					            /* right swipe */
					            moveLeft();
					        }                       
					    } else {
					        if ( yDiff > 0 ) {
					            /* up swipe */ 
					        } else { 
					            /* down swipe */
					        }                                                                 
					    }
					    /* reset values */
					    xMouse = null;
					    yMouse = null;                                             
					// }
				};




				$images.click(function(e){
					e.preventDefault();
				});
			} else {
				setContainer();
				resizeWindow();
				$images.click(function(e){
					e.preventDefault();
				});
			};
			window.addEventListener("orientationchange", function() {
			 //    setContainer();
				// resizeWindow();
			});
			window.addEventListener("orientationchange", function() {
				// setContainer();
				// resizeWindow();
			}, false);
		});
		// $('#contactForm').submit(function(e){
		// 	e.preventDefault();
		// 	ajaxSubmit();
		// });

		// function ajaxSubmit() {
		// 	var $form = $('#contactForm'),
		// 	form = {},
		// 	nameReg = /^[a-zA-Z0-9 ]{2,30}$/,
		// 	emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
		// 	subjectReg = /^(?=.*[A-Z0-9])[\w.,!?"'\/$ ]+$/i,
		// 	name = convertHtmlToText($('input#name', $form).val()),
		// 	email = convertHtmlToText($('input#email', $form).val()),
		// 	subject = convertHtmlToText($('input#subject', $form).val()),
		// 	message = convertHtmlToText($('textarea#message', $form).val()),
		// 	token = $('input#token', $form).val();

		// 	$('.error').hide();
		// 	if (name === "") {
		// 		$('label#name_error', $form).show();
		// 		$('input#name', $form).focus();
		// 		return false;
		// 	} else if (!nameReg.test(name)) {
		// 		$('label#name_error', $form).append('. Please use alphanumeric characters').show();
		// 		$('input#name', $form).focus();
		// 		return false;
		// 	};
		// 	if (email === "") {
		// 		$('label#email_error', $form).show();
		// 		$('input#email', $form).focus();
		// 		return false;
		// 	} else if (!emailReg.test(email)) {
		// 		$('label#email_error', $form).html("").append('Please use alpha').show();
		// 		$('input#email', $form).focus();
		// 		return false;
		// 	};
		// 	if (subject === "") {
		// 		subject = "No Subject";
		// 	} else if (!subjectReg.test(subject)) {
		// 		console.log('foo');
		// 		$('label#subject_error', $form).append('. Please use alphanumeric characters').show();
		// 		$('input#subject', $form).focus();
		// 		return false;
		// 	};
		// 	if (message === "") {
		// 		$('label#message_error').show();
		// 		$('textarea#message', $form).focus();
		// 		return false;
		// 	}

		// 	form = {
		// 		"token": token,
		// 		"name": name,
		// 		"email": email,
		// 		"subject": subject,
		// 		"message": message
		// 	}

		// 	$.ajax({
		// 			url: cmcr_url.template_url + '/contact.php',
		// 			type: 'post',
		// 			data: $.param(form),
		// 			success: function (data) {
		// 				// console.log(data);
		// 				// var result = {};
		// 				var result = $.parseJSON(data);
		// 				if (result['success']) {
		// 				$('.message').append('<p>'+result['message']+'</p>');
		// 				$('.message').fadeIn(500, function(){
		// 					setTimeout(function(){
		// 						closeOverlay();
		// 						$('input#name', $form).val('');
		// 						$('input#email', $form).val('');
		// 						$('input#subject', $form).val('');
		// 						$('textarea#message', $form).val('');
		// 					},3500);
		// 				});
		// 				} else {
		// 					// console.log(data);
		// 					$('.message').append('<p>'+result['message']+'</p>');
		// 				};

		// 			}
		// 		});
		// }

		// $('#js-mailto').click(function(e){
		// 	e.preventDefault();
		// 	$('html, body').animate({scrollTop : 0}, 300);
		// 	openOverlay();
		// 	$(document).keydown(function(e) {
		// 		if (e.keyCode === 27) {
		// 			closeOverlay();
		// 		}
		// 	});
		// });
		// $('.exit-form').click(function(e){
		// 	e.preventDefault();
		// 	closeOverlay();
		// });


		// $overlay.click(function(e) {
		// 	if (e.target.id === 'overlay') {
		// 		closeOverlay();
		// 	};
		// })

	});
})(jQuery);

// })(jQuery, this);