/*
//nav show/hide when scrolling
jQuery(function () {
	var visible = true;
	var jq_header = jQuery('body > header');
	var jq_body = jQuery('body');
	var last_position = 0;

	function make_visible(vis) {
		if (vis) {
			jq_header.removeClass('hidden');
		} else {
			jq_header.addClass('hidden');
		}
	}

	setInterval(function () {
		var p = getPageScroll();

		if (p == last_position)
			return;

		if (jq_body.hasClass('menu-open')) {
			last_position = p;
			return;
		}

		if (p < last_position || p < 160) {
			if (!visible) {
				visible = true;
				make_visible(true);
			}
		} else if (visible) {
			visible = false;
			make_visible(false);
		}

		last_position = p;
	}, 100);
});
*/

//main menu
jQuery(function () {
	var submenu_hovered = false;
	var hovered_ids = {};
	var tmr_close = 0;
	var last_hover = 0;
	var min_width = 980;

	jQuery("header .nav-main > ul > li:not(.btn) > a").each(function () {
		var jq_a = jQuery(this);
		var id = jq_a.parent().attr("id");

		jq_a.hover(
			function () {
				last_hover = Date.now();
				hovered_ids[id] = true;
				show_menu(id);
			},
			function () {
				hovered_ids[id] = false;
				restart_close_timer();
			}
		);
		jq_a.on("keydown", function (ev) {
			if (ev.keyCode == 13) {
				//escape
				if (
					Date.now() - last_hover < 750 ||
					typeof hovered_ids[id] == "undefined" ||
					!hovered_ids[id]
				) {
					hovered_ids[id] = true;
					show_menu(id);
					return false;
				}
			}
		});
		jq_a.on("click", function (ev) {
			if (
				Date.now() - last_hover < 250 ||
				typeof hovered_ids[id] == "undefined" ||
				!hovered_ids[id]
			) {
				hovered_ids[id] = true;
				show_menu(id);
				return false;
			}
		});
	});
	jQuery("header").hover(
		function () {
			submenu_hovered = true;
		},
		function () {
			submenu_hovered = false;
			restart_close_timer();
		}
	);
	jQuery('.header-top').on('mouseenter', function() {
		if (submenu_hovered) {
			submenu_hovered = false;
			restart_close_timer();
		}
	}).on('mouseleave', function() {
		submenu_hovered = true;
	});

	function restart_close_timer() {
		clearTimeout(tmr_close);
		tmr_close = setTimeout(function () {
			if (!submenu_hovered) {
				for (var id in hovered_ids) {
					if (hovered_ids[id]) {
						return;
					}
				}
				hide_menu();
			}
		}, 10);
	}

	function show_menu(id) {
		if (window.innerWidth >= min_width) {
			jQuery("header .active").removeClass("active");
			jQuery('header .sub-menus > div > div').hide();
			jQuery('body').addClass('sub-menu-open');

			jQuery("#" + id).addClass("active");
			jQuery("#sub-" + id).show();

			jQuery('header .sub-menus').slideDown(250);
		}
	}

	function hide_menu() {
		if (window.innerWidth >= min_width) {
			jQuery("header .active").removeClass("active");
			jQuery('header .sub-menus').slideUp(250);
			jQuery('body').removeClass('sub-menu-open');
		}
	}
});

//mobile menu
jQuery(function () {
	var open = false;
	var btn = jQuery('.btn-mobile-menu').click(function () {
		open = !open;
		if (open) {
			btn.addClass('open');
			jQuery('#mobile-menu').slideDown(250);
			jQuery('html,body').css({
				overflow: 'hidden',
				position: 'relative',
				height: '100%'
			});
		} else {
			btn.removeClass('open');
			jQuery('#mobile-menu').slideUp(250);
			jQuery('html,body').css({
				overflow: '',
				position: '',
				height: ''
			});
		}
		return false;
	});

	jQuery('.m-main-nav > div > a').click(function() {
		var jq = jQuery(this);
		var div = jq.siblings('.sub-menu-item');
		if (jq.hasClass('open')) {
			jq.removeClass('open');
			div.slideUp(250);
		} else {
			jq.addClass('open');
			div.slideDown(250);
		}
		return false;
	});
});

//search overlay
jQuery(function() {
	var open = false;
	jQuery('header .search a').click(function() {
		open = !open;
		if(open) {
			jQuery(this).addClass('open');
			jQuery('header .search-overlay').fadeIn(250).find('input').focus();
			jQuery('header').one('mouseleave', function() {
				if (open) {
					jQuery('header .search a').click();
				}
			});
		} else {
			jQuery(this).removeClass('open');
			jQuery('header .search-overlay').fadeOut(250);
		}
		return false;
	});
});

//footer
jQuery(function() {
	var jq_footer = jQuery('body > footer');
	var jq_spacer = jQuery('#footer-spacer');
	var last_h = 0;
	setInterval(function() {
		var h = jq_footer.outerHeight();
		if (h != last_h) {
			last_h = h;
			jq_spacer.css('height', last_h);
		}
	});
});

//wide wrapper
jQuery(function() {
	jQuery('.wide').each(function() {
		jQuery(this).parent().addClass('wide-parent');
	});
});

//credentials slider
jQuery(function() {

	jQuery('.logo-slider').each(function() {
		var jq = jQuery(this);
		var next_page_interval = jq.data('slider-interval');
		var animate_time = jq.data('animate-time');

		var slider = jq.children('div');
		var slider_children = slider.children();
		var slider_l = slider.position().left;
		var slider_w = 0;
		var first_visible_child = false;
		var next_hidden_child = false;
		var last_hidden_child = false;
		var direction = 1; //1 = right, -1 = left

		function init(delta, allow_centering) {
			if (!jq.is(':visible'))
				return;

			if (typeof allow_centering == 'undefined') {
				allow_centering = false;
			}

			slider_w = jq.width();
			first_visible_child = next_hidden_child = last_hidden_child = false;

			if (typeof delta == 'undefined')
				delta = 0;

			//only show children that are completely visible
			var hidden_children = 0;
			slider_children.each(function() {
				var child = jQuery(this);
				var left = child.position().left;
				var width = child.width();
				if (
					(left >= slider_l && left + width <= slider_l + slider_w) ||
					(left >= slider_l - delta && left + width <= slider_l + slider_w - delta)
					) {
					child.css('opacity',1);
					if (first_visible_child == false) {
						first_visible_child = child;
					}
				} else {
					hidden_children++;
					child.css('opacity',0);
					if (first_visible_child) {
						//an item was visible
						if (next_hidden_child == false) {
							next_hidden_child = child;
						}
					} else {
						last_hidden_child = child;
					}
				}
			});
			if (allow_centering) {
				if (hidden_children == 0) {
					slider.css({
						width: '100%',
						'justify-content':'center'
					})
				} else {
					slider.css({
						width: '',
						'justify-content':''
					});
				}
			}
		}

		function next_page() {
			if (!jq.is(':visible'))
				return;
			init();

			if (direction == 1 && next_hidden_child == false) {
				direction = -1;
			} else if (direction == -1 && last_hidden_child == false) {
				direction = 1;
			}

			var next_target = 0;
			if (direction == 1) {
				//right
				if (next_hidden_child) {
					next_target = next_hidden_child.position().left;
				}
			} else {
				if (last_hidden_child) {
					var min_left = last_hidden_child.position().left + last_hidden_child.width() - slider_w; 
					next_target = last_hidden_child.position().left;
					while (last_hidden_child.position().left > min_left) {
						next_target = last_hidden_child.position().left;
						var prev = last_hidden_child.prev();
						if (prev.length) {
							last_hidden_child = prev;
						} else {
							break;
						}
					}
				}
			}

			var old_left = slider_l;
			slider_l = next_target;
			slider.css('transform', 'translateX(-' + slider_l + 'px)');

			if (last_hidden_child == false && next_hidden_child == false && slider_l == 0) {
				slider.css({
					width: '100%',
					'justify-content':'center'
				});
			} else {
				slider.css({
					width: '',
					'justify-content':''
				});
			}

			var delta = slider_l - old_left;
			init(delta); //first run init and make sure the current page and next page are visible
			setTimeout(function() {
				//once the animation is complete, hide items that shouldn't be in view
				init();
			}, animate_time);
		}
		
		window.addEventListener('resize', function() {
			init(0, true);
		}, {
			passive: true
		});
		setInterval(function() {
			next_page();
		}, next_page_interval);

		init(0, true);
	});
});

//testimonials slider
jQuery(function() {
	jQuery('.testimonial-slideshow').each(function() {
		var jq = jQuery(this);
		var logo_page = 0;

		slider.init({
			selector: jq.find('.ts-slider'),
			show_buttons: false,
			show_prev_next: false,
			move_to_nearest_mode: 'left',
			infinite_scroll: true,
			after_create: function(slider_instance) {
				var btn_prev = jQuery('<a href="#" class="btn-prev lnk-arrow-left">Prev</a>');
				var btn_next = jQuery('<a href="#" class="btn-next lnk-arrow-right">Next</a>');

				jq.find('.ts-controls').append(btn_prev, btn_next);

				btn_prev.click(function() {
					slider_instance.prev();
					return false;
				});
				btn_next.click(function() {
					slider_instance.next();
					return false;
				});

				jq.find('.ts-logos > div > div').each(function() {
					var logo_btn = jQuery(this);
					var ind = logo_btn.index();
					logo_btn.click(function() {
						slider_instance.move_to_index(ind*1, 1);
					});
				});
			},
			index_update: function(slider_instance, index) {
				var cur_slide = jq.find('.index-' + index);
				slider_instance.get_jq().height(cur_slide.children('div').outerHeight());
				jq.find('.ts-logos .active').removeClass('active');
				
				var active_logo = jq.find('.ts-logos > div > div:nth-child(' + (index+1) + ')');
				active_logo.addClass('active');

				//move 5 items at a time when the active item isn't visible
				var slider = jq.find('.ts-logos > div');
				var current_index_page = Math.floor(active_logo.index() / 5);
				if (current_index_page != logo_page) {
					logo_page = current_index_page;
					var pos = jq.find('.ts-logos > div > div:nth-child(' + ((logo_page*5)+1) + ')').position().left;
					slider.css('transform', 'translateX(-' + pos + 'px)');
				}
			}
		});


		function resize() {
			jq.find('.ts-logos > div > div').width(Math.ceil(jq.children('div').width() / 5));
			
			var slider = jq.find('.ts-logos > div');
			var pos = jq.find('.ts-logos > div > div:nth-child(' + ((logo_page*5)+1) + ')').position().left;
			slider.css('transform', 'translateX(-' + pos + 'px)')
		}

		jQuery(window).resize(function() {
			resize();
		});

		resize();
	});
});

// Show-Hide (accordion) section
jQuery(function() {
	jQuery('.hide-reveal-section .item').each(function() {
		var jq = jQuery(this);
		var btn = jq.children('.item-title');
		var area = jq.children('.content-wrap');

		btn.click(function() {
			if (jq.hasClass('open')) {
				jq.removeClass('open');
				area.slideUp(250);
			} else {
				jq.addClass('open');
				area.slideDown(250);
			}
			var h3_child = btn.children('h3');
			if (h3_child.length) {
				var h = h3_child.data('hash');
				if (h) {
					location.hash = h;
				}
			}
		});
	});
});

