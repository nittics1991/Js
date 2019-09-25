
let SignetStamp = function(stampFrame, stampData, base_position) {
	this.textDirection = 'V';
	this.border = false;
	this._parent = new CircleStamp(stampFrame, stampData, base_position, this.border);
	this.placement = this._parent.placement;
};

SignetStamp.prototype.exec = function() {
	return this._parent.exec();
};
