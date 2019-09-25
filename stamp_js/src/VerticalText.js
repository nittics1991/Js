/**
*   垂直文字
*
*/
let VerticalText = function() {
};

/**
*   描画実行
*
*   @param StampData dt
*   @param float x
*   @param float y
*   @param float max_width
*/
VerticalText.prototype.calcTextData = function(dt, x, y, max_width) {
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
	
	ctrl = ctrl.concat(this._createText(dt, x, y));
	return ctrl;
};

VerticalText.prototype._createText = function(dt, x, y) {
	let max_width = dt.font_size;
	
	if (dt.vertical_align == 'bottom') {
		return this._bottomText(dt, x, y, max_width);
	} else if (dt.vertical_align == 'middle') {
		return this._middleText(dt, x, y, max_width);
	}
	return this._topText(dt, x, y, max_width);
}

VerticalText.prototype._topText = function(dt, x, y, max_width) {
	let next_y = y;
	
	return dt.stamp_text.split('').map(function(text) {
		let result = {
			func:'stamp_text',
			args:[text, x, next_y, max_width]
		};
		next_y += dt.font_size + 1;
		return result;
	});
};

VerticalText.prototype._bottomText = function(dt, x, y, max_width) {
	let next_y = y;
	
	return dt.stamp_text.split('').reverse().map(function(text) {
		let result = {
			func:'stamp_text',
			args:[text, x, next_y, max_width]
		};
		next_y -= dt.font_size + 1;
		return result;
	});
};

VerticalText.prototype._middleText = function(dt, x, y, max_width) {
	let next_y = dt.stamp_text.length % 2 === 1?
		y - dt.stamp_text.length / 2 * (dt.font_size + 1)
			+ (dt.font_size /2 + 1):
		y - (dt.stamp_text.length + 1) / 2 * (dt.font_size + 1)
			+ (dt.font_size + 1);
	
	return dt.stamp_text.split('').map(function(text) {
		let result = {
			func:'stamp_text',
			args:[text, x, next_y, max_width]
		};
		next_y += dt.font_size + 1;
		return result;
	});
};