// Scroll To Section
// If url has a hash, find the section with the same data-hash name
jQuery(function() {
	var hash = window.location.hash.substring(1);

	function scroll_to_section(section, delay) {
		var jq_header = jQuery('body > header');
		setTimeout(function() {
			section.click();
			jQuery('body,html').animate({ scrollTop: section.offset().top - jq_header.height() - jq_header.position().top }, 1000);
		}, delay);
	}
	
	if (hash.length != 0 && hash.indexOf('/') == -1) {
		var section = jQuery('[data-hash="'+hash+'"]');
		if (section.length) {
			scroll_to_section(section, 1000);
		}
	}

	jQuery('a[href*="#"]:not([href="#"])').click(function(ev) {
		try {
			var hash = jQuery(this).attr('href');
			hash = hash.substr(hash.indexOf('#') + 1);
			var section = jQuery('div[data-hash="'+hash+'"]');
			if (section.length) {
				scroll_to_section(section, 0);
			}
		} catch (ex) {

		}
	});
});


jQuery(function() {
	jQuery('.blog-slider').each(function() {
		var jq = jQuery(this);
		slider.init({
			selector: jq.find('.scrolling-section > div'),
			move_to_nearest_mode: 'left',
			infinite_scroll: false,
			show_buttons: false,
			show_prev_next: false,
			after_create: function(slider) {
				jq.find('.btn-prev').click(function(ev) {
					ev.preventDefault();
					slider.prev();
				})
				jq.find('.btn-next').click(function(ev) {
					ev.preventDefault();
					slider.next();
				})
			},
			index_update: function() {
				var max_h = 0;
				jq.find('li > div').each(function() {
					var h = jQuery(this).height();
					if (h > max_h)
						max_h = h;
				});
				jq.find('.scrolling-section').height(max_h);
			}
		});
		jq.find('a').click(function(ev) {
			if (jq.find('.dragging').length) {
				ev.preventDefault();
			}
		});
	});
});

//parallax
jQuery(function() {
	//required to be >0 and <=1
	var parallax_factor = 0.6; //when the window is Y pixels past the top of the image, 
							//the image will move down Y multiplied by the parallax factor
							//a value of 1 would make it appear fixed to the top of the browser
							//a value of 0 would make it scroll normally
	
	jQuery('.parallax').each(function() {
		var jq = jQuery(this);
		var bg = jq.children('.bg');

		function update() {
			var obj_top = jq.offset().top;
			var y = getPageScroll() - obj_top;

			if (obj_top < 200) {
				y += obj_top;
			}

			if (y < 0)
				y = 0;
			else
				y *= parallax_factor;

			if (y > 300)
				y = 300;
			
			bg.css('transform', 'translateY(' + y + 'px)');
		}

		document.addEventListener('scroll', function() {
			update();
		}, {
			passive: true
		});
	});
});


//hero multiple parallax
jQuery(function() {
	jQuery('.multi-bg').each(function() {
		var jq = jQuery(this);
		function update() {
			var scroll_pos = getPageScroll();
			var obj_start = jq.offset().top;
			var obj_height = jq.height();

			var obj_center = obj_start + obj_height/2;
			var view_center = scroll_pos + window.innerHeight/2;

			var offset = view_center - obj_center;
			jq.find('.multiple-bg-image').each(function(index) {
				if (index == 0) {
					jQuery(this).css('margin-top', offset / window.innerHeight * window.innerHeight * .2);
				} else {
					var percentage = (index + 1) * 0.2;
					var translateY = (offset / window.innerHeight * window.innerHeight * percentage);
					if (translateY < -100)
						translateY = -100;
					jQuery(this).css('transform', 'translateY(' + translateY + 'px)');
				}
			});
		}

		document.addEventListener('scroll', function() {
			update();
		}, {
			passive: true
		});
		window.addEventListener('resize', function() {
			update();
		}, {
			passive: true
		});

		update();
	});
});

//typing text
jQuery(function() {
	jQuery('.typing-text').each(function() {
		var initial_blinks = 1*getParameterByName('initial_blinks') || 5;
		var blink_speed = 1*getParameterByName('blink_speed') || 450;
		var typing_speed = 1*getParameterByName('typing_speed') || 150;


		//var initial_blinks = 5; //default 5
		//var blink_speed = 500; //ms spent before switching on/off state, default 500
		//var typing_speed = 150; //ms spent per letter, default 150

		var jq = jQuery(this);
		var cursor = jQuery('<span class="cursor off" />');
		var all_letters = [];
		jq.children().each(function() {
			var line = jQuery(this);
			var letters = line.text();
			letters += "\n";
			line.html('');
			for(var i in letters) {
				var letter = jQuery('<span class="letter" />');
				if (letters[i] == "\n")
					letter.html('&nbsp;&nbsp;&nbsp;');
				else					
					letter.text(letters[i]);
				all_letters.push(letter);
				line.append(letter);
			}

		});
		if (all_letters.length) {
			all_letters[0].wrap(cursor);
			cursor = all_letters[0].parent();
		}
		var blink_count = 0;
		var blink = setInterval(function() {
			cursor.toggleClass('off');
			blink_count++;
			if (blink_count >= initial_blinks) {
				clearInterval(blink);
				type_next_letter();
			}
		}, blink_speed);

		var letter_index = 0;
		function type_next_letter() {
			all_letters[letter_index].addClass('visible');

			if (letter_index < all_letters.length - 1) {
				setTimeout(function() {
					all_letters[letter_index].unwrap();

					letter_index++;
							
					all_letters[letter_index].wrap(cursor);
					
					cursor = all_letters[letter_index].parent();
					
					type_next_letter();
				}, typing_speed);
			} else {
				//finished
				setInterval(function() {
					cursor.toggleClass('off');
				}, blink_speed);
			}
		}

		jq.addClass('ready');				
	});
});

jQuery('.cards-section.reveal-card .card').mouseenter(function() {
    var bgColor = jQuery(this).css('background-color');
    var defaultBg = jQuery(this).data('hover-title-color');
    var hoverBg = jQuery(this).data('hover-bg');

    jQuery(this).addClass(hoverBg+'-bg').removeClass(defaultBg+'-bg');
    if (hoverBg == 'near-black') {
        jQuery(this).find('.title').css('color', bgColor);
    }

    var contentHeight = jQuery(this).find('.height-wrap').outerHeight(true);
    jQuery(this).find('.content').css('height', contentHeight);
});
jQuery('.cards-section.reveal-card .card').mouseleave(function() {
    var nearBlack = '#1f1f1f';
    var defaultBg = jQuery(this).data('hover-title-color');
    var hoverBg = jQuery(this).data('hover-bg');

    jQuery(this).addClass(defaultBg+'-bg').removeClass(hoverBg + '-bg');
    if (hoverBg == 'near-black') {
        jQuery(this).find('.title').css('color', nearBlack);
    }
    jQuery(this).find('.content').css('height', '');
});
jQuery(window).resize(resizeCards);
function initCards() {
    jQuery('.cards-section.reveal-card').each(function() {
        var maxContentHeight = 0;
        var maxCardHeight = jQuery(this).find('.card').outerHeight();
        jQuery(this).find('.card').each(function() {
            var contentHeight = jQuery(this).find('.height-wrap').outerHeight(true);
            if (contentHeight > maxContentHeight) {
                maxContentHeight = contentHeight;
            }
        });
        jQuery(this).attr('data-default-height', maxCardHeight).find('.card').css('height', maxCardHeight + maxContentHeight);
    });
}
function resizeCards() {
    jQuery('.cards-section.reveal-card').each(function() {
        var maxContentHeight = 0;
        var maxCardHeight = jQuery(this).data('default-height');
        jQuery(this).find('.card').each(function() {
            var contentHeight = jQuery(this).find('.height-wrap').outerHeight(true);
            if (contentHeight > maxContentHeight) {
                maxContentHeight = contentHeight;
            }
        });
        jQuery(this).find('.card').css('height', maxCardHeight + maxContentHeight);
    });
}

initCards();

jQuery(function() {
	jQuery('.upcoming-events a.view-all').click(function(ev) {
		ev.preventDefault();
		var jq = jQuery(this);
		var container = jq.parents('.upcoming-events');
		if (container.hasClass('open')) {
			container.removeClass('open');
			jq.text('View All');
			container.find('.hide-next').fadeOut(250, function() {
				jQuery(this).removeAttr('style').removeClass('hide-next');
			});
		} else {
			container.find('.event-list > div:not(:visible)').fadeIn(250).addClass('hide-next');
			container.addClass('open');
			jq.text('Collapse');
		}
	});
});

jQuery(function() {
	window.open_request_a_demo = function(instant) {
		if (typeof instant == 'undefined') {
			instant = false;
		}
		jQuery('#request-demo-background').fadeIn(instant ? 0 : 250);
		var frm = jQuery("#request-demo-form")
			.show()
			.css('transform', 'translateX(100%)');

		if (instant) {
			frm.css('transition', 'none');
		}

		setTimeout(function() {
			if (!instant) {
				frm.css('transition', 'all 1s');
			}
			setTimeout(function() {
				frm.css('transform', '');
			}, 30);
		}, 30);
		jQuery('body').css('overflow', 'hidden');
	};
	window.close_request_a_demo = function() {
		jQuery('#request-demo-background').fadeOut(250);
		var frm = jQuery("#request-demo-form").css('transform', 'translateX(100%)');
		setTimeout(function() {
			frm.hide().removeAttr('style');
		}, 1000);
		jQuery('body').css('overflow', '');
	};

	jQuery('a[href="#request-a-demo"]').click(function(ev) {
		open_request_a_demo();
	});
	jQuery('#request-demo-background').click(function() {
		close_request_a_demo();
	});
	if (location.hash == '#request-a-demo') {
		open_request_a_demo();
	}

	if (location.href.indexOf('thank_you') > -1) {
		open_request_a_demo(true);
	}

	jQuery('#request-demo-form .btn-close').click(function(ev) {
		ev.preventDefault();
		close_request_a_demo();
	});
});

