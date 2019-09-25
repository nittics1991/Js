/**
*   ビルダー
*
*   @param StampFactory factory
*/
let StampBuilder = function(factory) {
    this.factory = factory;
};

/**
*   _build
*
*   @param string selector
*   @param Object dataset
*   @return StampJs
*/
StampBuilder.prototype._build = function(selector, dataset) {
    return this.factory.stampJs(selector, dataset);
};

/**
*   日付印
*
*   @param string selector
*   @param Object dataset
*   @return StampJs
*/
StampBuilder.prototype.dateStamp = function(selector, dataset) {
    dataset.frame.stamp_type = 'circle';
    dataset.frame.stamp_color = 'red';
    dataset.frame.border_direction = 'H';
    dataset.frame.text_placement = 'V';
    dataset.frame.text_direction = 'H';
    dataset.frame.option_position = 'non';

    return this._build(selector, dataset);
};

/**
*   認印
*
*   @param string selector
*   @param Object dataset
*   @return StampJs
*/
StampBuilder.prototype.signetStamp = function(selector, dataset) {
    dataset.frame.stamp_type = 'circle';
    dataset.frame.stamp_color = 'red';
    dataset.frame.border_direction = 'N';
    dataset.frame.text_placement = 'H';
    dataset.frame.text_direction = 'V';
    dataset.frame.option_position = 'non';

    return this._build(selector, dataset);
};

/**
*   角印
*
*   @param string selector
*   @param Object dataset
*   @return StampJs
*/
StampBuilder.prototype.squareStamp = function(selector, dataset) {
    dataset.frame.stamp_type = 'rect';
    dataset.frame.stamp_color = 'red';
    dataset.frame.border_direction = 'N';
    dataset.frame.text_placement = 'H';
    dataset.frame.text_direction = 'V';
    dataset.frame.option_position = 'non';

    return this._build(selector, dataset);
};

/**
*   会社印
*
*   @param string selector
*   @param Object dataset
*   @return StampJs
*/
StampBuilder.prototype.companyStamp = function(selector, dataset) {
    dataset.frame.stamp_type = 'rect';
    dataset.frame.stamp_color = 'black';
    dataset.frame.border_direction = 'N';
    dataset.frame.text_placement = 'V';
    dataset.frame.text_direction = 'H';
    dataset.frame.option_position = 'non';

    return this._build(selector, dataset);
};
