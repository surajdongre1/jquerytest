$(function(){
    
    $('.bluebox2').fadeToggle(1000);
    $('.bluebox2').fadeToggle(1000);
    $('.lightbox').delay(1000).fadeTo(1000,0.1,function(){alert("hello")}).delay(2000).animate({opacity:'5'});
    $('input').last().css('background-color', 'rgba(180,53,63,2)');
    $('.redbox').after('<div class="redbox"> Newredbox</div>');
    $('.redbox').replaceWith($('.bluebox'));
    
    
    // $(function(){
    //     $('.bluebox2').animate({'margin-left':'+=1000px','opacity':'0',
    //     width:'20px',height:'20',marginTop:'25'},1000);
    //     $('.bluebox2').animate({'opacity':'100','margin-left':'-=1000px',
    //     'width':'100px',height:'100px',marginTop:'0'},400)
        
    $(function(){
        $('.bluebox2').animate({'margin-left':'+=800px','opacity':'0',
        width:'20px',height:'20',marginTop:'50'},1000).delay(3000).animate({'opacity':'100',
        'margin-left':'-=800px',
        'width':'100px',height:'100px',marginTop:'0'},400)
        $('p').animate({fontSize:"20px"},1000)
    });
    
});