//platform demo
jQuery(function() {
	slider.init({
		selector: '.mobile-platform-slider',
		move_to_nearest_mode: 'left',
		after_create: function(slider_inst) {
			setInterval(function() {
				if (typeof slider_inst.update_height != 'undefined') {
					slider_inst.update_height();
				}
			}, 500);
		},
		index_update: function(slider_inst, index) {
			slider_inst.update_height = function() {
				var item = slider_inst.get_slides()[index];
				var slider_jq = slider_inst.get_jq();
				var child_height = item.children().outerHeight();
				if (slider_jq.height() < child_height) {
					slider_jq.height(child_height);
				}
			}
		}
	});
	jQuery('.platform-demo').each(function() {
		var jq = jQuery(this);
		var active_index = 0;

		var menu_links = jq.find('.pd-menu > a');

		setInterval(function() {
			if (window.innerWidth <= 900)
				return;
			//find first section where view_position is less than the bottom of the section
			var view_position = getPageScroll() + window.innerHeight/2;
			var cur_index = 0;

			jq.find('.pd-sections > div').each(function(index) {
				var jq_me = jQuery(this);
				var section_position = jq_me.offset().top + jq_me.outerHeight();
				cur_index = index;
				if (view_position < section_position) {
					return false;
				}
			});

			if (active_index != cur_index) {
				active_index = cur_index;
				menu_links.filter('.active').removeClass('active');
				menu_links.eq(active_index).addClass('active');
				jq.find('.pd-images > div > div:not(.hidden)').addClass('hidden');
				jq.find('.pd-images > div > div:nth-child(' + (active_index+1) + ')').removeClass('hidden');
			}

		}, 300);


		jq.find('.pd-sections > div').each(function() {
			var section = jQuery(this);
			var jq_accordion = section.find('.accordion');
			var section_index = section.index();
			var jq_images = jq.find('.pd-images > div > div:nth-child(' + (section_index+1) + ')');
			var busy = false;

			jq_accordion.find('.title').click(function() {
				if (busy || window.innerWidth <= 900)
					return;

				var jqt = jQuery(this);
				var parent = jqt.parent();

				if (parent.hasClass('active'))
					return;

				busy = true;

				jq_accordion.find('.active').removeClass('active').find('.description').slideUp(250);
				
				parent.addClass('active').find('.description').slideDown(250);

				var index = parent.index();
				var cur_visible = jq_images.find('img:not(.hidden)');
				var next_visible = jq_images.find('img').eq(index);

				next_visible.removeClass('hidden');
				cur_visible.css({
					position: 'absolute',
					zIndex: 7,
					opacity: 1
				});
				setTimeout(function() {
					cur_visible.animate({opacity: 0}, 250, function() {
						cur_visible.removeAttr('style').addClass('hidden');
						busy = false;
					});
				}, 30);
			});

		});
	});
});
jQuery(function() {
	function is_same_site(href) {
		if (!href || !href.length) {
			return true;
		}
		if (href[0] == '#') {
			return true;
		}
		if (href.indexOf('javascript:') > -1) {
			return true;
		}
		if (href.indexOf(location.host) > -1) {
			return true;
		}
		if (href.indexOf('/') == 0) {
			return true;
		}
		
		return false;
	}
	jQuery('header .featured-item .fi-title a').each(function() {
		var jqt = jQuery(this);
		var href = jqt.attr('href');
		if (is_same_site(href)) {
			jqt.removeClass('lnk-up-right');
		}
	});
	jQuery('body').on('click', 'a', function() {
		var href = jQuery(this).attr('href');

		if (is_same_site(href)) {
			return true;
		} else {
			window.open(href);
			return false;
		}
	});
});
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


jQuery(function() {
	var delay_before_showing_site = 1*getParameterByName('delay_before_showing_site');

	if (!delay_before_showing_site) {
		delay_before_showing_site = 7000;
	}

	var instant = (location.hash == '#skip-intro' || location.href.indexOf('thank_you') > -1);

	//after 7 seconds, show the site
	setTimeout(function() {
		jQuery('body').addClass('home-animation-complete');
		jQuery('body > header').css('opacity',0).animate({opacity:1}, instant ? 0 : 750);
	}, instant ? 0 : delay_before_showing_site);

	//make sure we are at the top
	window.scrollTo(0,0);
});

jQuery(function() {
	//top scrolling area
	//try: everything fixed with a spacer for scrolling (height of bottom content plus header)
	//when they scroll down enough, switch it to relative and change height to match header only
	jQuery('.home-section-1').each(function() {
		var jq = jQuery(this);
		var spacer = jQuery('#home-intro-spacer');
		var list = jQuery('.home-section-1 .list');
		var content = jQuery('.home-section-1 .content');
		var remainder = jQuery('#after-home-section');

		var list_height = 0;
		var list_offset = 0;
		var list_transform = 0;
		var content_height = 0;

		var remainder_height = 0;
		var jq_height = 0;
		var is_normal = false;

		var visible = true;

		
		function check_visible() {
			var now_visible = true;
			if (is_normal && (remainder.offset().top - getPageScroll()) <= 0) {
				now_visible = false;
			}
			if (now_visible != visible) {
				visible = now_visible;
				if (visible) {
					jq.show();
				} else {
					jq.hide();
				}
			}
			return visible;
		}

		function update_dimensions() {
			if (visible) {
				list_height = list.outerHeight();
				remainder_height = remainder.outerHeight();
				jq_height = jq.outerHeight();
				content_height = content.outerHeight();
				if (list_height < content_height) {
					list_height = content_height;
				}
				spacer.height(list_height);
				update();
			}
		}

		function update() {
			var p = getPageScroll();
			if (p < 0)
				p = 0;

			list_transform = p;

			list.css('transform', 'translateY(' + -list_transform + 'px)');			
			list_offset = list.offset().top - list_transform;

			if (list_offset + list_height - jq_height < 0) {
				if (!is_normal) {
					remainder.addClass('normal');
					is_normal = true;
					spacer.height(list_height);
				}
			} else {
				if (is_normal) {
					is_normal = false;
					remainder.removeClass('normal');
					spacer.height(list_height + remainder_height);
				}
			}
		}

		jQuery(window).scroll(function() {
			if (check_visible()) {
				update();
			}
		});
		setInterval(function() {
			if (check_visible()) {
				update_dimensions();
			}
		}, 100);

		update_dimensions();
	});
});

