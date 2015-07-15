if (typeof Kaplan == 'undefined') { Kaplan = {}; }
console.log('  .oooooo.   oooo                           oooo   o8o                                                 \n d8P\'  \`Y8b  \`888                           \`888   \`\"\'                                                 \n888           888 .oo.    .oooo.   oooo d8b  888  oooo   .ooooo.  ooo. .oo.  .oo.    .ooooo.  oooo d8b \n888           888P\"Y88b  \`P  )88b  \`888\"\"8P  888  \`888  d88\' \`88b \`888P\"Y88bP\"Y88b  d88\' \`\"Y8 \`888\"\"8P \n888           888   888   .oP\"888   888      888   888  888ooo888  888   888   888  888        888     \n\`88b    ooo   888   888  d8(  888   888      888   888  888    .o  888   888   888  888   .o8  888     \n \`Y8bood8P\'  o888o o888o \`Y888\"\"8o d888b    o888o o888o \`Y8bod8P\' o888o o888o o888o \`Y8bod8P\' d888b    \n');
console.log('Created by Charliemcr http://charliemcr.com');

Kaplan = {
	init: function(){
		// Kaplan.foo();
		// Kaplan.toggleNav();
		Kaplan.nav();
		Kaplan.closeMenu();
		Kaplan.contactSubmit();
		Kaplan.overlayEvents();
		Kaplan.bodyHeight();
		Kaplan.scrollLogo();
	},
	foo: function(){
		console.log('foo');
	},
	toggleNav: function(){
		if (jQuery('#site-wrapper').hasClass('show-nav')) {
			// Do things on Nav Close
			jQuery('#site-wrapper').removeClass('show-nav');
		} else {
			// Do things on Nav Open
			jQuery('#site-wrapper').addClass('show-nav');
		}
	},
	nav: function(){
		jQuery('.toggle-nav').click(function() {
			Kaplan.toggleNav();
		});

		jQuery('.exit-off-canvas').click(function() {
			Kaplan.toggleNav();
		});
	},
	closeMenu: function(){
		function run(){
			if (window.innerWidth > 767 && jQuery('#site-wrapper').hasClass('show-nav')) {
				jQuery('#site-wrapper').removeClass('show-nav');
			};
		}
		run();
		jQuery(window).on('resize', function(){
			run();
		});
	},
	convertHtmlToText: function(input){
		var inputText = input,
	    	returnText = "" + inputText;

	    //-- remove BR tags and replace them with line break
	    returnText=returnText.replace(/<br>/gi, "\n");
	    returnText=returnText.replace(/<br\s\/>/gi, "\n");
	    returnText=returnText.replace(/<br\/>/gi, "\n");

	    //-- remove P and A tags but preserve what's inside of them
	    returnText=returnText.replace(/<p.*>/gi, "\n");
	    returnText=returnText.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 ($1)");

	    //-- remove all inside SCRIPT and STYLE tags
	    returnText=returnText.replace(/<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi, "");
	    returnText=returnText.replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi, "");
	    //-- remove all else
	    returnText=returnText.replace(/<(?:.|\s)*?>/g, "");

	    //-- get rid of more than 2 multiple line breaks:
	    returnText=returnText.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim, "\n\n");

	    //-- get rid of more than 2 spaces:
	    returnText = returnText.replace(/ +(?= )/g,'');

	    //-- get rid of html-encoded characters:
	    returnText=returnText.replace(/&nbsp;/gi," ");
	    returnText=returnText.replace(/&amp;/gi,"&");
	    returnText=returnText.replace(/&quot;/gi,'"');
	    returnText=returnText.replace(/&lt;/gi,'<');
	    returnText=returnText.replace(/&gt;/gi,'>');

	    //-- return
	    return returnText;
	},
	ajaxSubmit: function(){
		var $ = jQuery,
			$form = $('#contactForm'),
			form = {},
			nameReg = /^[a-zA-Z0-9 ]{2,30}$/,
			emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
			subjectReg = /^(?=.*[A-Z0-9])[\w.,!?"'\/$ ]+$/i,
			name = Kaplan.convertHtmlToText($('input#name', $form).val()),
			email = Kaplan.convertHtmlToText($('input#email', $form).val()),
			subject = Kaplan.convertHtmlToText($('input#subject', $form).val()),
			message = Kaplan.convertHtmlToText($('textarea#message', $form).val()),
			token = $('input#token', $form).val();

		$('.error').hide();
		if (name === "") {
			$('label#name_error', $form).show();
			$('input#name', $form).focus();
			return false;
		} else if (!nameReg.test(name)) {
			$('label#name_error', $form).append('. Please use alphanumeric characters').show();
			$('input#name', $form).focus();
			return false;
		};
		if (email === "") {
			$('label#email_error', $form).show();
			$('input#email', $form).focus();
			return false;
		} else if (!emailReg.test(email)) {
			$('label#email_error', $form).html("").append('Please use alpha').show();
			$('input#email', $form).focus();
			return false;
		};
		if (subject === "") {
			subject = "No Subject";
		} else if (!subjectReg.test(subject)) {
			console.log('foo');
			$('label#subject_error', $form).append('. Please use alphanumeric characters').show();
			$('input#subject', $form).focus();
			return false;
		};
		if (message === "") {
			$('label#message_error').show();
			$('textarea#message', $form).focus();
			return false;
		}

		form = {
			"token": token,
			"name": name,
			"email": email,
			"subject": subject,
			"message": message
		}

		$.ajax({
				url: cmcr_url.template_url + '/contact.php',
				type: 'post',
				data: $.param(form),
				success: function (data) {
					// console.log(data);
					// var result = {};
					var result = $.parseJSON(data);
					if (result['success']) {
					$('.message').append('<p>'+result['message']+'</p>');
					$('.message').fadeIn(500, function(){
						setTimeout(function(){
							Kaplan.closeOverlay();
							$('input#name', $form).val('');
							$('input#email', $form).val('');
							$('input#subject', $form).val('');
							$('textarea#message', $form).val('');
						},3500);
					});
					} else {
						// console.log(data);
						$('.message').append('<p>'+result['message']+'</p>');
					};

				}
			});
		},
		contactSubmit: function(){
			jQuery('#contactForm').submit(function(e){
				e.preventDefault();
				Kaplan.ajaxSubmit();
			});
		},
		setOverlayHeight: function (){
			var overlay = jQuery('#overlay');
			overlay.css({'height': jQuery('#site-wrapper').height() + "px"});
		},
		openOverlay: function(){
			var overlay = jQuery('#overlay');
			overlay.addClass('show');
			Kaplan.setOverlayHeight();
		},
		closeOverlay: function(){
			var overlay = jQuery('#overlay');
			overlay.removeClass('show');
			overlay.css({'height': '0px'});
		},
		overlayEvents: function(){
			jQuery('#js-mailto').click(function(e){
				e.preventDefault();
				jQuery('html, body').animate({scrollTop: 0}, 300);
				Kaplan.openOverlay();
				jQuery(document).keydown(function(e){
					if (e.keyCode === 27) {
						Kaplan.closeOverlay();
					};
				});
			});
			jQuery('.exit-form').click(function(e){
				e.preventDefault();
				Kaplan.closeOverlay();
			});
			jQuery('#overlay').click(function(e){
				if (e.target.id === 'overlay') {
					Kaplan.closeOverlay();
				};
			});
		},
		getWindowWidth: function(){
			// function run() {
				return window.innerWidth;
			// }
			// run();
			// jQuery(window).resize(function(){
			// 	run();
			// });
		},
		getWindowHeight: function(){
			// function run() {
				return window.innerHeight;
			// }
			// run();
			// jQuery(window).resize(function(){
			// 	run();
			// });
		},
		getWrapperWidth: function(){
			// function run() {
				// console.log(jQuery('#js-width').width());
				return jQuery('#js-width').width();
			// }
			// run();
			// jQuery(window).resize(function(){
			// 	run();
			// });
		},
		bodyHeight: function(){
			function run() {
				jQuery('#site-canvas').css({
					'min-height': Kaplan.getWindowHeight()
				});
			}
			run();
			jQuery(window).resize(function(){
				run();
			});
		},
		scrollLogo: function(){
			jQuery(window).scroll(function(){
				var scroll = jQuery(document).scrollTop(),
					logo = jQuery('.logo');
				if (scroll > 120) {
					logo.addClass('logo-small');
				} else if (scroll === 0) {
					logo.removeClass('logo-small');
				};
			});
		},
		SetSlider: function() {
			// 
			var carousel = jQuery('.carousel-container'),
				images = carousel.find('img'),
				j = 0,
				rightSlider = carousel.find('#js-slide-right');
				leftSlider = carousel.find('#js-slide-left');
			// console.log(carousel);
			// console.log(imageHeight);
			for (var i = 0; i < images.length; i++) {
				// images[i]
				carousel.find('#js-list-count').append('<li><a class="js-count" id="list-item-'+i+'"><span></span></a></li>');
				// console.log(images.eq(i).attr('data-src'));
				images.eq(i).attr('src',images.eq(i).attr('data-src'));
			};
			function run() {
				var controlOffset = ((Kaplan.getWrapperWidth()-imageWidth)/2)-32;
				carousel.find('.carousel').width(Kaplan.getWrapperWidth()*imageLength);
				carousel.find('.carousel').css({'margin-left': -Kaplan.getWrapperWidth()*j+'px'});
				carousel.find('.js-image').width(Kaplan.getWrapperWidth());

				if (controlOffset > -32) {
					leftSlider.css('margin-left', controlOffset+'px');
					rightSlider.css('margin-right', controlOffset+'px');
				} else {
					leftSlider.css('margin-left', '-32px');
					rightSlider.css('margin-right', '-32px');
				};
			}
			function buttonColor(target) {
				target.addClass('slide-control-active');
				window.setTimeout(function(){
					target.removeClass('slide-control-active');
				},500);
			}
			function activeListItem() {
				carousel.find('#js-list-count li').removeClass('active');
				carousel.find('#js-list-count li').eq(j).addClass('active');
			}
			function moveRight() {
				j++;
				if (j < imageLength) {
					carousel.find('.carousel').animate({'margin-left': -Kaplan.getWrapperWidth()*j+'px'}, 500, 'swing');
					buttonColor(rightSlider);
					activeListItem();
				} else {
					carousel.find('.carousel').animate({'margin-left': '0px'}, 500, 'swing');
					buttonColor(leftSlider);
					j = 0;
				};
			}
			function moveLeft() {
				j--;
				if (j >= 0) {
					carousel.find('.carousel').animate({'margin-left': -Kaplan.getWrapperWidth()*j+'px'}, 500, 'swing');
					buttonColor(leftSlider);
					activeListItem();
				} else j = 0;
			}
			run();
			jQuery(window).resize(function(){
				run();
			});
			rightSlider.click(function(e){
				e.preventDefault();
				moveRight();
			});
			leftSlider.click(function(e){
				e.preventDefault();
				moveLeft();
			});
			jQuery(document).keydown(function(e) {
				if (e.keyCode === 37) {
					moveLeft();
				} else if (e.keyCode === 39) {
					moveRight();
				}
			});
			jQuery('.js-count').click(function(e){
				e.preventDefault();
				k = jQuery(this).parent().index();
				if (j < k) {
					buttonColor(rightSlider);
				} else if (j > k) {
					buttonColor(leftSlider)
				};
				j = k;
				carousel.find('.carousel').animate({'margin-left': -Kaplan.getWrapperWidth()*j+'px'}, 500, 'swing');
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
				if (jQuery('.carousel-container').has(evt.target).length > 0) {
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
		}
}

;(function($){
	$(document).ready(function() {
	Kaplan.init();

	});
})(jQuery);