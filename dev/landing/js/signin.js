$(function() {

    // var formMsg = $('#contact .form-msg');
    // formMsg.hide();
    // $('#contact .fa-spinner').hide();

    $('#signin-form').validate({
        rules : {
            name : {
                required : true
            },
            password : {
                required : true
            }
        },

        submitHandler : function () {
            $.post('login.htm', 
                   {'agency':true, 'email':$('[name=email]').val(), 'industry':'', 'name':$('[name=name]').val(), 'password':$('[name=password]').val(), 'platform':'ma', 'role':'agency', 'timezone':$('[name=timezone]').val(), 'subscriptionId':3}, function () {
            }).done(function (jsonObject) {
                console.log(jsonObject);
                console.log('done');
                formMsg.addClass('text-success').text('You have successfully logged in!');
                formMsg.show();

            }).fail(function (jsonObject) {
                console.log(jsonObject);
                console.log('Request failed');
                formMsg.addClass('text-red').text('Something went wrong! Please try again later.');
                formMsg.show();
            });
        }, 
        invalidHandler : function () {

        }
    });
});