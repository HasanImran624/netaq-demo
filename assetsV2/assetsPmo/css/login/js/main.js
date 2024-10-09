/**
* Template Name: Bikin - v2.1.0
* Template URL: https://bootstrapmade.com/bikin-free-simple-landing-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function ($) {
    "use strict";
    //var passwordStrength = 0;
    //$("#loginForm").delegate("#LogIn", "click", function (e) {
    //    debugger
    //    e.preventDefault();
    //    var $form = $(this).closest("form");
    //    if ($form.valid()) {
    //        var $serializedLoginForm = $form.serializeArray();
    //        var data = new FormData();
    //        $.each($serializedLoginForm, function (key, value) {
    //            data.append(this.name, this.value);
    //        });
    //        ajaxRequest('post', $form.attr("action"), data, 'json', false, false/*, null, null, true*/).done(function (result) {
    //            if (result.Title == "NotUpdatedPassword") {
    //                $("#loginForm").css("display", "none");
    //                $("#ResetToComplextPasswordForm").css("display", "block");
    //                $("#ResetToComplextPasswordForm").find("#UserName").html($form.find("#UserName").val());
    //            }

    //        });

    //    } else {
    //        showMessage('error', '', rm.messages.ValidData);
    //    }
    //    return false;
    //});

    //$("#ResetToComplextPasswordForm").delegate("#Reset", "click", function (e) {
    //    debugger
    //    e.preventDefault();
    //    var $form = $(this).closest("form");
    //    if ($form.valid()) {
    //        // passWord  is good or strong
    //        if (passwordStrength < 2) {
    //            showMessageSweet("error", rm.labels.Error, rm.messages.ThisPassWordIsNotStrongPleaseEnterAnotherOne);
    //            return false;
    //        }
    //        var $serializedLoginForm = $form.serializeArray();
    //        var data = new FormData();
    //        data.append("UserName", $form.find("#UserName").html());
    //        $.each($serializedLoginForm, function (key, value) {
    //            data.append(this.name, this.value);
    //        });
    //        ajaxRequest('post', $form.attr("action"), data, 'json', false, false).done(function (result) {
    //            debugger
    //            if (result.RowsCount > 0) {
    //                $("#ResetToComplextPasswordForm").css("display", "none");
    //                $("#loginForm").css("display", "block");
    //                showMessageSweet(result.Type, result.Title, rm.messages.NewPasswordIsResetedSuccessfully);
    //            }
    //            else if (result.Type = "error" && result.Title == "NotComplexPassword") {
    //                showMessageSweet("error", rm.labels.Error, rm.messages.ThisPassWordIsNotStrongPleaseEnterAnotherOne);
    //                return false;

    //            }

    //        });

    //    } else {
    //        showMessage('error', '', rm.messages.ValidData);
    //    }
    //    return false;
    //});
    //// complext

    //$("#ResetToComplextPasswordForm").delegate("#Password", "keyup change", function (e) {
    //    $("#ResetToComplextPasswordForm").find('#strengthMessage').html(checkStrength($(this).val()))
    //});

    //function checkStrength(password) {
    //    passwordStrength = 0
    //    if (password.length < 6) {
    //        $('#strengthMessage').removeClass()
    //        $('#strengthMessage').addClass('Short')
    //        return 'Too short'
    //    }
    //    if (password.length > 8) passwordStrength += 1
    //    // If password contains both lower and uppercase characters, increase strength value.  
    //    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) passwordStrength += 1
    //    // If it has numbers and characters, increase strength value.  
    //    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) passwordStrength += 1
    //    // If it has one special character, increase strength value.  
    //    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) passwordStrength += 1
    //    // If it has two special characters, increase strength value.  
    //    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) passwordStrength += 1
    //    // Calculated strength value, we can return messages  
    //    // If value is less than 2  
    //    if (passwordStrength < 2) {
    //        $('#strengthMessage').removeClass()
    //        $('#strengthMessage').addClass('Weak')
    //        return 'Weak'
    //    } else if (passwordStrength == 2) {
    //        $('#strengthMessage').removeClass()
    //        $('#strengthMessage').addClass('Good')
    //        return 'Good'
    //    } else {
    //        $('#strengthMessage').removeClass()
    //        $('#strengthMessage').addClass('Strong')
    //        return 'Strong'
    //    }
    //}

    // Preloader
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').css('display', '');
            $('#preloader').delay(100).fadeOut('slow', function () {
                $('#preloader').css('display', 'none');//  $(this).remove();
                $('#preloader').css('background', 'transparent');
            });
        }
    });

    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $('#header').outerHeight() - 1;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top - scrolltoOffset;

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, #mobile-nav');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function () {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 300) {
                $(".nav-menu ul:first li:first").addClass('active');
            }
        });
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });

    // Porfolio isotope and filter
    $(window).on('load', function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item'
        });

        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
            aos_init();
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function () {
            $('.venobox').venobox();
        });
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    $(window).on('load', function () {
        aos_init();
    });

})(jQuery);