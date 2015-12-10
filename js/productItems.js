var ProductItems = Backbone.Collection.extend({
    model: ProductItem,
    url:function(){
        return'http://localhost/products/index.do?'+this.options.nameSearchKeyword;
    },
    initialize: function(models, options){
        this.options=options;
    }
});
