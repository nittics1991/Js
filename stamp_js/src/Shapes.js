/**
*   図形
*
*   @param
*   @param StampFrame stampFrame,
*   @param StampData stampData,
*   @param Object frameObject, CircleStamp/RectStamp
*   @param Object border, XXXBorder
*   @param Object placement, XXXPlacement
*   @param Object textObject, HorizonText/VerticalText
*   @param OptionPosition optionPosition
*/
let Shapes = function(
    stampFrame,
    stampData,
    frameObject,
    border,
    placement,
    textObject,
    optionPosition
) {
    this._stampFrame = stampFrame;
    this._stampData = stampData;
    this._frameObject = frameObject;
    this._border = border;
    this._placement = placement;
    this._textObject = textObject;
    this._optionPosition = optionPosition;
};

/**
*   作成
*
*/
Shapes.prototype.build = function() {
    this.canvas = {};
    this.data = [];

    this._calcCanvas();
    this._buildShape();
};

/**
*   _buildShape
*
*/
Shapes.prototype._buildShape = function() {
    this.data = this.data.concat(this._calcFrame());

    let stampData = this._stampData;
    let option_text = {};

    if (!this._stampFrame.isNonOption()) {
        option_text = stampData.pop();
    }

    this.data = this.data.concat(this._calcText(stampData));

    if (!this._stampFrame.isNonOption()) {
        this.data = this.data.concat(this._calcOption(option_text));
    }
};

/**
*   _calcCanvas
*
*/
Shapes.prototype._calcCanvas = function() {
    this.canvas.canvas_width = this._calcCanvasWidth();
    this.canvas.canvas_height = this._calcCanvasHeight();
    this.base_position = this._calcBasePosition();
    this.canvas.backgroound_color = this._stampFrame.backgroound_color;
};

/**
*   _calcCanvasWidth
*
*   @return float
*/
Shapes.prototype._calcCanvasWidth = function() {
    return this._stampFrame.isHorizonOption()?
        this._stampFrame.stamp_width
            + this._calcMovement():
        this._stampFrame.stamp_width;
};

/**
*   _calcCanvasHeight
*
*   @return float
*/
Shapes.prototype._calcCanvasHeight = function() {
    return this._stampFrame.isVerticalOption()?
        this._stampFrame.stamp_height
            + this._calcMovement():
        this._stampFrame.stamp_height;
};

/**
*   _calcMovement
*
*   @return float
*/
Shapes.prototype._calcMovement = function() {
    if (this._stampFrame.isNonOption()) {
        return 0;
    }
    return this._stampData[this._stampData.length - 1].font_size
        + this._stampData[this._stampData.length - 1].margin_size
        + this._stampFrame.line_weight;
};

/**
*   _calcBasePosition
*
*   @return array 座標
*/
Shapes.prototype._calcBasePosition = function() {
    let x = 0;
    let y = 0;

    if (this._stampFrame.isTopOption()) {
        y = this._calcMovement();
    }

    if (this._stampFrame.isLeftOption()) {
        x = this._calcMovement();
    }

    return [x, y];
};

/**
*   _calcFrame
*
*   @return array 描画命令セット
*/
Shapes.prototype._calcFrame = function() {
    return this._frameObject.exec(
        this._stampFrame,
        this._stampData,
        this.base_position
    );
};

/**
*   _calcText
*
*   @param StampData stampData
*   @return array 描画命令セット
*/
Shapes.prototype._calcText = function(stampData) {
    return this._placement.exec(
        this._stampFrame,
        stampData,
        this.base_position
    );
};

/**
*   _calcOption
*
*   @param StampData stampData
*   @return array 描画命令セット
*/
Shapes.prototype._calcOption = function(stampData) {
    return this._optionPosition.exec(
        this._stampFrame,
        stampData
    );
};
