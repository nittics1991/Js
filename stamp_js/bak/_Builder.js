
レシピ
	circle/rect
	placement V/H
	border H/V
	direction H/V
	option Y/N
	data...

//////////////////////////////////////////////////

H/V text class
	new引数なし method　引数 return 命令
	最初にfactoryで他objにinjection可能

H/V placement class
	new 引数	return 命令(text)
	中でtextをnew
	H/Vで普通はtextH/Vも一致するが

V/R H/V border class
	new 引数	return 命令(border)
	
optionPos class
	new 引数, method　引数 return 命令(text)
	中でtextをnew ==>option.typeでtext V/H変わる

circle/rect class
	new 引数 
	中でborderをnew ethod引数なし return 命令(frame/border)
	borderはframeに属する

shapes class
	new 引数(dataset) 
	ここで殆どを中でnew	(suquareなども含む)

frame/data
	new 引数(dataset)
	validate
	
stampJs
	new 引数(dataset)
	中でshapesをnew
	renderを実装
	現在のroot(contlollerではなくviewがroot?)




//////////////////////////////////////////////////

let StampBuilder {
	get:function(recipe) {
		return StampBuilder._build(recipe);
	},
	
	dataStamp:function(recipe) {
		recipe.frame.text_placement = 'V';
		recipe.frame.text_direction = 'H';
		
		
		
	},
	
	signetStamp:function() {
		
	},
	
	squareStamp:function() {
		
	},
	
	CompanyStamp:function() {
		
	},
	
	
	//社印
	//角印
	
	_build:function(recipe) {
		if (typeof recipe.type !== 'undefined') {
			//search dataStamp/squareStamp ...
		}
		
	},
	
	
	///////////////////////////
	//中でnewなし
	
	_stampFram:function(recipe) {
		return new StampFrame(recipe);
	},
	
	_stampData:function(recipe) {
		return new StampData(recipe);
	},
	
	
	///////////////////////////
	
	
	_shapes:function(recipe) {
		return new Shapes(recipe);
	},
	
	
	//stampJs
	
	///////////////////////////

	
	
	_dateStamp:function(recipe) {
		let shapes = StampBuilder._shapes(recipe);
		
		return new CircleStamp(
			StampBuilder._stampFram(recipe),
			StampBuilder._stampData(recipe),
			shapes.base_position
			
			//factory injection?
		);
	},
	
	//signet
	//square
	//company
	
	
	///////////////////////////
	//中でnewなし
	
	//_vertical
	_horizonPlacement:function(xxx) {
		new HorizonPlacement = function(stampFrame, stampData, base_position, frameObject)
	},
	
	//optionPosition
	
	
	///////////////////////////
	//中でnewなし

	
	//@see １個下
	_circleVerticalBorder:function(recipe) {
		let shapes = StampBuilder._shapes(recipe);
		
		return new CircleVerticalBorder(
			StampBuilder._stampFram(recipe),
			StampBuilder._stampData(recipe),
			shapes.base_position
		);
	},
	
	//horizon
	//rect
	
	
	///////////////////////////
	
	//rectBorder
	circleBorder:function(placement) {
		
		if (this.placement == 'V') {
			stampBorder = new CircleVerticalBorder(
				this._stampFrame,
				this._stampData,
				this._base_position
			);
		} else {
			stampBorder = new CircleHorizonBorder(
				this._stampFrame,
				this._stampData,
				this._base_position
			);
		}
		
	},
	
	///////////////////////////
	
	
	
	
	
	
	
	
};
