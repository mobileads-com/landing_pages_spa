app.views.HomeView = (function () {

    "use strict";

    return function (data) {

        var homeTemplate = app.templates.get("Home");

        this.initialize = function () {
            // Define a div wrapper for the view. The div wrapper is used to attach events.
            this.$el = $('<div/>');
        };
        
        this.initForm = function () {
            var formMsg = $('#contact .form-msg');
            formMsg.hide();
            $('#contact .fa-spinner').hide();
            
            $('#signup-form, #signup-form-sm').submit(function(event) {
                event.preventDefault();

                $.ajax({
                    url: '/register.htm',
                    type: 'post',
                    dataType: 'json',
                    data : {'agency':true, 'email':$('[name=email]').val(), 'industry':'', 'name':$('[name=name]').val(), 'password':$('[name=password]').val(), 'platform':'ma', 'role':'agency', 'timezone':'UTC', 'subscriptionId':3},
                }).success(function(jsonObject) {
                    console.log(jsonObject);
                    console.log('done');


                    $('#contact .panel').height('390px');
                    formMsg.addClass('text-success').text('You have successfully signed up!');
                    formMsg.show();
                    // REDIRECT TO THE DASHBOARD HERE

                }).fail(function(jqXHR, textStatus) {
                    console.log('Request failed', textStatus);
                    // $('#contact .panel').height('390px');
                    formMsg.addClass('text-red').text('Something went wrong! Please try again later.');
                    formMsg.show();
                });
            });
        }

        this.render = function () {
            this.$el.html(homeTemplate);
            return this;
        };

        this.initialize();

    };
}());