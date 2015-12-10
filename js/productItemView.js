var ProductItemView = Backbone.View.extend ({
    tagName: "li",
    initialize: function(options){
        if (!(options && options.model))
            throw new Error("model is not specified");
        //this.model.on("change",this.render(), this);
        Backbone.View.prototype.initialize.apply(this, arguments);
        this.model.bind('change', this.render);
    },
    events: {
         "click #toggle": "onClickToggle",
    },
    onClickToggle: function(){
        this.model.toggle();
        console.log(this.model.toJSON());
    },
    render: function(){
        //this.$el.toggleClass("completed", this.model.get("isCompleted"));
        this.$el.html("<input id='toggle' type='checkbox'/>" + this.model.escape("description"));
        return this;
    }
});