//home solutions graphic
jQuery(function() {
	jQuery('.home-solutions').each(function() {
		var jq = jQuery(this);

		wait_for_visible(jq.find('.graphic-text h2'), function() {
			var canvas = document.createElement('canvas');
			jq.find('.graphic').append(canvas);

			canvas.width = 1336;
			canvas.height = 626;

			var ctx = canvas.getContext('2d');

			function get_distance(p1, p2) {
				return Math.sqrt((p2[0]-p1[0])*(p2[0]-p1[0]) + (p2[1]-p1[1])*(p2[1]-p1[1]))
			}
			function get_angle(p1, p2) {
				return Math.atan2(p2[1]-p1[1], p2[0]-p1[0]);
			}

			var data = [
				[-59,578],
				[49,550],
				[183,577],
				[360,521],
				[519,399],
				[592,519],
				[720,576],
				[860,351],
				[994,409],
				[1113,577],
				[1249,68],
				[1357,25]
			];

			var last_render = 0;
			var goal_distance = 0;
			var current_point_index = 0;
			var current_distance = 0;

			function draw_segment(current_point, next_point, next_length, angle) {
				if (current_distance + next_length > goal_distance) {
					//draw between these points
					var goal_x = current_point[0] + (goal_distance - current_distance) * Math.cos(angle);
					var goal_y = current_point[1] + (goal_distance - current_distance) * Math.sin(angle);


					ctx.beginPath();
					ctx.moveTo(current_point[0], current_point[1]);
					ctx.lineTo(goal_x, goal_y);
					ctx.stroke();
				} else {
					//draw line between points					
					ctx.beginPath();
					ctx.moveTo(current_point[0], current_point[1]);
					ctx.lineTo(next_point[0], next_point[1]);					
					ctx.stroke();

					current_distance += next_length;

					current_point_index++;
					next_segment();
				}						
			}

			function next_segment() {
				if (current_point_index + 1 < data.length) {
					var current_point = data[current_point_index];
					var next_point = data[current_point_index+1];
					var next_length = get_distance(current_point, next_point);
					var angle = get_angle(current_point, next_point);
	
					draw_segment(current_point, next_point, next_length, angle);
				}
			}


			var goal_dots = 0;
			var last_dot = 0;
			function draw_dots() {
				//when at least half the segments have been drawn, draw 1 every 300ms
				if (current_point_index >= data.length/2) {
					if (Date.now() - last_dot > 300) {
						goal_dots++;
						last_dot = Date.now();
					}
				}
				if (goal_dots > current_point_index) {
					goal_dots = current_point_index;
				}
				for(var i=0; i<goal_dots; i++) {
					ctx.beginPath();
					ctx.arc(data[i][0], data[i][1], 21/2, 0, Math.PI*2, false);
					ctx.fillStyle = '#ffffff';
					ctx.fill();
				}

				if (current_point_index + 1 >= data.length) {
					requestAnimationFrame(draw_dots);
				}
			}

			function draw() {
				if (last_render == 0) {
					last_render = Date.now();
				}
				var render_delta =  Date.now() - last_render;
				last_render = Date.now();

				goal_distance += render_delta * 0.8;

				if (current_point_index + 1 < data.length) {
					ctx.clearRect(0,0,canvas.width, canvas.height);
					ctx.lineWidth = 6;
					ctx.strokeStyle = '#4dddba';
					ctx.lineCap = 'round';

					current_point_index = current_distance = 0;

					next_segment();

					draw_dots();

					requestAnimationFrame(draw);
				} else {
					//all done
					requestAnimationFrame(draw_dots);
					restart_timer();
				}
			}

			function restart_timer() {
				setTimeout(function() {
					goal_distance = 0;
					current_point_index = 0;
					current_distance = 0;
					goal_dots = last_dot = 0;
					last_render = 0;
					draw();
				}, 4000);
			}



			draw();
		}, 1000);
	});
});
jQuery(function() {

	jQuery('.home-slides').each(function() {
		var jq = jQuery(this);
		var active_index = 0;
		var busy = false;
		var items = [];
		jq.find('.text > div').each(function() {
			items.push(jQuery(this));
		});

		var images = [];
		jq.find('.img-container > div').each(function() {
			images.push(jQuery(this));
		});

		function update() {
			if (busy)
				return;

			var positions = [];
			
			for (var i in items) {
				positions.push(items[i].offset().top);
			}
			
			if (positions.length) {
				var p = getPageScroll() + window.innerHeight / 2;
				
				var smallest_index = 0;
				for(var i=1; i<positions.length; i++) {
					if (positions[i] < p) {
						smallest_index = i;
					}
				}

				if (smallest_index != active_index) {
					var cur_active = images[active_index]
					var next_active = images[smallest_index];
					cur_active.removeClass('active').css('opacity', 1);
					next_active.addClass('active');
					active_index = smallest_index;

					busy = true;
					setTimeout(function() {
						cur_active.css('opacity', '');
						busy = false;
					}, 500);
				}
			}

		}


		document.addEventListener('scroll', function() {
			update();
		}, {
			passive: true
		});
		setInterval(function() {
			update();
		}, 500);
	});
});
jQuery(function() {
	jQuery('.home-transforming-marketing').each(function() {
		var jq = jQuery(this);
		var jq_changes = jQuery('.home-brand-intelligence, .home-transforming-marketing');
		var is_blue = true;

		function update() {
			var page_scroll = getPageScroll() + window.innerHeight * 0.5;
			var item_position = jq.offset().top;
			
			if (page_scroll >= item_position) {
				if (is_blue) {
					is_blue = false;
					jq_changes.removeClass('light-blue-bg').addClass('near-black-bg');
				}
			} else if (!is_blue) {
				is_blue = true;
				jq_changes.addClass('light-blue-bg').removeClass('near-black-bg');
			}
		}

		document.addEventListener('scroll', function() {
			update();
		}, {
			passive: true
		});
	});
	jQuery('.home-transforming-marketing .logos').each(function() {
		var jq = jQuery(this);

		setInterval(function() {
			jq.children().each(function(index) {
				var delay = index * 250;
				var jq_me = jQuery(this);
				var cur = jq_me.find(':not(.inactive)');

				var next = cur.next();
				if (!next.length) {
					next = jq_me.children().first();
				}

				setTimeout(function() {
					cur.addClass('inactive');
					next.removeClass('inactive');
				}, delay);
			});
		}, 2000);
	});
});
//generic archive script
jQuery(function() {
	function fld_archive(jq) {
		var me = this;
		var tmr_busy_update = 0;
		var last_hash = '';

		me.archive_name = jq.data('name');
		me.busy = false;
		me.filters = {};
		me.hidden_static_filters = {};

		function set_filters_to_hash() {
			var h = location.hash.split(/\//g);
			if (h.length >= 3) {
				me.filters = {};
				for(var i=1; i+1<h.length; i+=2) {
					var name = h[i];
					var val = h[i+1];
					me.filters[name] = decodeURIComponent(val);
				}
				if (typeof me.filters['page'] == 'undefined') {
					me.filters.page = 1;
				}
			}
			notify_filter_update();
			me.filters_updated(false);
		}

		function hash_listener() {
			setInterval(function() {
				if (!me.busy) {
					var h = location.hash;
					if (h != last_hash) {
						set_filters_to_hash();
					}
				}
			}, 250);
		}

		function init() {
			me.found_posts = jq.data('found-posts');
			me.offset = jq.data('offset');
			me.max_num_pages = jq.data('max-num-pages');
			me.posts_per_page = jq.data('posts-per-page');
			me.filters.page = ~~((me.offset / me.posts_per_page) + 1);
			
			one_time_setup();

			if (location.hash.indexOf('/page/') > -1) {
				set_filters_to_hash();
			}

			recurring_setup();
			hash_listener();
		}
		function notify_filter_update() {
			if (typeof window['fld_archive_filter_update_' + me.archive_name] != 'undefined') {
				var func = window['fld_archive_filter_update_' + me.archive_name];
				func(jq, me);
			}
		}
		function recurring_setup() {
			if (typeof window['fld_archive_recurring_setup_' + me.archive_name] != 'undefined') {
				var setup_func = window['fld_archive_recurring_setup_' + me.archive_name];
				setup_func(jq, me);
			}
		}
		function one_time_setup() {
			if (typeof window['fld_archive_one_time_setup_' + me.archive_name] != 'undefined') {
				var setup_func = window['fld_archive_one_time_setup_' + me.archive_name];
				setup_func(jq, me);
			}
		}

		function handle_result(result, append_result) {
			//result may be an object or false
			//if result is an object, check result.success
			if (result && result.success) {
				me.found_posts = result.results['found_posts'];
				me.offset = result.results['offset'];
				me.max_num_pages = result.results['max_num_pages'];
				me.posts_per_page = result.results['posts_per_page'];
			}

			if (typeof window['fld_archive_handle_result_' + me.archive_name] != 'undefined') {
				var handle_func = window['fld_archive_handle_result_' + me.archive_name];
				handle_func(jq, me, result, append_result);

				recurring_setup();
			}

			if (typeof me.last_scroll_pos != 'undefined') {
				jQuery('body,html').scrollTop(me.last_scroll_pos);
			}
		}

		me.filters_updated = function(append_result) {
			if (!me.busy) {
				me.busy = true;

				var params = {
					action: 'fld_archive_get_data',
					archive_name: me.archive_name,
					filters: me.filters,
					hidden_static_filters: me.hidden_static_filters
				};

				var hash = '#/';
				for(var filter_name in me.filters) {
					hash += encodeURIComponent(filter_name) + '/' + encodeURIComponent(me.filters[filter_name]) + '/';
				}
				location.hash = hash;
				last_hash = hash;

				var jqxhr = jQuery.get(
					'/wp-admin/admin-ajax.php',
					params,
					function(result) {
						me.busy = false;
						me.last_scroll_pos = getPageScroll();
						if (result.success) {
							handle_result(result, append_result);
						} else {
							handle_result(false, append_result);
						}
					},
					'json'
				);
				jqxhr.fail(function() {
					me.busy = false;
					handle_result(false, append_result);
				});


			} else {
				if (tmr_busy_update == 0) {
					tmr_busy_update = setInterval(function() {
						if (!me.busy) {
							clearInterval(tmr_busy_update);
							tmr_busy_update = 0;
							me.filters_updated(append_result);
						}
					}, 250);
				}
			}
		}

		me.next_page = function(append) {
			if (~~me.filters.page + 1 <= ~~me.max_num_pages) {
				me.filters.page++;

				me.filters_updated(append);
			}
		};

		me.update_filter = function(filter_name, filter_value) {
			if (filter_value === null) {
				delete me.filters[filter_name];
			} else {
				me.filters[filter_name] = filter_value;
			}
			me.filters.page = 1;
			me.filters_updated(false);
		}

		init();
	}


	jQuery('.fld-archive').each(function() {
		new fld_archive(jQuery(this));
	});
});


//begin site specific changes
function std_filter_update(jq, archive, type) {
	function apply_standard_filter(filter_name) {
		if (typeof archive.filters[filter_name] != 'undefined') {
			var filter_val = archive.filters[filter_name];
			var filter_values = filter_val.split(",");

			jq.find('input[name="' + filter_name + '"]').prop('checked', false);
			for (var i in filter_values) {
				var selector = 'input[name="' + filter_name + '"][value="' + filter_values[i] + '"]';
				jq.find(selector).prop('checked', true);
			}
			
			jq.find('.filter-type[data-type="' + filter_name + '"] .btn-clear').removeClass('disabled');
		} else {
			//clear out filter
			jq.find('input[name="' + filter_name + '"]').prop('checked', false);
			jq.find('.filter-type[data-type="' + filter_name + '"] .btn-clear').addClass('disabled');
		}
		archive['update_label_' + filter_name]();
		archive['reset_active_string_' + filter_name]();
	}
	function update_date_filter() {
		var updated = false;

		if (typeof archive.filters['date'] != 'undefined') {
			var filter_val = archive.filters['date'];
			var filter_values = filter_val.split("-");
			if (filter_values.length == 4) {
				updated = true;
				jq.find('select[name="month_start"]').val(filter_values[0]);
				jq.find('select[name="year_start"]').val(filter_values[1]);
				jq.find('select[name="month_end"]').val(filter_values[2]);
				jq.find('select[name="year_end"]').val(filter_values[3]);

				jq.find('.filter-type[data-type="date"] .btn-clear').removeClass('disabled');
			}
		}
		if (!updated) {
			jq.find('select[name="month_start"]').val('');
			jq.find('select[name="year_start"]').val('');
			jq.find('select[name="month_end"]').val('');
			jq.find('select[name="year_end"]').val('');

			jq.find('.filter-type[data-type="date"] .btn-clear').addClass('disabled');
		}

		archive.update_label_date();
	}

	apply_standard_filter('topic');
	if (type == 'blog_posts') {
		apply_standard_filter('author');
	} else if (type == 'news') {
		apply_standard_filter('publication')
	}

	update_date_filter();


	archive.check_clear_button();
}

function fld_archive_filter_update_blog_case_study(jq, archive) {
	std_filter_update(jq, archive, 'blog_posts');
}
function fld_archive_filter_update_blog_brief(jq, archive) {
	std_filter_update(jq, archive, 'blog_posts');
}

function fld_archive_filter_update_news(jq, archive) {
	std_filter_update(jq, archive, 'news');
}


function fld_archive_recurring_setup_news(jq, archive) {
	fld_archive_recurring_setup_blog_brief(jq, archive);
}
function fld_archive_recurring_setup_blog_case_study(jq, archive) {
	fld_archive_recurring_setup_blog_brief(jq, archive);
}

function fld_archive_recurring_setup_blog_brief(jq, archive) {
	jq.find('.btn-load-more').click(function(ev) {
		archive.next_page(true);
		ev.preventDefault();
		ev.stopPropagation();
	});
}


function fld_archive_one_time_setup_news(jq, archive) {
	fld_archive_one_time_setup_blog_brief(jq, archive);
}
function fld_archive_one_time_setup_blog_case_study(jq, archive) {
	fld_archive_one_time_setup_blog_brief(jq, archive);
}
function fld_archive_one_time_setup_blog_brief(jq, archive) {
	archive.hidden_static_filters.ignore_ids = jq.data('ignored_ids');

	var opened_filter = false;
	
	var btn_clear_all = jq.find('.filter-bar .btn-clear');
	btn_clear_all.click(function(ev) {
		ev.preventDefault();
		jq.find('.filter-buttons .btn-clear:not(.disabled)').click();
		jq.find('.filter-buttons .btn-apply:not(.disabled)').click();
	});
	function check_clear_button() {
		var active_clear_buttons = jq.find('.filter-buttons .btn-clear:not(.disabled)');
		if (active_clear_buttons.length) {
			btn_clear_all.show();
		} else {
			btn_clear_all.hide();
		}
	}
	
	archive.check_clear_button = check_clear_button;

	
	var btn_apply_all = jq.find('.filter-details-top .btn-apply');
	btn_apply_all.click(function(ev) {
		ev.preventDefault();
		jq.find('.filter-buttons .btn-apply').click();
		jQuery('.filter-details-top .btn-cancel').click();

	});

	jq.find('.filter-type a.btn-filter').click(function(ev) {
		ev.preventDefault();

		var btn = jQuery(this);
		if (btn.hasClass('open')) {
			btn.removeClass('open');
			btn.next('div').slideUp(250);
		} else {
			btn.addClass('open');
			btn.next('div').slideDown(250);
		}
	});
	jq.find('.filter-bar a.btn-filter').click(function(ev) {
		ev.preventDefault();
		var jq_me = jQuery(this);
		if (opened_filter) {
			opened_filter.removeClass('open');
			jQuery('.filter-type[data-type="' + opened_filter.data('type') + '"]').slideUp(250);
			if (opened_filter.index() == jq_me.index() ) {
				opened_filter = false;
				return;
			}
		}
		opened_filter = jq_me;
		jq_me.addClass('open');
		jQuery('.filter-type[data-type="' + opened_filter.data('type') + '"]').slideDown(250);

	}).each(function() {
		jQuery(this).width(jQuery(this).width() + 15);
	});

	jq.find('.filter-type[data-type="date"]').each(function() {
		var jq_filter = jQuery(this);

		var month_start = jq_filter.find('select[name="month_start"]');
		var year_start = jq_filter.find('select[name="year_start"]');
		var month_end = jq_filter.find('select[name="month_end"]');
		var year_end = jq_filter.find('select[name="year_end"]');

		var jq_clear = jq_filter.find('.btn-clear');
		var jq_apply = jq_filter.find('.btn-apply');

		var last_month_start = '';
		var last_year_start = '';
		var last_month_end = '';
		var last_year_end = '';

		function update_active_states() {
			last_month_start = month_start.val();
			last_year_start = year_start.val();
			last_month_end = month_end.val();
			last_year_end = year_end.val();
		}

		function select_change() {
			if (this.value.length) {
				jQuery(this).addClass('has-value');
			} else {
				jQuery(this).removeClass('has-value');
			}
			update_active_states();

			if (last_month_start != "" || 
				last_year_start != "" || 
				last_month_end != "" || 
				last_year_end != "") {
					jq_clear.removeClass('disabled');
			} else {
				jq_clear.addClass('disabled');
			}

			check_clear_button();

			jq_apply.removeClass('disabled');
			btn_apply_all.removeClass('disabled');
		}
		archive.update_label_date = function() {			
			update_active_states();

			var label = 'Date';

			var date_start = '';
			if (last_month_start.length && last_year_start.length) {
				date_start = last_month_start + '/' + last_year_start.substr(-2);
			} else if (last_year_start.length) {
				date_start = last_year_start.substr(-2);
			}
			var date_end = '';
			if (last_month_end.length && last_year_end.length) {
				date_end = last_month_end + '/' + last_year_end.substr(-2);
			} else if (last_year_end.length) {
				date_end = last_year_end.substr(-2);
			}

			if (date_start.length || date_end.length) {
				label += ' <span>(';
				if (date_start.length && date_end.length) {
					label += date_start + '-' + date_end;
				} else if (date_start.length) {
					label += date_start;
				} else {
					label += 'Any-' + date_end;
				}
				label += ')</span>';
			}
			var btn = jq.find('a.btn-filter[data-type="date"]');

			btn.html(label).width('').width(btn.width() + 15);
		};

		jq_clear.click(function(ev) {
			ev.preventDefault();
			jq_filter.find('select').val('');
			jq_clear.addClass('disabled');
			check_clear_button();
			jq_apply.removeClass('disabled');			
			btn_apply_all.removeClass('disabled');
			update_active_states();
		});
		jq_apply.click(function(ev) {
			ev.preventDefault();
			if (!jq_apply.hasClass('disabled')) {
				if (last_month_start || last_year_start || last_month_end || last_year_end) {
					archive.update_filter('date', last_month_start + '-' + last_year_start + '-' +  last_month_end + '-' + last_year_end);
				} else {
					archive.update_filter('date', null);
				}
				jq_apply.addClass('disabled');

				archive.update_label_date();
			}
		});

		month_start.change(select_change);
		year_start.change(select_change);
		month_end.change(select_change);
		year_end.change(select_change);
				
	});

	jq.find('.filter-type[data-type="topic"], .filter-type[data-type="author"], .filter-type[data-type="publication"]').each(function() {
		var jq_filter = jQuery(this);
		var filter_type = jq_filter.data('type');

		var filter_label = '';
		if (filter_type == 'topic') { 
			filter_label = 'Topic';
		} else if (filter_type == 'author') {
			filter_label = 'Author';
		} else if (filter_type == 'publication') {
			filter_label = 'Publication';
		}

		var last_active_string = '';

		archive['reset_active_string_' + filter_type] = function() {
			last_active_string = get_active_string();
		};

		function get_active_string() {
			var active = jq_filter.find('input:checked');
			var active_str = '';
			active.each(function() {
				if (active_str.length)
					active_str += ',';
				active_str += jQuery(this).val();
			});
			return active_str;
		}


		jq_filter.find('input').change(function() {
			var active = jq_filter.find('input:checked');
			if (active.length == 0) {
				jq_clear.addClass('disabled');
			} else {
				jq_clear.removeClass('disabled');
			}
			check_clear_button();
			if (get_active_string() != last_active_string) {
				jq_apply.removeClass('disabled');
				btn_apply_all.removeClass('disabled');
			} else {
				jq_apply.addClass('disabled');
			}
		});

		var jq_clear = jq_filter.find('.btn-clear');
		jq_clear.click(function(ev) {
			ev.preventDefault();
			jq_filter.find('input:checked').prop('checked', false);
			jq_clear.addClass('disabled');
			check_clear_button();
			if (get_active_string() != last_active_string) {
				jq_apply.removeClass('disabled');
				
			btn_apply_all.removeClass('disabled');
			} else {
				jq_apply.addClass('disabled');
			}
			
		});

		archive['update_label_' + filter_type] = function() {
			var label = filter_label;
			var active_count = jq_filter.find('input:checked').length;
			if (active_count > 0) {
				label += ' <span>(' + active_count + ')</span>';
			}
			var btn = jq.find('a.btn-filter[data-type="' + filter_type + '"]');

			btn.html(label).width('').width(btn.width() + 15);
		};

		var jq_apply = jq_filter.find('.btn-apply');
		jq_apply.click(function(ev) {
			ev.preventDefault();
			if (!jq_apply.hasClass('disabled')) {
				var active_str = get_active_string();
				if (active_str.length) {
					archive.update_filter(filter_type, active_str);
				} else {
					archive.update_filter(filter_type, null);
				}
				last_active_string = active_str;
				jq_apply.addClass('disabled');

				archive['update_label_' + filter_type]();
			}
		});
	});

	jQuery('.mobile-filter-bar').click(function() {
		jQuery('.filter-details').fadeIn(250);
		jQuery('body > header').fadeOut(250);
		jQuery('body').css('overflow', 'hidden');
	});
	jQuery('.filter-details-top .btn-cancel').click(function(ev) {
		ev.preventDefault();
		jQuery('.filter-details').fadeOut(250);
		jQuery('body > header').fadeIn(250);
		jQuery('body').css('overflow', '');
	});
}


function fld_archive_handle_result_news(jq, archive, result, append_result) {
	fld_archive_handle_result_blog_brief(jq, archive, result, append_result);
}
function fld_archive_handle_result_blog_case_study(jq, archive, result, append_result) {
	fld_archive_handle_result_blog_brief(jq, archive, result, append_result);
}
function fld_archive_handle_result_blog_brief(jq, archive, result, append_result) {
	if (typeof window.archive_cta == 'undefined') {
		window.archive_cta = jq.find('.archive-cta');
	}


	if (result === false || !result.success) {
		if (typeof window.archive_cta != 'undefined') {
			window.archive_cta.detach();
		}
		
		var jq_results = jq.find('.results');
		jq_results.html('<div class="no-results">There are no results that match your filters.</div>');

		if (typeof window.archive_cta != 'undefined') {
			jq_results.append(window.archive_cta);
		}
	} else {
		if (append_result) {
			var result_html = jQuery('<div>' + result.output + '</div>');
			
			var html = '';
			result_html.find('.list-result .wrap').each(function() {
				html += jQuery(this).html();
			});
			jq.find('.list-result .wrap').last().append(html);
			
			jq.find('.results').find('.load-more').remove();
			var load_more = result_html.find('.load-more');
			if (load_more.length) {
				jq.find('.results').append(load_more);
			}
		} else {			
			if (typeof window.archive_cta != 'undefined') {
				window.archive_cta.detach();
			}
			
			jq.find('.results').html(result.output);

			if (typeof window.archive_cta != 'undefined') {
				jq.find('.results .archive-cta').replaceWith(window.archive_cta);
			}
		}
	}
}
var slider = {
	instances: [],

	init: function (opts) {
		if (typeof opts == 'undefined')
			opts = {};
		if (typeof opts.selector == 'undefined')
			opts.selector = '.slider';
		if (typeof opts.drag == 'undefined')
			opts.drag = 2;
		if (typeof opts.min_speed == 'undefined')
			opts.min_speed = 1;
		if (typeof opts.slide_spacing == 'undefined')
			opts.slide_spacing = 0;
		if (typeof opts.move_to_nearest_mode == 'undefined')
			opts.move_to_nearest_mode = 'center';
		if (typeof opts.infinite_scroll == 'undefined')
			opts.infinite_scroll = true;
		if (typeof opts.after_create == 'undefined')
			opts.after_create = function (slider_instance) { };
		if (typeof opts.index_update == 'undefined')
			opts.index_update = function (slider_instance, index) { };
		if (typeof opts.show_prev_next == 'undefined')
			opts.show_prev_next = true;
		if (typeof opts.show_buttons == 'undefined')
			opts.show_buttons = true;
		if (typeof opts.zoom_button == 'undefined')
			opts.zoom_button = false;
		if (typeof opts.fullscreen_button == 'undefined')
			opts.fullscreen_button = false;

		jQuery(opts.selector).each(function () {
			slider.instances.push(new slider.slider_instance(jQuery(this), opts));
		});
	},

	slider_instance: function (jq, opts) {
		if (jq.hasClass('slider-init'))
			return;

		var me = this;

		var slides = [];
		var jq_width = 0;
		var container = jq.find('ul');
		var jq_win = jQuery(window);
		var jq_btns = false;
		var left_position = 0;
		var tmr_impulse = 0;
		var tmr_nearest = 0;
		var max_position = 0;
		var max_item_position = 0;
		var extra_before = [];
		var extra_before_width = 0;
		var extra_after = [];
		var extra_after_width = 0;

		me.get_jq = function () {
			return jq;
		};

		var busy = false;
		me.prev = function () {
			if (busy)
				return;
			var cur = this.get_current_index();
			var prev_index = cur - 1;
			if (prev_index < 0)
				prev_index = slides.length - 1;

			if (opts.infinite_scroll)
				me.move_to_index(prev_index, -1);
			else
				me.move_to_index(prev_index, prev_index < cur ? -1 : 1)
		};

		me.next = function () {
			if (busy)
				return;
			var cur = this.get_current_index();
			var next_index = cur + 1;
			if (next_index >= slides.length)
				next_index = 0;
			if (opts.infinite_scroll)
				me.move_to_index(next_index, 1);
			else
				me.move_to_index(next_index, next_index < cur ? -1 : 1)
		};


		/*
			direction - 1 - closest position to right
						-1 - closest position to left
		*/
		me.move_to_index = function (new_index, direction, instant) {
			if (busy)
				return;
			busy = true;

			setTimeout(function () {
				busy = false;
			}, 1000);

			if (slides.length < 2)
				return;
			if (typeof instant == 'undefined')
				instant = false;

			var cur_index = this.get_current_index();
			if (cur_index == new_index && !instant) {
				return;
			}

			var distance_from_left = new_index < cur_index ? (cur_index - new_index) : (slides.length + cur_index - new_index);
			var distance_from_right = new_index > cur_index ? (new_index - cur_index) : (slides.length + new_index - cur_index);

			var total_length = 0;
			if (direction == 1) {
				var i = cur_index;
				for (var n = 0; n < distance_from_right; n++) {
					total_length += slides[i].width() + opts.slide_spacing;
					i++;
					if (i >= slides.length) {
						i = 0;
					}
				}
			} else {
				var i = cur_index;
				for (var n = 0; n < distance_from_left; n++) {
					total_length -= slides[i].width() + opts.slide_spacing;
					i--;
					if (i < 0) {
						i = slides.length - 1;
					}
				}
			}

			move_to_nearest_animation(left_position - total_length, instant);

			me.update_index(new_index);
		}

		me.get_slides = function () {
			return slides;
		};

		me.update_index = function (new_index) {
			if (typeof new_index == 'undefined') {
				new_index = me.get_current_index();
			}
			if (opts.show_buttons && jq_btns) {
				jq_btns.find('.active').removeClass('active');
				jq_btns.find('a:nth-child(' + (new_index + 1) + ')').addClass('active');
			}

			opts.index_update(me, new_index);
		}
		me.impulse = function (amt) {
			impulse(amt);
		}

		me.get_current_index = function () {
			var min_index = 0;

			if (opts.move_to_nearest_mode == 'center') {
				var center_pos = jq_width / 2 - left_position;
				var min_distance = -1;
				for (var i in slides) {
					var slide_pos = slides[i].position().left + slides[i].width() / 2;
					var dist = Math.abs(center_pos - slide_pos);
					if (min_distance == -1 || dist < min_distance) {
						min_distance = dist;
						min_index = i;
					}
				}
				if (extra_before.length) {
					for (var i in extra_before) {
						var slide_pos = extra_before[i].position().left + extra_before[i].width() / 2;
						var dist = Math.abs(center_pos - slide_pos);
						if (dist < min_distance) {
							min_index = (slides.length - (i % slides.length));
							min_distance = dist;
						}
					}
				}
				if (extra_after.length) {
					for (var i in extra_after) {
						var slide_pos = extra_after[i].position().left + extra_after[i].width() / 2;
						var dist = Math.abs(center_pos - slide_pos);
						if (dist < min_distance) {
							min_index = i % slides.length;
							min_distance = dist;
						}
					}
				}
			} else if (opts.move_to_nearest_mode == 'left') {
				var left_pos = -left_position;
				var min_distance = -1;
				for (var i in slides) {
					var slide_pos = slides[i].position().left;
					var dist = Math.abs(left_pos - slide_pos);
					if (min_distance == -1 || dist < min_distance) {
						min_distance = dist;
						min_index = i;
					}
				}
				if (extra_before.length) {
					for (var i in extra_before) {
						var slide_pos = extra_before[i].position().left;
						var dist = Math.abs(left_pos - slide_pos);
						if (dist < min_distance) {
							min_index = (slides.length - (i % slides.length));
							min_distance = dist;
						}
					}
				}
				if (extra_after.length) {
					for (var i in extra_after) {
						var slide_pos = extra_after[i].position().left;
						var dist = Math.abs(left_pos - slide_pos);
						if (dist < min_distance) {
							min_index = i % slides.length;
							min_distance = dist;
						}
					}
				}
			}

			return ~~min_index;
		};
		function create_zoom_button(slide) {
			var btn_zoom = jQuery('<a href="#" class="btn-zoom"></a>');
			btn_zoom.click(function (ev) {
				var src = slide.css('background-image');
				src = src.replace('url(', '').replace(')', '').replace(/\"/g, "").replace(/\'/g, "");

				new image_zoom(jq, src);

				ev.stopPropagation();
				ev.preventDefault();
				return false;
			});

			return btn_zoom;
		}

		function create_fullscreen_button() {
			var is_fullscreen = false;
			var btn = jQuery('<a href="#" class="btn-fullscreen"></a>');
			btn.click(function () {
				is_fullscreen = !is_fullscreen;

				if (is_fullscreen) {
					jq.addClass('fullscreen');
					var index = me.get_current_index();
					jq.css({
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						height: 'auto',
						width: 'auto'
					});
					jq.find('.container').css('height', '100%');
					jq.find('ul').css('height', '100%');
					jq.find('li').each(function () {
						jQuery(this).css({ width: '100%' });
					});
					jq_width = 0;
					jq_win.resize();
					me.move_to_index(index, 1, true);
					impulse(0.5);
				} else {
					jq.removeClass('fullscreen');
					var index = me.get_current_index();
					jq.css({
						position: '',
						top: '',
						left: '',
						right: '',
						bottom: '',
						height: '',
						width: ''
					});
					jq.find('.container').css('height', '');
					jq.find('ul').css('height', '100%');
					jq.find('li').each(function () {
						jQuery(this).css({ width: '' });
					});
					jq_width = 0;
					jq_win.resize();
					me.move_to_index(index, 1, true);
					impulse(0.5);
				}
				return false;
			});

			jq.append(btn);
		}
		function init() {
			jq.addClass('slider-init').css('position', 'relative');
			container.css({
				position: 'absolute',
				top: 0,
				left: 0,
				transform: 'translateX(0px)',
				width: '100%',
				height: '100%',
				display: 'block',
				'list-style': 'none'
			});
			container.wrap('<div class="container" style="position:relative;overflow:hidden;width:100%;" />');

			container.find('li').each(function () {
				var slide = jQuery(this);
				slide.css({
					position: 'absolute',
					'list-style': 'none',
					display: 'block',
					height: '100%',
					'background-size': 'cover',
					'background-repeat': 'no-repeat',
					'background-position': 'center'
				});
				slides.push(slide);

				if (opts.zoom_button) {
					slide.append(create_zoom_button(slide));
				}
			});

			if (opts.fullscreen_button) {
				create_fullscreen_button();
			}

			calculate();

			position();

			width_listener();

			touch_listener();

			adjust_left_position();

			move_to_nearest(true, true);

			check_infinite_slides();

			create_navigation_buttons();

			opts.after_create(me);
		}
		function create_navigation_buttons() {
			if (opts.show_prev_next && slides.length > 1) {
				var btn_prev = jQuery('<a href="#" class="btn-prev"></a>');
				btn_prev.click(function () {
					me.prev();
					return false;
				});

				var btn_next = jQuery('<a href="#" class="btn-next"></a>');
				btn_next.click(function () {
					me.next();
					return false;
				});
				jq.append(btn_prev, btn_next);
			}
			if (opts.show_buttons && slides.length > 1) {
				function create_button(index) {
					var btn = jQuery('<a href="#"></a>');
					btn.click(function () {
						me.move_to_index(index, index > me.get_current_index() ? 1 : -1);
						return false;
					});
					if (index == 0)
						btn.addClass('active');
					return btn;
				}

				jq_btns = jQuery('<div class="buttons" />');
				for (var i = 0; i < slides.length; i++) {
					jq_btns.append(create_button(i));
				}
				jq.append(jq_btns);
			}
		}
		function check_infinite_slides() {
			if (opts.infinite_scroll && slides.length) {
				extra_before_width = 0;
				for (var i in extra_before) {
					var w = extra_before[i].width() + opts.slide_spacing;
					extra_before[i].css({ left: -extra_before_width - w });
					extra_before_width += w;
				}
				while (extra_before_width < jq_width * 2) {
					var next_index = slides.length - 1 - extra_before.length;
					while (next_index < 0)
						next_index += slides.length;

					var new_slide = slides[next_index].clone(true, true);
					new_slide.addClass('extra' + extra_before.length);
					container.prepend(new_slide);
					var w = new_slide.width() + opts.slide_spacing;
					if (w <= opts.slide_spacing)
						return;
					new_slide.css({ left: -extra_before_width - w });
					extra_before_width += w;
					extra_before.push(new_slide);
				}

				extra_after_width = 0;
				for (var i in extra_after) {
					extra_after[i].css({ left: max_position + extra_after_width });
					var w = extra_after[i].width() + opts.slide_spacing
					extra_after_width += w;
				}
				while (extra_after_width < jq_width * 2) {
					var next_index = extra_after.length;
					while (next_index >= slides.length)
						next_index -= slides.length;

					var new_slide = slides[next_index].clone(true, true);
					new_slide.addClass('extra' + extra_after.length);
					container.append(new_slide);
					new_slide.css({ left: max_position + extra_after_width });
					var w = new_slide.width() + opts.slide_spacing;
					if (w <= opts.slide_spacing)
						return;
					extra_after_width += w;
					extra_after.push(new_slide);
				}
			}
		}

		function move_container(left) {

			if (!opts.infinite_scroll) {
				if (left > 0)
					left = 0;
				if (left < -max_item_position)
					left = -max_item_position;
			}
			container.css({
				transform: 'translateX(' + ~~left + 'px)'
			});
			if (typeof opts.x_update != 'undefined')
				opts.x_update(~~left, max_position);
		}
		function move_to_nearest_animation(new_position, instant) {
			if (instant) {
				left_position = new_position;
				move_container(left_position);
				me.update_index();
			} else {
				var iterations = 20;
				var move_delta = (new_position - left_position) / iterations;
				if (move_delta < 1 && move_delta > 0) {
					move_delta = 1;
				} else if (move_delta > -1 && move_delta < 0) {
					move_delta = -1;
				}
				var i = 0;
				clearInterval(tmr_nearest);
				tmr_nearest = setInterval(function () {
					if (i < iterations) {
						left_position += move_delta;
						adjust_left_position();
						i++;
						move_container(left_position);
					} else {
						me.update_index();
						clearInterval(tmr_nearest);
					}
				}, 16);
			}
		}
		function move_to_nearest(instant, first_index) {
			if (typeof instant == 'undefined')
				instant = false;
			if (typeof first_index == 'undefined')
				first_index = false;

			if (opts.move_to_nearest_mode == 'center') {
				var center_pos = jq_width / 2 - left_position;
				var min_distance = -1;
				var min_slide_pos = 0;
				for (var i in slides) {
					var slide_pos = slides[i].position().left + slides[i].width() / 2;
					var dist = Math.abs(center_pos - slide_pos);
					if (first_index) {
						min_slide_pos = slide_pos;
						break;
					} else if (min_distance == -1 || dist < min_distance) {
						min_distance = dist;
						min_slide_pos = slide_pos;
					}
				}
				if (!first_index) {
					if (extra_before.length) {
						for (var i in extra_before) {
							var slide_pos = extra_before[i].position().left + extra_before[i].width() / 2;
							var dist = Math.abs(center_pos - slide_pos);
							if (dist < min_distance) {
								min_slide_pos = slide_pos;
								min_distance = dist;
							}
						}
					}
					if (extra_after.length) {
						for (var i in extra_after) {
							var slide_pos = extra_after[i].position().left + extra_after[i].width() / 2;
							var dist = Math.abs(center_pos - slide_pos);
							if (dist < min_distance) {
								min_slide_pos = slide_pos;
								min_distance = dist;
							}
						}
					}
				}

				move_to_nearest_animation(-min_slide_pos + jq_width / 2, instant);
			} else if (opts.move_to_nearest_mode == 'left') {
				var left_pos = -left_position;
				var min_distance = -1;
				var min_slide_pos = 0;
				for (var i in slides) {
					var slide_pos = slides[i].position().left;
					var dist = Math.abs(left_pos - slide_pos);
					if (first_index) {
						min_slide_pos = slide_pos
						break;
					} else if (min_distance == -1 || dist < min_distance) {
						min_distance = dist;
						min_slide_pos = slide_pos;
					}
				}
				if (!first_index) {
					if (extra_before.length) {
						for (var i in extra_before) {
							var slide_pos = extra_before[i].position().left;
							var dist = Math.abs(left_pos - slide_pos);
							if (dist < min_distance) {
								min_slide_pos = slide_pos;
								min_distance = dist;
							}
						}
					}
					if (extra_after.length) {
						for (var i in extra_after) {
							var slide_pos = extra_after[i].position().left;
							var dist = Math.abs(left_pos - slide_pos);
							if (dist < min_distance) {
								min_slide_pos = slide_pos;
								min_distance = dist;
							}
						}
					}
				}

				move_to_nearest_animation(-min_slide_pos, instant);
			}
		}
		function calculate() {
			jq_width = jq_win.width();
		}
		function position() {
			var left = 0;
			for (var i in slides) {
				slides[i].css({ left: left });

				max_item_position = left;
				left += slides[i].width() + opts.slide_spacing;
			}

			max_position = left;
		}
		function width_listener() {
			jq_win.resize(function () {
				var last_width = jq_width;
				calculate();

				if (last_width != jq_width) {
					position();
					move_to_nearest(true);
					check_infinite_slides();
				}
			});
		}
		function adjust_left_position() {
			if (opts.infinite_scroll && slides.length) {
				if (left_position > 0) {
					left_position -= max_position;
				} else if (left_position < -max_position) {
					left_position += max_position;
				}
			}
		}
		function impulse(speed) {
			if (speed > 4)
				speed = 4;
			else if (speed < -4)
				speed = -4;

			speed *= (1000 / 32);

			var drag = speed > 0 ? opts.drag : -opts.drag;
			stop_impulse();
			tmr_impulse = setInterval(function () {
				if ((drag > 0 && speed < opts.min_speed) || (drag < 0 && speed > -opts.min_speed)) {
					stop_impulse();
					move_to_nearest();
					me.update_index();
				} else {
					if (isNaN(speed) || isNaN(drag)) {
						speed = 0.1;
						drag = 0.1;
					}
					speed -= drag;
					left_position += speed;
					adjust_left_position();
					move_container(left_position);
				}

			}, 16);
		}
		function stop_impulse() {
			clearInterval(tmr_impulse);
		}
		function touch_listener() {
			var start_x = 0;
			var start_time = 0;
			var last_delta = 0;
			var tmr_stop = 0;

			track_movement(jq.children('.container'),
				function (x, y) {
					start_x = x;
					last_delta = 0;
					start_time = Date.now();
					stop_impulse();
					clearInterval(tmr_nearest);
				},
				function (x_delta, y_delta, x, y) {
					last_delta = x - start_x;
					move_container(left_position + last_delta);
					jq.addClass('dragging');
					clearTimeout(tmr_stop);
				},
				function () {
					if (last_delta == 0)
						return;
					left_position += last_delta;
					var elapsed = Date.now() - start_time;
					if (elapsed < 500) {
						var speed = last_delta / elapsed;
						impulse(speed);
					} else {
						adjust_left_position();
						move_to_nearest();
					}

					tmr_stop = setTimeout(function () {
						jq.removeClass('dragging');
					}, 35);
				},
				true, true
			);
		}

		init();

		me.update_index(0);

		return me;
	}
}
function wait_for_dimensions(jq, callback, iterations) {
	if (typeof iterations == 'undefined')
		iterations = 0;

	var item = jq.get(0);
	if (typeof item.naturalWidth != 'undefined' && item.naturalWidth > 0) {
		callback(item.naturalWidth, item.naturalHeight, iterations);
	} else {
		var me = this;
		//slowly increase the time between each call
		setTimeout(function () {
			wait_for_dimensions(jq, callback, ++iterations);
		}, iterations + 1);
	}
}
function image_zoom(container, src) {
	var min_zoom = 1.5;
	var max_zoom = 2.5;
	var zoom = jQuery('<div class="image-zoom" style="position: absolute;z-index: 10000;top: 0;left: 0;right: 0;bottom: 0;overflow: hidden;background:black;"/>');
	var img = jQuery('<img src="' + src + '" style="position:absolute;top:0;left:0;">');
	var btn_close = jQuery('<div class="image-zoom-close" style="position:absolute;z-index:10001;top:0;right:0;cursor:pointer;"><span>X</span></div>');
	var running = true;

	zoom.append(img, btn_close);
	container.append(zoom);

	btn_close.click(function () {
		if (running) {
			running = false;
			zoom.remove();
		}
	});

	wait_for_dimensions(img, function (width, height) {
		var container_width = zoom.width();
		var container_height = zoom.height();

		var max_width = container_width * max_zoom;
		var max_height = container_height * max_zoom;
		var min_width = container_width * min_zoom;
		var min_height = container_height * min_zoom;

		if (width > max_width) {
			height = (max_width / width) * height;
			width = max_width;
		} else if (width < min_width) {
			height = (min_width / width) * height;
			width = min_width;
		}
		if (height > max_height) {
			width = (max_height / height) * width;
			height = max_height;
		} else if (height < min_height) {
			width = (min_height / height) * width;
			height = min_height;
		}

		var top = (container_height - height) / 2;
		var left = (container_width - width) / 2;
		var min_left = -width + container_width;
		var min_top = -height + container_height;
		var updated_left = 0;
		var updated_top = 0;

		img.css({
			width: width,
			height: height,
			top: top,
			left: left
		});

		track_movement(zoom, function () {

		}, function (x_delta, y_delta) {
			updated_top = top + y_delta;
			updated_left = left + x_delta;

			if (updated_top > 0)
				updated_top = 0;
			else if (updated_top < min_top)
				updated_top = min_top;
			if (updated_left > 0)
				updated_left = 0;
			else if (updated_left < min_left)
				updated_left = min_left;

			img.css({
				top: updated_top,
				left: updated_left
			});
		}, function () {
			top = updated_top;
			left = updated_left;
		}, true);
	});
}

function track_movement(jq, start_callback, move_callback, release_callback, track_mouse, ignore_y) {
	var is_down = false;
	var start_x = 0;
	var start_y = 0;

	if (typeof ignore_y == 'undefined')
		ignore_y = false;

	if (typeof track_mouse == 'undefined')
		track_mouse = false;

	if (track_mouse)
		jq.on('mousedown', function (ev) {
			is_down = true;
			start_x = ev.clientX;
			start_y = ev.clientY;
			start_callback(start_x, start_y);
			return false;
		});

	if (track_mouse)
		jq.on('mouseup mouseout', function (ev) {
			if (is_down) {
				is_down = false;
				release_callback();
			}
		});

	if (track_mouse)
		jq.on('mousemove', function (ev) {
			if (is_down) {
				var x_delta = ev.clientX - start_x;
				var y_delta = ev.clientY - start_y;
				move_callback(x_delta, y_delta, ev.clientX, ev.clientY);
				return false;
			}
		});

	jq.on('touchstart', function (ev) {
		var touches = ev.originalEvent.touches;
		if (touches.length >= 1) {
			start_x = touches[0].clientX;
			start_y = touches[0].clientY;
			is_down = true;
			start_callback(start_x, start_y);
		}
	});
	jq.on('touchend', function (ev) {
		if (is_down) {
			is_down = false;
			release_callback();
		}
	});
	jq.on('touchmove', function (ev) {
		var touches = ev.originalEvent.touches;
		if (touches.length >= 1) {
			var x_delta = touches[0].clientX - start_x;
			var y_delta = touches[0].clientY - start_y;
			if (ignore_y && (
				Math.abs(y_delta) > Math.abs(x_delta)
			)) {
				return true;
			}
			move_callback(x_delta, y_delta, touches[0].clientX, touches[0].clientY);
			ev.stopImmediatePropagation();
			ev.preventDefault();

			return false;
		}
	});
}


var FormRules = {
	//form has fld-form-rules
	//fields have .fld-validate-me and data-validate-type
	ruleSets: [],

	init: function () {
		var me = this;
		jQuery('form.fld-form-rules').each(function (index, value) {
			jQuery(this).attr('data-validation-id', index);
			me.ruleSets[index] = {
				form: jQuery(this),
				fields: [],
			};
			me.ruleSets[index].form.find('.fld-validate-me:not(.customselect)').each(function (fieldIndex, fieldValue) {
				var field = jQuery(this);
				field.attr('data-validation-id', fieldIndex);

				var type = field.data('validate-type');

				if (typeof type == "undefined" || type == "") {
					var field_type = field.attr('type');
					if (field.is('select')) {
						type = 'dropdown';
					} else if (field_type == 'email') {
						type = 'email';
					} else if (field_type == 'checkbox') {
						type = 'checkbox';
					} else {
						type = 'text';
					}
				}


				var msg = '';

				if (type == 'email') {
					msg = '*Oops! That&rsquo;s not a valid email address.';
				} else if (type == 'text') {
					msg = '*Please fill out this field.';
				} else if (type == 'checkbox' || type == 'checklist') {
					msg = '*This is a required field.';
				} else if (type == 'dropdown') {
					msg = '*Please select an item in the list.';
				} else if (type == 'credit_card') {
					msg = '*Oops! That&rsquo;s not a valid credit card number. Please enter the number only, no spaces or dashes.';
				}

				var error_text = false;
				if (msg.length > 0) {
					error_text = jQuery('<span class="error-text" style="display:none">' + msg + '</span>');
					if (type == 'checklist' && !jQuery(this).hasClass('selection-boxes')) {
						jQuery(this).append(error_text);
					} else if (type == 'checkbox' || type == 'dropdown') {
						//jQuery(this).parent().after(error_text);
						jQuery(this).after(error_text);
					} else {
						jQuery(this).after(error_text);
					}
				}

				me.ruleSets[index].fields[fieldIndex] = {
					field: field,
					type: type, //text, dropdown, email, credit_card, checkbox, checklist
					error_text: error_text
				};
				field.blur(function () {
					me.validateField(me.ruleSets[index].fields[fieldIndex], false);
				});
				field.change(function () {
					me.validateField(me.ruleSets[index].fields[fieldIndex], false);
				});
				field.keyup(function () {
					me.validateField(me.ruleSets[index].fields[fieldIndex], false);
				});
			});
		});
	},

	validate: function (formJq) {
		var me = this;
		var ruleSet = formJq.data('validation-id');
		var valid = true;
		for (var i = 0; i < me.ruleSets[ruleSet].fields.length; i++) {
			var data = me.ruleSets[ruleSet].fields[i];
			var result = me.validateField(data, valid);
			if (!result) {
				valid = false;
			}
		}

		return valid;
	},

	validateField: function (data, bFocus) {
		var field = data.field;
		var field_val = "";

		if (typeof data.type == 'undefined') {
			data.type = 'text';
		}

		if (field.data('validate-if-visible')) {
			if (!field.is(':visible')) {
				if (data.error_text) {
					data.error_text.hide();
				}
				return true;
			}
		}


		if (data.type == 'text' || data.type == 'dropdown' || data.type == 'email' || data.type == 'credit_card') {
			field_val = field.val();

			if (field.data('default_text') == field_val) {
				field_val = "";
			}

		} else if (data.type == 'checkbox') {
			if (field.prop('checked'))
				field_val = field.val();
			else
				field_val = "";
		} else if (data.type == 'checklist') {
			var list = field.find('input');
			var values = [];
			for (var i = 0; i < list.length; i++) {
				var chk = jQuery(list[i]);
				if (chk.prop('checked'))
					values.push(chk.attr('value'));
			}
		}

		var valid = false;
		if (data.error_text) {
			data.error_text.hide();
		}

		if (data.type == 'dropdown') {
			if (field_val == "") {
				field.addClass('error');
				if (field.parent().children('.customselect').length > 0)
					field.parent().children('.customselect').addClass('error');
				valid = false;
				if (bFocus)
					field.focus();
			} else {
				field.removeClass('error');
				if (field.parent().children('.customselect').length > 0)
					field.parent().children('.customselect').removeClass('error');
				valid = true;
			}
		} else if (data.type == 'text') {
			if ((field_val == "") ||
				(typeof data.minlength != 'undefined' && field_val.length < data.minlength)) {
				field.addClass('error');
				valid = false;
				if (bFocus)
					field.focus();
			} else {
				field.removeClass('error');
				valid = true;
			}
		} else if (data.type == 'credit_card') {
			if (field_val == "" || !this.is_credit_card(field_val)) {
				field.addClass('error');
				valid = false;
				if (bFocus)
					field.focus();
			} else {
				field.removeClass('error');
				valid = true;
			}
		} else if (data.type == 'email') {
			valid = true;
			if (field_val == "") {
				valid = false;
			} else {
				var exp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,16})?$/;
				var re = new RegExp(exp);
				var match = re.exec(field_val);
				if (match == null)
					valid = false;
			}

			if (valid) {
				field.removeClass('error');
			} else {
				field.addClass('error');
				if (bFocus)
					field.focus();
			}
		} else if (data.type == 'checkbox') {
			var fld = field.parent('label');
			if (field_val == "") {
				fld.addClass('error');
				valid = false;
				if (bFocus)
					field.focus();
			} else {
				fld.removeClass('error');
				valid = true;
			}
		} else if (data.type == 'checklist') {
			if (values.length == 0) {
				field.addClass('error');
				valid = false;
				if (bFocus) {
					var pos = field.find('input').parent();
					jQuery('body,html').scrollTop(pos.offset().top - 140);
				}
			} else {
				field.removeClass('error');
				valid = true;
			}
		}

		if (!valid && data.error_text) {
			data.error_text.css('display', 'block');
		}

		field.trigger('fld-error-response');
		return valid;
	},

	is_credit_card: function (number) {
		var sum = 0;
		var mul = 1;

		for (var i = 0; i < number.length; i++) {
			var digit = number.substring(number.length - i - 1, number.length - i);
			var tproduct = parseInt(digit, 10) * mul;
			if (tproduct >= 10)
				sum += (tproduct % 10) + 1;
			else
				sum += tproduct;

			mul = 3 - mul;
		}

		if ((sum % 10) == 0)
			return true;
		else
			return false;
	}
};

