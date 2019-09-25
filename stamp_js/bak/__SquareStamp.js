
let SquareStamp = function(stampFrame, stampData, base_position) {
	this.textDirection = 'V';
	this.border = true;
	
	
	
	
	this._parent = new RectStamp(stampFrame, stampData, base_position, this.border)
	this._parent.setVirtical();
	this.placement = this._parent.placement;
};

SquareStamp.prototype.exec = function() {
	return this._parent.exec();
};
