/**
*   文字列水平描画
*
*   @param Object textObject HorizonText|VerticalText
*/
let HorizonPlacement = function(textObject) {
    this.textObject = textObject;
};

/**
*   描画実行
*
*   @param StampFrame stampFrame スタンプ全体設定
*   @param StampData stampData スタンプ文字データ
*   @param array base_position スタンプ基準座標
*   @return array 描画命令セット
*/
HorizonPlacement.prototype.exec = function(stampFrame, stampData, base_position) {
    this._stampFrame = stampFrame;
    this._stampData = stampData;
    this._base_position = base_position;

    return this._exec();
};

/**
*   _exec
*
*   @return array
*/
HorizonPlacement.prototype._exec = function() {
    let ctrl = [];
    let _this = this;
    let max_width = (this._stampFrame.stamp_width
        - this._stampFrame.line_weight)
        / this._stampData.length;
    let width = (this._stampFrame.stamp_width
        - this._stampFrame.line_weight)
        / this._stampData.length;

    this._stampData.forEach(function(dt, i, ar) {
        let pos = _this._calcTextPosition(dt, i, width);
        ctrl = ctrl.concat(_this.textObject.calcTextData(dt, pos[0], pos[1], max_width));
    });
    return ctrl;
};

/**
*   _calcTextPosition
*
*   @param StampData dt スタンプ文字データ
*   @param float i 行番号
*   @param float width スタンプ幅
*   @return array 座標[x,y]
*/
HorizonPlacement.prototype._calcTextPosition = function(dt, i, width) {
    let x = 0;
    let y = 0;

    if (dt.vertical_align == 'bottom') {
        y = this._base_position[1]
            + this._stampFrame.stamp_width
            - dt.margin_size;
    } else if (dt.vertical_align == 'middle') {
        y = this._base_position[1]
            + this._stampFrame.stamp_width / 2;
    } else {
        y = this._base_position[1]
            + dt.margin_size;
    }

    if (dt.text_align == 'right') {
        x = this._base_position[0]
            + width * (i + 1)
            + dt.margin_size;
    } else if (dt.text_align == 'center') {
        x = this._base_position[0]
            + width * i
            + width / 2
            + dt.margin_size;
    } else {
        x = this._base_position[0]
            + width * i
            + dt.margin_size;
    }
    return [x, y];
};
