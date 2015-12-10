var ProductItemsView = Backbone.View.extend({
    tagName: "ul",
    id: "productItems",
    initialize: function(options){
        if(!(options && options.model))
            throw new Error("model is not specified.");
        this.model.on("add", this.onAddProductItem, this);
    },
    onAddProductItem: function(productItem){
        var view = new ProductItemView({model: productItem});
        this.$el.append(view.render().$el);
    },
    events: {
        "click #add": "onClickAdd",
        "keypress #productName": "onKeyPress",
    },
    onKeyPress: function(e){
        if (e.keyCode == 13)
            this.onClickAdd();
        var products=new ProductItems([], {nameSearchKeyword: 'PC'});
        products.fetch();
        console.log("Search");
    },
    onClickAdd: function(){
        var $productName = this.$("#productName");
        if ($productName.val()) {
            var productItem = new ProductItem({description: $productName.val()});
            this.model.add(productItem);
            $productName.val("");
        }
    },
    render: function(){
        var self = this;

        this.$el.append("<input type='text' autofocus id ='productName'/>");
        this.$el.append("<button id ='add'>Add</button>");

        this.model.each(function(productItem){
            var view = new ProductItemView({model: productItem});
            self.$el.append(view.render().$el);
        });
        return this;
    }
});
