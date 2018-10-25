$(document).ready(function () {
    $('.modal').css('marginTop', '-1000px');

    $('a[href = "#sheldure"], .contact, .main_btna').on('click', function() {
        $('.overlay').fadeToggle(600);
        $('.modal').animate({
            display: 'block',
            height: 'toggle',
            marginTop: '5rem'
        }, 600);
    });
    $('.close').on('click', function () {
        $('.overlay').fadeToggle(600);
        $('.modal').animate({
            display: 'none',
            height: 'toggle',
            marginTop: '-1000px'
        }, 600);
    });

    $('form').submit(function () {
        event.preventDefault();
        let formData = $(this).serialize();
        console.log(formData);
        $.ajax({
            url: 'server.php',
            type: 'POST',
            data: formData,
            dataType: "html",
            success: function (response) {
                console.log(2);
                $('.modal').animate({
                    display: 'none',
                    height: 'toggle',
                    marginTop: '-1000px'
                }, 300);
                $('.thanks').slideToggle(300);
            },
            error: function () {
                alert('Возникла ошибка');
            }
        });
    });

    $('.back').on('click', function() {
        $('.overlay').fadeToggle(600);
        $('.thanks').slideToggle(600);
    });
});