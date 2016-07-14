Router.configure({
    layoutTemplate: 'layout',
    //loadingTemplate: 'loading',
    //notFoundTemplate: 'notFound',

    onAfterAction : function () {
        jQuery(window).scrollTop(0);
    }
});

Router.route('/', {name: 'home'});