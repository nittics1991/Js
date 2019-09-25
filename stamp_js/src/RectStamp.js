/**
*   方形スタンプ
*
*   @param StampBorder stampBorder
*/
let RectStamp = function(stampBorder) {
    this._stampBorder = stampBorder;
};

/**
*   描画実行
*
*   @param StampFrame stampFrame スタンプ全体設定
*   @param StampData stampData スタンプ文字データ
*   @param array base_position スタンプ基準座標
*   @return array 描画命令セット
*/
RectStamp.prototype.exec = function(stampFrame, stampData, base_position) {
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
RectStamp.prototype._exec = function() {
    let ctrl = [];

    ctrl = ctrl.concat(this._calcFrame());

    if (this._stampBorder) {
        ctrl = ctrl.concat(this._calcBorder());
    }
    return ctrl;
};

/**
*   枠線
*
*   @return array
*/
RectStamp.prototype._calcFrame = function() {
    return [{
        func:'line_weight',
        args:[this._stampFrame.line_weight]
    },
    {
        func:'stamp_color',
        args:[this._stampFrame.stamp_color]
    },
    {
        func:'rect',
        args:[
            this._base_position[0],
            this._base_position[1],
            this._stampFrame.stamp_width - this._stampFrame.line_weight,
            this._stampFrame.stamp_width - this._stampFrame.line_weight
        ]
    }];
};

/**
*   仕切り線
*
*   @return array
*/
RectStamp.prototype._calcBorder = function() {
    return this._stampBorder.exec(
        this._stampFrame,
        this._stampData,
        this._base_position
    );
};
