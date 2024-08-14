$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
    });

    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('active');

        if ($(window).scrollTop() > 60) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }

        $('section').each(function() {
            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if (top >= offset && top < offset + height) {
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });

    });
    

    $('#read-more-btn').click(function() {
        $('#read-more').show();
        $('#read-more-btn').hide();
        $('#read-less-btn').show();
    });

    $('#read-less-btn').click(function() {
        $('#read-more').hide();
        $('#read-more-btn').show();
        $('#read-less-btn').hide();
    });
    $('#read-more-btn2').click(function() {
        $('#read-more2').show();
        $('#read-more-btn2').hide();
        $('#read-less-btn2').show();
    });

    $('#read-less-btn2  ').click(function() {
        $('#read-more2').hide();
        $('#read-more-btn2').show();
        $('#read-less-btn2').hide();
    });

    $('#read-more-btn3').click(function() {
        $('#read-more3').show();
        $('#read-more-btn3').hide();
        $('#read-less-btn3').show();
    });

    $('#read-less-btn3  ').click(function() {
        $('#read-more3').hide();
        $('#read-more-btn3').show();
        $('#read-less-btn3').hide();
    });

    $('#read-more-btn4').click(function() {
        $('#read-more4').show();
        $('#read-more-btn4').hide();
        $('#read-less-btn4').show();
    });

    $('#read-less-btn4  ').click(function() {
        $('#read-more4').hide();
        $('#read-more-btn4').show();
        $('#read-less-btn4').hide();
    });

    $('#read-more-btn5').click(function() {
        $('#read-more5').show();
        $('#read-more-btn5').hide();
        $('#read-less-btn5').show();
    });

    $('#read-less-btn5  ').click(function() {
        $('#read-more5').hide();
        $('#read-more-btn5').show();
        $('#read-less-btn5').hide();
    });

    $('#read-more-btn6').click(function() {
        $('#read-more6').show();
        $('#read-more-btn6').hide();
        $('#read-less-btn6').show();
    });

    $('#read-less-btn6  ').click(function() {
        $('#read-more6').hide();
        $('#read-more-btn6').show();
        $('#read-less-btn6').hide();
    });

    $('#read-more-btn7').click(function() {
        $('#read-more7').show();
        $('#read-more-btn7').hide();
        $('#read-less-btn7').show();
    });

    $('#read-less-btn7  ').click(function() {
        $('#read-more7').hide();
        $('#read-more-btn7').show();
        $('#read-less-btn7').hide();
    });

    $('#read-more-btn8').click(function() {
        $('#read-more8').show();
        $('#read-more-btn8').hide();
        $('#read-less-btn8').show();
    });

    $('#read-less-btn8  ').click(function() {
        $('#read-more8').hide();
        $('#read-more-btn8').show();
        $('#read-less-btn8').hide();
    });

    $('#read-more-btn9').click(function() {
        $('#read-more9').show();
        $('#read-more-btn9').hide();
        $('#read-less-btn9').show();
    });

    $('#read-less-btn9  ').click(function() {
        $('#read-more9').hide();
        $('#read-more-btn9').show();
        $('#read-less-btn9').hide();
    });

    $('#read-more-btn10').click(function() {
        $('#read-more10').show();
        $('#read-more-btn10').hide();
        $('#read-less-btn10').show();
    });

    $('#read-less-btn10  ').click(function() {
        $('#read-more10').hide();
        $('#read-more-btn10').show();
        $('#read-less-btn10').hide();
    }); 

    $('#read-more-btn11').click(function() {
        $('#read-more11').show();
        $('#read-more-btn11').hide();
        $('#read-less-btn11').show();
    });

    $('#read-less-btn11  ').click(function() {
        $('#read-more11').hide();
        $('#read-more-btn11').show();
        $('#read-less-btn11').hide();
    });

    $('#read-more-btn12').click(function() {
        $('#read-more12').show();
        $('#read-more-btn12').hide();
        $('#read-less-btn12').show();
    });

    $('#read-less-btn12  ').click(function() {
        $('#read-more12').hide();
        $('#read-more-btn12').show();
        $('#read-less-btn12').hide();
    });

    $('#read-more-btn13').click(function() {
        $('#read-more13').show();
        $('#read-more-btn13').hide();
        $('#read-less-btn13').show();
    });

    $('#read-less-btn13  ').click(function() {
        $('#read-more13').hide();
        $('#read-more-btn13').show();
        $('#read-less-btn13').hide();
    });
 
 
});
