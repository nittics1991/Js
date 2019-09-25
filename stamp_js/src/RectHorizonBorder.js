/**
*   方形水平仕切り線
*
*/
let RectHorizonBorder = function() {
};

/**
*   描画実行
*
*   @param StampFrame stampFrame スタンプ全体設定
*   @param StampData stampData スタンプ文字データ
*   @param array base_position スタンプ基準座標
*   @return array 描画命令セット
*/
RectHorizonBorder.prototype.exec = function(stampFrame, stampData, base_position) {
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
RectHorizonBorder.prototype._exec = function() {
    let ctrl = [];

    let data_count = this._stampFrame.option_position == 'non'?
        this._stampData.length:
        this._stampData.length - 1;

    if (data_count < 2) {
        return[];
    }

    let radius = this._stampFrame.stamp_height / 2
        - this._stampFrame.line_weight;
    let height = 2 * radius / data_count;

    for (let i = 1; i < data_count; i++) {
        let y = height * i - radius;
        let pos = Math.sqrt(radius * radius - y * y);

        let x1 = this._base_position[0] + radius - pos
             + this._stampFrame.line_weight;
        let x2 = this._base_position[0] + radius + pos
             + this._stampFrame.line_weight;

        y += radius + this._base_position[1]
             + this._stampFrame.line_weight;

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
                args:[x1, y, x2, y]
            }
        ]);
    }
    return ctrl;
};
