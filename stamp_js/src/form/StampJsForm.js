/**
*   スタンプフォーム
*
*   @param text selector フォーム描画先
*/
let StampJsForm = function(selector) {
    this.selector = selector;
    this.type = type;
};

/**
*   描画
*
*   @param text outputSelector スタンプ描画先?
*   @param text type null|date|signet|square|company?
*/
StampJsForm.prototype.render = function(outputSelector, type) {
    this.outputSelector = outputSelector;
    this.type = type;
    
    
    /*
    let factory = new StampFactory();

    let shapes = factory.shapes(this.dataset);
    shapes.build();
    let render = factory.render(shapes);
    render.render(this.selector);
    */
    
};
