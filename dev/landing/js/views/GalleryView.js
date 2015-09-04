app.views.GalleryView = (function () {

    "use strict";

    return function (data) {

        var galleryTemplate = app.templates.get("gallery");

        this.initialize = function () {
            // Define a div wrapper for the view. The div wrapper is used to attach events.
            this.$el = $('<div/>');
        };
        
        this.initCarousel = function () {
            $('#carousel-expandable-md, #carousel-expandable-sm').hide();
            $('#carousel-embedded-md, #carousel-embedded-sm').hide();
            $('#carousel-interstitial-md, #carousel-interstitial-sm').hide();


            function setAsActive(context) {
                $('.button-div div').removeClass('active');
                $(context).addClass('active');
            }

            $('#expandable, #expandable-sm').click(function() {
                setAsActive(this);

                $('#carousel-embedded-md, #carousel-embedded-sm').hide();
                $('#carousel-interstitial-md, #carousel-interstitial-sm').hide();
                $('#carousel-all-md, #carousel-all-sm').hide();

                $('#carousel-expandable-md, #carousel-expandable-sm').show();
            });

            $('#embedded, #embedded-sm').click(function() {
                setAsActive(this);

                $('#carousel-all-md, #carousel-all-sm').hide();
                $('#carousel-expandable-md, #carousel-expandable-sm').hide();
                $('#carousel-interstitial-md, #carousel-interstitial-sm').hide();

                $('#carousel-embedded-md, #carousel-embedded-sm').show();
            });

            $('#interstitial, #interstitial-sm').click(function() {
                setAsActive(this);

                $('#carousel-all-md, #carousel-all-sm').hide();
                $('#carousel-embedded-md, #carousel-embedded-sm').hide();
                $('#carousel-expandable-md, #carousel-expandable-sm').hide();

                $('#carousel-interstitial-md, #carousel-interstitial-sm').show();
            });

            $('#all, #all-sm').click(function() {
                setAsActive(this);

                $('#carousel-embedded-md, #carousel-embedded-sm').hide();
                $('#carousel-expandable-md, #carousel-expandable-sm').hide();
                $('#carousel-interstitial-md, #carousel-interstitial-sm').hide();

                $('#carousel-all-md, #carousel-all-sm').show();
            });
        };

        this.render = function () {
            this.$el.html(galleryTemplate);
            return this;
        };

        this.initialize();

    };
}());