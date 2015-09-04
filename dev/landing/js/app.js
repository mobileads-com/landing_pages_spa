var app = (function() {

	"use strict";
    
    var priceURL = /^#price/;
    var galleryURL = /^#gallery/;
    var customadURL = /^#custom_ad/;
    var saasURL = /^#saas/;
    var termsURL = /^#terms/;
    var privacyURL = /^#privacy/;
    
	function route() {
		var hash = window.location.hash, match, view;

        /* Home */
		if (!hash) {

			view = new app.views.HomeView();
			$('.content').html(view.render().$el);
            view.initForm();
		}

        /* Price */
        match = hash.match(priceURL);
		if (match) {
            view = new app.views.PriceView();
            $('.content').html(view.render().$el);
            view.initForm();
		}
        
        /* Gallery */
        match = hash.match(galleryURL);
		if (match) {
            view = new app.views.GalleryView();
            $('.content').html(view.render().$el);
            view.initCarousel();
		}
        
        /* Custom Ad */
        match = hash.match(customadURL);
		if (match) {
            view = new app.views.CustomadView();
            $('.content').html(view.render().$el);
            view.initForm();
		}
        
        /* SaaS In the Box */
        match = hash.match(saasURL);
		if (match) {
            view = new app.views.SaasView();
            $('.content').html(view.render().$el);
		}
        
        /* Terms & Conditions */
        match = hash.match(termsURL);
		if (match) {
            view = new app.views.TermsView();
            $('.content').html(view.render().$el);
		}
        
        /* Privacy */
        match = hash.match(privacyURL);
		if (match) {
            view = new app.views.PrivacyView();
            $('.content').html(view.render().$el);
		}
	}

	$(document).ready(
			function() {
				app.templates.load("home","price","customad","gallery","saas","terms","privacy").done(function() {
					route();
					$(window).on('hashchange', route);
				});
			});

	// The public API
	return {
		views : {},
		adapters : {}
	};

}());