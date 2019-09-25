/**
*   追加文字
*
*   @param Object textObject HorizonText|VerticalText
*/
let OptionPosition = function(textObject) {
    this._textObject = textObject;
};

/**
*   描画実行
*
*   @param StampFrame stampFrame スタンプ全体設定
*   @param StampData stampData オプションスタンプ文字データ
*   @return array 描画命令セット
*/
OptionPosition.prototype.exec = function(stampFrame, stampData) {
    this._stampFrame = stampFrame;
    this._stampData = stampData;

    return this._exec(stampData);
};

/**
*   _exec
*
*   @param StampData stampData オプションスタンプ文字データ
*   @return array
*/
OptionPosition.prototype._exec = function(stampData) {
    let pos;

    if (this._stampFrame.isHorizonOption()) {
        pos = this._calcHorizonPosition(stampData);
    } else {
        pos = this._calcVerticalPosition(stampData);
    }

    return this._textObject.calcTextData(
        stampData,
        pos.x,
        pos.y,
        pos.max_width
    );
};

/**
*   _calcHorizonPosition
*
*   @param StampData stampData オプションスタンプ文字データ
*   @return Object 位置情報
*/
OptionPosition.prototype._calcHorizonPosition = function(stampData) {
    let x = 0;
    let y = 0;
    let max_width = this._stampFrame.stamp_width;
    let base_position = this._calcOptionPosition();

    if (stampData.isRight()) {
        x = base_position.x
            + this._stampFrame.stamp_width
            - stampData.margin_size;
    } else if (stampData.isCenter()) {
        x = base_position.x
            + this._stampFrame.stamp_width / 2;
    } else {
        x = base_position.x
            + stampData.margin_size;
    }

    if (stampData.isBottom()) {
        y = base_position.y
            + stampData.font_size
            + stampData.margin_size;
    } else if (stampData.isMiddle()) {
        y = base_position.y
            + stampData.font_size / 2
            + stampData.margin_size;
    } else {
        y = base_position.y
    }

    return {x:x, y:y, max_width:max_width};
};

/**
*   _calcVerticalPosition
*
*   @param StampData stampData オプションスタンプ文字データ
*   @return Object 位置情報
*/
OptionPosition.prototype._calcVerticalPosition = function(stampData) {
    let x = 0;
    let y = 0;
    let max_width = this._stampFrame.stamp_width;
    let base_position = this._calcOptionPosition();

    if (stampData.isBottom()) {
        y = base_position.y
            + this._stampFrame.stamp_height
            - stampData.margin_size;
    } else if (stampData.isMiddle()) {
        y = base_position.y
            + this._stampFrame.stamp_height / 2;
    } else {
        y = base_position.y
            + stampData.margin_size;
    }

    if (stampData.isRight()) {
        x = base_position.x
            + stampData.font_size
            + stampData.margin_size;
    } else if (stampData.isCenter()) {
        x = base_position.x
            + stampData.font_size / 2
            + stampData.margin_size;
    } else {
        x = base_position.x
    }

    return {x:x, y:y, max_width:max_width};
};

/**
*   _calcOptionPosition
*
*   @return Object 位置情報
*/
OptionPosition.prototype._calcOptionPosition = function() {
    let x = 0;
    let y = 0;

    if (this._stampFrame.isBottomOption()) {
        y = this._stampFrame.stamp_height;
    }

    if (this._stampFrame.isRightOption()) {
        x = this._stampFrame.stamp_width;
    }

    return {x:x, y:y};
};
