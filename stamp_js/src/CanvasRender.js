/**
*   Cnvas描画
*
*   @param Shapes shapes Shapesオブジェクト
*/
let CanvasRender = function(shapes) {
    this._shapes = shapes;
};

/**
*   描画実行
*
*   @param string selector 挿入するHTMLElementセレクタ
*/
CanvasRender.prototype.render = function(selector) {
    this.selector = selector;

    let canvas = this._createCanvas();
    this._renderShape(canvas);
};

/**
*   _createCanvas
*
*   @return HTMLElement
*/
CanvasRender.prototype._createCanvas = function() {
    let width = this._shapes.canvas.canvas_width + 'px;';
    let height = this._shapes.canvas.canvas_height + 'px;';

    let html =
        '<canvas width="' + width + '" height="' + height + '"></canvas>';

    document.querySelector(this.selector)
        .insertAdjacentHTML('afterbegin', html);

    return document.querySelector(
        this.selector + " canvas"
    );
};

/**
*   _renderShape
*
*   @return HTMLElement canvas
*/
CanvasRender.prototype._renderShape = function(canvas) {
    let _this = this;
    this.ctx = canvas.getContext('2d');

    this._shapes.data.forEach(function(data) {
        if (data.func == 'circle') {
            _this._drawCircle(data.args);
        }
        else if (data.func == 'rect') {
            _this._drawRect(data.args);
        }
        else if (data.func == 'line') {
            _this._drawLine(data.args);
        }
        else if (data.func == 'line') {
            _this._drawLine(data.args);
        }
        else if (data.func == 'line_weight') {
            _this._setLineWeight(data.args);
        }
        else if (data.func == 'stamp_color') {
            _this._setStampColor(data.args);
        }
        else if (data.func == 'stamp_text') {
            _this._drawText(data.args);
        }
        else if (data.func == 'font') {
            _this._setFont(data.args);
        }
        else if (data.func == 'text_align') {
            _this._setTextAlign(data.args);
        }
        else if (data.func == 'vertical_align') {
            _this._setVirticalAlign(data.args);
        }
    });
};

/**
*   _setLineWeight
*
*   @param array data
*/
CanvasRender.prototype._setLineWeight = function(data) {
    this.ctx.lineWidth = data[0];
};

/**
*   _setStampColor
*
*   @param array data
*/
CanvasRender.prototype._setStampColor = function(data) {
    this.ctx.strokeStyle = data[0];
    this.ctx.fillStyle = data[0];
};

/**
*   _drawCircle
*
*   @param array data
*/
CanvasRender.prototype._drawCircle = function(data) {
    this.ctx.beginPath();
    this.ctx.arc.apply(this.ctx, data);
    this.ctx.stroke();
};

/**
*   _drawRect
*
*   @param array data
*/
CanvasRender.prototype._drawRect = function(data) {
    this.ctx.beginPath();
    this.ctx.strokeRect.apply(this.ctx, data);
    this.ctx.stroke();
};

/**
*   _drawLine
*
*   @param array data
*/
CanvasRender.prototype._drawLine = function(data) {
    let args = [
        data[0],
        data[1],
        data[2] - data[0],
        data[3] - data[1],
    ];

    this.ctx.beginPath();
    this.ctx.moveTo.call(this.ctx, data[0], data[1]);
    this.ctx.lineTo.call(this.ctx, data[2], data[3]);
    this.ctx.stroke();
};

/**
*   _drawText
*
*   @param array data
*/
CanvasRender.prototype._drawText = function(data) {
    this.ctx.fillText.apply(this.ctx, data);
};

/**
*   _setFont
*
*   @param array data
*/
CanvasRender.prototype._setFont = function(data) {
    this.ctx.font = data[0];
};

/**
*   _setTextAlign
*
*   @param array data
*/
CanvasRender.prototype._setTextAlign = function(data) {
    this.ctx.textAlign = data[0];
};

/**
*   _setVirticalAlign
*
*   @param array data
*/
CanvasRender.prototype._setVirticalAlign = function(data) {
    this.ctx.textBaseline = data[0];
};
