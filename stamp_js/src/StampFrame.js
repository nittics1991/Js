/**
*   スタンプ枠データ
*
*   @param Object dataset
*/
let StampFrame = function(dataset) {
    this.stamp_types = ['circle', 'rect'];
    this.stamp_colors = ['red', 'black'];
    this.border_directions = ['N', 'H', 'V'];
    this.text_placements = ['H', 'V'];
    this.text_directions = ['H', 'V'];
    this.option_positions = [
        'non',
        'left',
        'right',
        'top',
        'bottom',
    ];

    this._init(dataset);
};

/**
*   _init
*
*   @param Object dataset
*/
StampFrame.prototype._init = function(dataset) {
    this.stamp_type = typeof dataset.stamp_type !== 'undefined'?
        dataset.stamp_type:'circle';

    this.stamp_width = typeof dataset.stamp_width !== 'undefined'?
        dataset.stamp_width:30;

    this.stamp_height = typeof dataset.stamp_height !== 'undefined'?
        dataset.stamp_height:30;

    this.line_weight = typeof dataset.line_weight !== 'undefined'?
        dataset.line_weight:3;

    this.stamp_color = typeof dataset.stamp_color !== 'undefined'?
        dataset.stamp_color:'red';

    this.border_direction = typeof dataset.border_direction !== 'undefined'?
        dataset.border_direction:'H';

    this.text_placement = typeof dataset.text_placement !== 'undefined'?
        dataset.text_placement:'V';

    this.text_direction = typeof dataset.text_direction !== 'undefined'?
        dataset.text_direction:'H';

    this.option_position = typeof dataset.option_position !== 'undefined'?
        dataset.option_position:'non';
        
    this.backgroound_color = typeof dataset.backgroound_color !== 'undefined'?
        dataset.backgroound_color:'transparent';
};

/**
*   validate
*
*   @return bool
*/
StampFrame.prototype.validate = function() {
    if (this.stamp_types.indexOf(this.stamp_type) === -1)
        return false;

    if (!isFinite(this.stamp_width)) return false;

    if (!isFinite(this.stamp_height)) return false;

    if (this.stamp_height !== this.stamp_width) return false;

    if (!isFinite(this.line_weight)) return false;

    if (this.stamp_colors.indexOf(this.stamp_color) === -1)
        return false;

    if (this.border_directions.indexOf(this.border_direction) === -1)
        return false;

    if (this.text_placements.indexOf(this.text_placement) === -1)
        return false;

    if (this.text_directions.indexOf(this.text_direction) === -1)
        return false;

    if (this.option_positions.indexOf(this.option_position) === -1)
        return false;
    
    if (this.backgroound_color.trim() === '')
        return false;
    
    return true;
};

//スタンプ型

/**
*   isTypeRect
*
*   @return bool
*/
StampFrame.prototype.isTypeRect = function() {
    return this.stamp_type === 'rect';
};

/**
*   isTypeCircle
*
*   @return bool
*/
StampFrame.prototype.isTypeCircle = function() {
    return this.stamp_type == 'circle';
};

//仕切り線方向

/**
*   isNonBorder
*
*   @return bool
*/
StampFrame.prototype.isNonBorder = function() {
    return this.border_direction === 'N';
};

/**
*   isVerticalBorder
*
*   @return bool
*/
StampFrame.prototype.isVerticalBorder = function() {
    return this.border_direction === 'V';
};

/**
*   isHorizonBorder
*
*   @return bool
*/
StampFrame.prototype.isHorizonBorder = function() {
    return this.border_direction === 'H';
};

//配置方向

/**
*   isVerticalPlacement
*
*   @return bool
*/
StampFrame.prototype.isVerticalPlacement = function() {
    return this.text_placement === 'V';
};

/**
*   isHorizonPlacement
*
*   @return bool
*/
StampFrame.prototype.isHorizonPlacement = function() {
    return !this.isVerticalPlacement();
};

//文字方向

/**
*   isVerticalDirection
*
*   @return bool
*/
StampFrame.prototype.isVerticalDirection = function() {
    return this.text_direction === 'V';
};

/**
*   isHorizonDirection
*
*   @return bool
*/
StampFrame.prototype.isHorizonDirection = function() {
    return !this.isVerticalDirection();
};

//オプション位置

/**
*   isNonOption
*
*   @return bool
*/
StampFrame.prototype.isNonOption = function() {
    return this.option_position === 'non';
};

/**
*   isVerticalOption
*
*   @return bool
*/
StampFrame.prototype.isVerticalOption = function() {
    return this.option_position == 'top'
        || this.option_position == 'bottom';
};

/**
*   isHorizonOption
*
*   @return bool
*/
StampFrame.prototype.isHorizonOption = function() {
    return this.option_position == 'left'
        || this.option_position == 'right';
};

/**
*   isTopOption
*
*   @return bool
*/
StampFrame.prototype.isTopOption = function() {
    return this.option_position == 'top';
};

/**
*   isBottomOption
*
*   @return bool
*/
StampFrame.prototype.isBottomOption = function() {
    return this.option_position == 'bottom';
};

/**
*   isLeftOption
*
*   @return bool
*/
StampFrame.prototype.isLeftOption = function() {
    return this.option_position == 'left';
};

/**
*   isRightOption
*
*   @return bool
*/
StampFrame.prototype.isRightOption = function() {
    return this.option_position == 'right';
};

