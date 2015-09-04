$(function() {

    $('#signin-form').submit(function(event) {
        event.preventDefault();

        var formMsg = $('#signin-modal .form-msg');
        
        $.ajax({
            url: '/login.htm',
            type: 'post',
            dataType: 'json',
            data : {'agency':true, 'email':$('[name=email]').val(), 'password':$('[name=password]').val()},
        }).success(function(jsonObject) {
            console.log(jsonObject);
            console.log('done');

            if (jsonObject.status === true) {
                formMsg.removeClass('text-red');
                formMsg.addClass('text-success').text(jsonObject.message);
                formMsg.show();

                setTimeout( function () {
                    window.location = '/campaigns';
                }, 3000);

            } else {
                formMsg.removeClass('text-success');
                formMsg.addClass('text-red').text('Incorrect username or password.');
                formMsg.show();
            }

        }).fail(function(jqXHR, textStatus) {
            console.log('Request failed', textStatus);
            formMsg.addClass('text-red').text('Something went wrong! Please try again later.');
            formMsg.show();
        });
    });
});