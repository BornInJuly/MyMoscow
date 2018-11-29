$(document).ready(function(){

$('.menu-button').click(function(){
    $('.sink-menu').slideToggle(500);
    $('.menu-button-stick:nth-child(2)').toggleClass('opacity');
    $('.menu-button-stick:nth-child(1)').toggleClass('stick-rotate-top');
    $('.menu-button-stick:nth-child(3)').toggleClass('stick-rotate-bottom');
});

$('.about').click(function(){
    var yus = $('#tous')[0].getBoundingClientRect().top;
    $('html,body').animate({scrollTop: yus}, 1000);
 });

$('.feed').click(function(){
    var ytop = $('#feedb')[0].getBoundingClientRect().top;
    $('html,body').animate({scrollTop: ytop}, 1000);
});

$('.button').click(function(){
    var ytop = $('#tous')[0].getBoundingClientRect().top;
    $('html,body').animate({scrollTop: ytop}, 1000);
});

$('input').focusin(function (){
    var change = $(this).next(); 
    $(change).animate({
        fontSize: '12px',
        top: '-18px',
        left: '25px'
    }, 250);
})

$('input').focusout(function (){
    var vallen = $(this).val();
    if (vallen == "") {
        var change = $(this).next(); 
        $(change).animate({
            fontSize: '15px',
            top: '-3px',
            left: '25px'
        }, 250);
    }
})

$('textarea').focusin(function (){
    var change = $(this).next(); 
    $(change).animate({
        fontSize: '10px',
        top: '-88px',
        left: '25px'
    }, 250);
})

$('textarea').focusout(function (){
    var vallen = $(this).val();
    if (vallen == "") {
        var change = $(this).next(); 
        $(change).animate({
            fontSize: '15px',
            top: '-80px',
            left: '25px'
        }, 250);
    }
})

$('form').submit(function() {
    var user_id = $('#user-id').val();
    var name = $('#name').val();
    var mail = $('#mail').val();
    var text = $('#text').val();

    var msg = {
        name: name,
        mail: mail,
        text: text
    }

    msg = JSON.stringify(msg);

    console.log(msg);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_msg.php', true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(msg);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) {
            return;
        }

        var response = JSON.parse(xhr.responseText);
        console.log(response);


        if (xhr.status == 200) {
            $('.sink-window').css('display','block');
            $('.msg').toggleClass('msg_animate');
            $('#ajax-receiver').html('Уважаемый(-ая) ' + response.name + ', <br>Ваше сообщение успешно отправлено!');
        }
    
    }
    return false;

});

$('.exitbtn').click(function(){
    $('.sink-window').css('display','none');
});

});