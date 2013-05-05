window.KitchenSink = window.KitchenSink || {};
$(function() {
    KitchenSink.app = new DevExpress.framework.html.HtmlApplication({
        ns: KitchenSink,
        
        defaultLayout: KitchenSink.config.defaultLayout,
        navigation: KitchenSink.config.navigation
    });
    KitchenSink.app.router.register(":view/:id", { view: "Home", id: undefined });
    
});
