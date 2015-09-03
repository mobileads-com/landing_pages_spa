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
            
            var formMsg = $('#signin-form .form-msg');
            
            $.post('/login.htm', 
                   {'email':$('[name=email]').val(), 'password':$('[name=password]').val()}, function () {
            }).done(function (jsonObject) {
                jsonObject = JSON.parse(jsonObject);
                console.log(jsonObject.status);
                
                if (jsonObject.status) {
                    formMsg.addClass('text-success').text('You have successfully logged in!');
                    formMsg.show();
                    
                    setTimeout( function () {
                        window.location = '/campaigns'
                    }, 3000);
                }
                
                

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