var FormValidationErrorResponse = {
	//for error response after input field, just add .error:after css with the message
	errorBoxes: [],

	init: function () {
		var me = this;
		jQuery('form.fld-error-response').each(function (index, value) {
			var form = jQuery(this);
			me.errorBoxes[index] = jQuery('#' + form.data('error-response-box')).length == 0 ? null : jQuery('#' + form.data('error-response-box'));

			form.find('.fld-validate-me').each(function (fieldIndex, fieldValue) {
				var field = jQuery(this);
				field.on('fld-error-response', function () {
					if (field.hasClass('error')) {
						if (me.errorBoxes[index] != null) {
							if (me.errorBoxes[index].find('.' + field.attr('name')).length == 0) {
								me.errorBoxes[index].append('<div class="' + field.attr('name') + ' error-response">' + field.data('error-response-text') + '</div>');
							}
						}

					} else {
						if (me.errorBoxes[index] != null) {
							me.errorBoxes[index].find('.' + field.attr('name')).remove();
						}
					}
				});
			});
		});
	},
}

function getPageScroll() {
	return document.body.scrollTop || jQuery(window).scrollTop();
}

function wait_for_visible(jq, callback, delay_callback) {
	if (jq.length == 0)
		return;

	if (typeof delay_callback == 'undefined')
		delay_callback = 10;

	var jq_win = jQuery(window);

	var chk_timer = setInterval(function () {
		if (jq.is(':visible')) {
			var t = getPageScroll();
			var h = jq_win.height();
			var item_pos = jq.offset().top;
			if (item_pos > t && item_pos < t + h) {
				clearInterval(chk_timer);
				setTimeout(function () {
					callback(jq);
				}, delay_callback);
			}
		}
	}, 250);

	return chk_timer;
}

