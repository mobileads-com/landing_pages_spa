app.views.HomeView = (function () {

    "use strict";

    return function (data) {

        var homeTemplate = app.templates.get("home");

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

                    if (jsonObject.status === true) {
                        formMsg.removeClass('text-red');
                        formMsg.addClass('text-success').text(jsonObject.message);
                        formMsg.show();
                        // REDIRECT TO THE DASHBOARD HERE 
                    } else {
                        formMsg.removeClass('text-success');
                        formMsg.addClass('text-red').text(jsonObject.message);
                        formMsg.show();
                    }

                }).fail(function(jqXHR, textStatus) {
                    console.log('Request failed', textStatus);
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