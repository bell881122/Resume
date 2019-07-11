$(document).ready(function () {
    // scroll animate
    $('.scrollTop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos }, 1000);
        console.log(target, targetPos);
    });
    // scroll function
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        // console.log(scrollPos, windowHeight);

        $('.scrollTop').each(function () {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('.scrollTop').removeClass('active')
                $(this).addClass('active');
            } else {
                $(this).removeClass('active')
            }
        });

        // progress bar
        /*         var skillTop = $('#skills').position().top;
                if (skillTop <= (scrollPos + windowHeight / 2) && !showSkill) {
                    showSkill = true;
                    $('#skills .progress-bar').each(function () {
                        var thisValue = $(this).data('progress');
                        console.log('thisValue', thisValue);
                        $(this).css('width', thisValue + '%');
                    });
                } */

        // animated
        /*         $('.animated').each(function () {
                    var thisPos = $(this).offset().top;
                    if ((windowHeight + scrollPos) >= thisPos) {
                        $(this).addClass('fadeIn');
                    }
                });
         */
        // bg scroll 
        $('#profiles').css('background-position-y', -(scrollPos / 2) + 'px')
        $('#header-ele').css('transform', 'translateY( ' + (scrollPos / 2) + 'px )')



        $(".hover-animated").mouseover(function () {
            // alert(1111);
            // $(".hover-show").toggleClass("hover-show");
            // $(".hover-show-title").attr("style", "transition-delay: .15s");
            // $(".hover-show-text").attr("style", "transition-delay: .25s");
            $(".hover-show, .hover-show-title, .hover-show-text").addClass("show");
        });
        $(".hover-animated").mouseout(function (e) {
            // $(".hover-show").toggleClass("hover-show");
            // $(".hover-show-title, .hover-show-text").attr("style", "transition-delay: 0s");
            $(".hover-show, .hover-show-title, .hover-show-text").removeClass("show");
            e.stopPropagation();
        });

        $(".click-show-modal").click(function (e) {
            e.preventDefault;
            // $('.modal-img').html(title);
            var title = $(this).find('.hover-show-title').html();
            $('.modal-title').html(title);
            var text = $(this).find('.hover-show-text').html();
            $('.modal-text').html(text);
            // alert(1111);
            var img = $(this).find('.click-show-img').attr('src');
            $('.modal-img').attr('src', img);
            var link = $(this).attr('href');
            $('.modal-button').attr('href', link);
            console.log(link);
        });


    });
});



