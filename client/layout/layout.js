Template.layout.onRendered(function() {

    $('#mainSidebar').first()
        .sidebar('attach events', '.sideMenuActivate');

});