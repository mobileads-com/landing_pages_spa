app.views.TermsView = (function () {

    "use strict";

    return function (data) {

        var termsTemplate = app.templates.get("Terms");

        this.initialize = function () {
            // Define a div wrapper for the view. The div wrapper is used to attach events.
            this.$el = $('<div/>');
        };
        
        this.render = function () {
            this.$el.html(termsTemplate);
            return this;
        };

        this.initialize();

    };
}());