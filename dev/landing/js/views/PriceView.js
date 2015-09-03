app.views.PriceView = (function () {

    "use strict";

    return function (data) {

        var priceTemplate = app.templates.get("Price");

        this.initialize = function () {
            // Define a div wrapper for the view. The div wrapper is used to attach events.
            this.$el = $('<div/>');
        };
        
        this.initForm = function () {
            var signupForm = function(){
                this.form = '#form-signup';
                this.form_fields = null;
                this.current_tab = null;
                this.initPlugins();
                this.initEvents();
            }

            signupForm.prototype.initPlugins = function(){
                var _this = this;
                //$('.selectpicker').timezones();
            }

            signupForm.prototype.initEvents = function(){
                var _this = this;

                $('.button-plans').on('click', function(){
                    _this.current_tab = $(this).attr('data-plan');
                    if(_this.form_fields){
                        $('#tab-'+_this.current_tab).find('.tab-input').append(_this.form_fields);
                    }else{
                        _this.form_fields = $(_this.form).detach();
                        $('#tab-'+_this.current_tab).find('.tab-input').append(_this.form_fields);
                    }
                    $('#tab-signup a[href="#tab-'+ _this.current_tab +'"]').tab('show');
                    $('#modal-signup').modal('show');
                });

                $('#modal-signup').on('shown.bs.modal', function(){
                    if(!_this.current_tab){
                        _this.current_tab = $('.tabs-right li.active').attr('data-plan');
                    }
                    $('#name').focus();
                });

                $('.tabs-right li').on('click', function(){
                    _this.current_tab = $(this).attr('data-plan');
                    if(_this.form_fields){
                        $('#tab-'+_this.current_tab).find('.tab-input').append(_this.form_fields);
                    }else{
                        _this.form_fields = $(_this.form).detach();
                        $('#tab-'+_this.current_tab).find('.tab-input').append(_this.form_fields);
                    }
                    $('#name').focus();	
                })

                $(_this.form).validate({
                    rules:{
                        name: { required : true, minLength: 1},
                        email: { required : true, email : true},
                        password: { required : true, minLength: 5}
                    },
                    messages:{
                        name: { required : "Please enter your name." },
                        email: { required : "Please enter your email." },
                        password: { required : "Please provide a password." }
                    },
                    submitHandler: function(){
                        $.post('/register.htm', { 'agency' : true, 'name' : $('[name=name]').val(), 'email' : $('[name=email]').val(), 'industry' : '',  'password':$('[name=password]').val(), 'platform':'ma', 'role':'agency', 'timezone':'UTC', 'subscriptionId':3}, function(data, textStatus, xhr) {
                     		/*optional stuff to do after success */
                        });
                    },
                    invalidHandler: function(event, validator) {

                    }
                });
            }

            var signup = new signupForm();
        };  

        this.render = function () {
            this.$el.html(priceTemplate);
            return this;
        };

        this.initialize();

    };
}());