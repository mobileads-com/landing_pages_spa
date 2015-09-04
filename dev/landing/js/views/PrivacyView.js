app.views.PrivacyView = (function () {

    "use strict";

    return function (data) {

        var privacyTemplate = app.templates.get("privacy");

        this.initialize = function () {
            // Define a div wrapper for the view. The div wrapper is used to attach events.
            this.$el = $('<div/>');
        };
        
        this.render = function () {
            this.$el.html(privacyTemplate);
            return this;
        };

        this.initialize();

    };
}());