(function () {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
			|| window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function (callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function () { callback(currTime + timeToCall); },
				timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		};
}());

(function () {
	// Reasonable defaults
	var PIXEL_STEP = 10;
	var LINE_HEIGHT = 40;
	var PAGE_HEIGHT = 800;

	window.normalizeWheel = function (/*object*/ event) /*object*/ {

		var sX = 0, sY = 0,       // spinX, spinY
			pX = 0, pY = 0;       // pixelX, pixelY

		// Legacy
		if ('detail' in event) { sY = event.detail; }
		if ('wheelDelta' in event) { sY = -event.wheelDelta / 120; }
		if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }
		if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }

		// side scrolling on FF with DOMMouseScroll
		if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
			sX = sY;
			sY = 0;
		}

		pX = sX * PIXEL_STEP;
		pY = sY * PIXEL_STEP;

		if ('deltaY' in event) { pY = event.deltaY; }
		if ('deltaX' in event) { pX = event.deltaX; }

		if ((pX || pY) && event.deltaMode) {
			if (event.deltaMode == 1) {          // delta in LINE units
				pX *= LINE_HEIGHT;
				pY *= LINE_HEIGHT;
			} else {                             // delta in PAGE units
				pX *= PAGE_HEIGHT;
				pY *= PAGE_HEIGHT;
			}
		}

		// Fall-back if spin cannot be determined
		if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
		if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }

		return {
			spinX: sX,
			spinY: sY,
			pixelX: pX,
			pixelY: pY
		};
	};
})();

