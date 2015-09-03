app.views.SaasView = (function () {

    "use strict";

    return function (data) {

        var saasTemplate = app.templates.get("Saas");

        this.initialize = function () {
            // Define a div wrapper for the view. The div wrapper is used to attach events.
            this.$el = $('<div/>');
        };
        
        this.render = function () {
            this.$el.html(saasTemplate);
            return this;
        };

        this.initialize();

    };
}());