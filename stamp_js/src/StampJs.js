/**
*   スタンプ
*
*   @param text  selector
*   @param Object dataset
*/
let StampJs = function(selector, dataset) {
    this.selector = selector;
    this.dataset = dataset;
};

/**
*   描画
*
*/
StampJs.prototype.render = function() {
    let factory = new StampFactory();

    let shapes = factory.shapes(this.dataset);
    shapes.build();
    let render = factory.render(shapes);
    render.render(this.selector);
};



