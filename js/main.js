$(document).ready(function(){
    var productItems = new ProductItems([
        new ProductItem({description: "Product 01"}),
        new ProductItem({description: "Product 02"})
    ]);

    var productItemsView = new ProductItemsView({model: productItems});
    $("body").append(productItemsView.render().$el)
});
