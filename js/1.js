$(document).ready(function(){
    $('.gt').click(function(){
        $('.gioithieu').addClass('gt_active');
        $('.buss').addClass('buss_active');
        $('.khoibe').remove();
        $('.khoibe1').addClass('khoibe1_active');
        $( '.buss' ).addClass('best_active');
    });
    $('.khoibe1').click(function(){
        $('div').removeClass('gt_active');
        $('div').removeClass('khoibe1_active');
        $('div').removeClass('buss_active');

    });
    $('.khoibe').click(function(){
        $('.gioithieu').addClass('gt_active');
        $('.buss').addClass('buss_active');
        $('.khoibe').remove();
        $('.khoibe1').addClass('khoibe1_active');
    });
    $('#zoom').click(function(){
        $('#zoom').addClass('phongto');
    });
    $('.nut ul li a').click(function(){
        var subject=$(this).data('web');
        $('.noidung .nd').each(function(){
            if($(this).hasClass(subject)){
                $(this).fadeIn("slow");
            }
            else{
                $(this).fadeOut();
            }
        })
        return false;
    });
    //code phong to anh
    $('.anh a').fancybox();
});
// $(function(){
	
// });
new WOW().init();


