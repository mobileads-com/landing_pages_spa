app.views.CustomadView = (function () {

    "use strict";

    return function (data) {

        var customadTemplate = app.templates.get("Customad");

        this.initialize = function () {
            // Define a div wrapper for the view. The div wrapper is used to attach events.
            this.$el = $('<div/>');
        };
        
        this.initForm = function () {
            var signupForm = function(){
                this.form = '#form-signup';
                $('[data-toggle="tooltip"]').tooltip();
                this.initEvents();
            }

            signupForm.prototype.initEvents = function(){
                var _this = this;
                var $name = $('#name');
                var $email = $('#email');
                var $company = $('#company');

                $(_this.form).on('submit', function(){
                    // if(_this.isEmpty($name.val())){
                    // 	alert('Please enter your name.');
                    // 	$name.focus();
                    // 	return false;
                    // }else if(_this.isEmpty($company.val())){
                    // 	alert('Please enter your company.');
                    // 	$company.focus();
                    // 	return false;
                    // }else if(_this.isEmpty($email.val())){
                    // 	alert('Please enter your email.');
                    // 	$email.focus();
                    // 	return false;
                    // }else if(!_this.isEmail($email.val())){
                    // 	alert('Please enter a valid email address.');
                    // 	$email.focus();
                    // 	return false;
                    // }else{
                        // $.post('/path/to/file', {param1: 'value1'}, function(data, textStatus, xhr) {
                            /*optional stuff to do after success */
                        // });
                    // 	return false;
                    // }
                })
            }

            signupForm.prototype.validateForm = function(){

            }

            signupForm.prototype.isEmail = function(email){
                var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                if (filter.test(email)) {
                    return true;
                } else {
                    return false;
                }
            }

            signupForm.prototype.isEmpty = function(value){
                return typeof value != 'undefined' && $.trim(value) ? false : true;
            }

            var signup = new signupForm();
        };

        this.render = function () {
            this.$el.html(customadTemplate);
            return this;
        };

        this.initialize();

    };
}());