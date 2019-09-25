/**
*   方形垂直仕切り線
*
*/
let RectVerticalBorder = function() {
};

/**
*   描画実行
*
*   @param StampFrame stampFrame スタンプ全体設定
*   @param StampData stampData スタンプ文字データ
*   @param array base_position スタンプ基準座標
*   @return array 描画命令セット
*/
RectVerticalBorder.prototype.exec = function(stampFrame, stampData, base_position) {
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
RectVerticalBorder.prototype._exec = function() {
    let ctrl = [];

    let data_count = this._stampFrame.option_position == 'non'?
        this._stampData.length:
        this._stampData.length - 1;

    if (data_count < 2) {
        return[];
    }

    let y1 = this._base_position[1];
    let y2 = this._base_position[1]
        + this._stampFrame.stamp_height
        - this._stampFrame.line_weight;
    let width = (this._stampFrame.stamp_width
        - this._stampFrame.line_weight)
        / data_count;

    for (let i = 1; i < data_count; i++) {
        let x = this._base_position[0]
            + width * i;

        ctrl = ctrl.concat([
            {
                func:'line_weight',
                args:[this._stampFrame.line_weight]
            },
            {
                func:'stamp_color',
                args:[this._stampFrame.stamp_color]
            },
            {
                func:'line',
                args:[x, y1, x, y2]
            }
        ]);
    }
    return ctrl;
};