var video = {
	// Instances are indexed by the video id rather than 1,2,3,etc so that videos are able to be
	// accessed if they get shuffled around in the UI 
	instances: new Object(),

	// Initialize the videos
	// opts - an object of options for the videos. With no options set, the videos will default 
	//      - to a looping, muted background video
	init: function (opts) {
		if (typeof opts.selector == 'undefined')
			opts.selector = '.fld-video';
		if (typeof opts.autoplay == 'undefined')
			opts.autoplay = true;
		if (typeof opts.controls == 'undefined')
			opts.controls = 'none';
		if (typeof opts.loop == 'undefined')
			opts.loop = true;
		if (typeof opts.muted == 'undefined')
			opts.muted = true;
		if (typeof opts.playBtn == 'undefined') {
			opts.playBtn = 'images/play-btn.svg';
		}
		if (typeof opts.pauseBtn == 'undefined') {
			opts.pauseBtn = 'images/pause-btn.svg';
		}

		jQuery(opts.selector).each(function () {
			video.buildVideoHTML(jQuery(this), opts);
		});

		// Hover In:
		// -    Requests a gif of the video, and displays it once it is ready.
		// -    If the gif already exists, show the gif
		// Hover Out:
		// -    Hide the gif
		jQuery(opts.selector).hover(function () {
			var previews = jQuery(this).find('.video-previews');
			var gif = jQuery(this).find('.gif');
			if (jQuery(window).width() > 760 && gif.length == 0) {
				var id = jQuery(this).data('id');
				var gif = jQuery('<img class="gif" src="https://videodelivery.net/' + id + '/thumbnails/thumbnail.gif?time=0s&duration=1s">');
				gif.on('load', function () {
					previews.append(gif);
				});
			} else {
				previews.find('.gif').show();
			}
		}, function () {
			var previews = jQuery(this).find('.video-previews');
			previews.find('.gif').hide();
		});

		// Hides the video previews (thumbnail and gif) and filter and plays the video
		jQuery(opts.selector).click(function () {
			var id = jQuery(this).data('id');
			jQuery(this).addClass('playing');
			// video.instances[id].player.play().catch(function() {
			//     video.instances[id].player.muted = true;
			//     video.instances[id].player.play();
			// });
		});

	},

	// Create the HTML of the video previews and video. Video properties have defaults,
	// but can be changed by setting the data-{property} attriutes
	// jq   - a jQuery object of an instance of the selector specified in the init function
	// opts - an object of options for the videos.
	buildVideoHTML: function (jq, opts) {
		if (jq.data('id') !== undefined) {
			var id = jq.data('id');
			var html = jQuery('<div class="filter"><div class="button" style="background-image: url(' + opts.playBtn + ')"></div></div><div class="video-previews"><img class="still" src="https://videodelivery.net/' + id + '/thumbnails/thumbnail.jpg?time=0s&fit=fill"></div><iframe class="video" src="https://iframe.videodelivery.net/' + id + '" allow="autoplay; accelerometer; gyroscope; encrypted-media; picture-in-picture;"  allowfullscreen="true"></iframe>');
			jq.append(html);
			video.instances[id] = {
				jq: jq,
				player: Stream(jq.find('.video')[0]),
				playBtn: opts.playBtn,
				pauseBtn: opts.pauseBtn
			}
			var controls = (typeof jq.data('controls') !== 'undefined' ? jq.data('controls') : opts.controls);
			if (controls == 'full') {
				video.instances[id].player.controls = true;
			} else {
				video.instances[id].player.controls = false;
			}
			// video.instances[id].player.controls = (typeof jq.data('controls') !== 'undefined' ? jq.data('controls') : opts.controls);
			video.instances[id].player.autoplay = (typeof jq.data('autoplay') !== 'undefined' ? jq.data('autoplay') : opts.autoplay);
			video.instances[id].player.muted = (typeof jq.data('muted') !== 'undefined' ? jq.data('muted') : opts.muted);
			video.instances[id].player.loop = (typeof jq.data('loop') !== 'undefined' ? jq.data('loop') : opts.loop);

			if (controls == 'none') {
				jq.find('.filter').remove();

				video.instances[id].player.addEventListener('canplay', function () {
					jq.find('.video-previews').remove();
				});
			} else if (controls == 'limited') {
				jq.find('.filter').css('pointer-events', 'all');

				jq.find('.filter').click(function () {
					if (video.instances[id].player.paused) {
						video.instances[id].player.play();
					} else {
						video.instances[id].player.pause();
					}
				});
			} else if (controls == 'full') {
				jq.find('.filter').click(function () {
					jQuery(this).remove();
					video.instances[id].player.play();
				});
			}

			video.instances[id].player.addEventListener('play', function () {
				video.onPlay(video.instances[id]);
			});
			video.instances[id].player.addEventListener('pause', function () {
				video.onPause(video.instances[id]);
			});
		}
	},

	onPlay: function (instance) {
		instance.jq.removeClass('paused');
		instance.jq.find('.button').css('background-image', 'url("' + instance.pauseBtn + '")');
	},
	onPause: function (instance) {
		instance.jq.addClass('paused');
		instance.jq.find('.button').css('background-image', 'url("' + instance.playBtn + '")');
	}
}



const isInViewport = (elem, direction) => {
    var bounding = elem.getBoundingClientRect();

    if (direction === 'left') {
        return (
            bounding.right >= 0
        );
    } else {
        return (
            bounding.left <= window.innerWidth
        );
    }
};
