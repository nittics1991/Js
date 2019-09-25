/**
*   水平文字
*
*/
let HorizonText = function() {
};

/**
*   描画実行
*
*   @param StampData dt
*   @param float x
*   @param float y
*   @param float max_width
*/
HorizonText.prototype.calcTextData = function(dt, x, y, max_width) {
    let ctrl = [];

    ctrl.push(function() {
        let obj = {func:'font'};
        let font_text = dt.font_size + 'px';

        if (dt.font_family.length == 0) {
            font_text += ' sans-serif';
        } else {
            font_text += ' ' + dt.font_family;
        }

        obj.args = [font_text];
        return obj;
    }());

    ctrl.push({
        func:'text_align',
        args:[dt.text_align]
    });

    ctrl.push({
        func:'vertical_align',
        args:[dt.vertical_align]
    });

    ctrl.push({
        func:'stamp_text',
        args:[dt.stamp_text, x, y, max_width]
    });
    return ctrl;
};
