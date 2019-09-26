/**
*   ファクトリー
*
*/
let StampFactory = function() {
};

/**
*   textObject
*
*   @param StampFrame stampFrame
*   @return Object
*/
StampFactory.prototype.textObject = function(stampFrame) {
    return stampFrame.isVerticalDirection()?
        new VerticalText():
        new HorizonText();
};

/**
*   textObjectForOption
*
*   @param StampFrame stampFrame
*   @return Object
*/
StampFactory.prototype.textObjectForOption = function(stampFrame) {
    if (stampFrame.isNonOption()) {
        return null;
    }

    return stampFrame.isVerticalOption()?
        new HorizonText():
        new VerticalText();
};

/**
*   placement
*
*   @param StampFrame stampFrame
*   @return Object
*/
StampFactory.prototype.placement = function(stampFrame) {
    let textObject = this.textObject(stampFrame);

    return stampFrame.isVerticalPlacement()?
        new VerticalPlacement(textObject):
        new HorizonPlacement(textObject);
};

/**
*   border
*
*   @param StampFrame stampFrame
*   @return Object
*/
StampFactory.prototype.border = function(stampFrame) {
    if (stampFrame.isNonBorder()) {
        return null;
    }

    if (stampFrame.isTypeRect()) {
        return stampFrame.isVerticalBorder()?
            new RectVerticalBorder():
            new RectHorizonBorder();
    }
    return stampFrame.isVerticalBorder()?
        new CircleVerticalBorder():
        new CircleHorizonBorder();
};

/**
*   optionPosition
*
*   @param StampFrame stampFrame
*   @return Object
*/
StampFactory.prototype.optionPosition = function(stampFrame) {
    return new OptionPosition(
        this.textObjectForOption(stampFrame)
    );
};

/**
*   frameObject
*
*   @param StampFrame stampFrame
*   @return Object
*/
StampFactory.prototype.frameObject = function(stampFrame) {
    let border = this.border(stampFrame);

    return stampFrame.isTypeRect()?
        new RectStamp(border):
        new CircleStamp(border);
};

/**
*   stampData
*
*   @param Object dataset
*   @return array [StampData, ...]
*/
StampFactory.prototype.stampData = function(dataset) {
    let data = dataset.data instanceof Array?
        dataset.data:[];

    return data.map(function(dt, i) {
        let obj = new StampData(dt);
        if (!obj.validate()) {
            throw "invalid stamp data. no=" + i;
        }
        return obj;
    });
};

/**
*   stampFrame
*
*   @param Object dataset
*   @return StampFrame
*/
StampFactory.prototype.stampFrame = function(dataset) {
    let obj = new StampFrame(dataset.frame);
    if (!obj.validate()) {
        throw "invalid stamp frame.";
    }
    return obj;
};

/**
*   shapes
*
*   @param Object dataset
*   @return Shapes
*/
StampFactory.prototype.shapes = function(dataset) {
    let stampFrame = this.stampFrame(dataset);

    return new Shapes(
        stampFrame,
        this.stampData(dataset),
        this.frameObject(stampFrame),
        this.border(stampFrame),
        this.placement(stampFrame),
        this.textObject(stampFrame),
        this.optionPosition(stampFrame)
    );
};

/**
*   render
*
*   @param Shapes shapes
*   @return CanvasRender
*/
StampFactory.prototype.render = function(shapes) {
    return new CanvasRender(shapes);
};

/**
*   stampJs
*
*   @param text  selector
*   @param Object dataset
*   @return StampJs
*/
StampFactory.prototype.stampJs = function(selector, dataset) {
    return new StampJs(selector, dataset);
};

/**
*   builder
*
*   @return StampBuilder
*/
StampFactory.prototype.builder = function() {
    return new StampBuilder(this);
};
