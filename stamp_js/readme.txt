StampJs

使用例

var dataset = {
	type:null,
	frame:{
		stamp_type:'rect',
		stamp_width:120,
		stamp_height:120,
		line_weight:3,
		stamp_color:'red',
		border_direction:'N',
		text_placement:'H',
		text_direction:'V',
		option_position:'bottom',
	},
	data:[
		{
			stamp_text:'太一郎',
			font_family:'',
			font_size:30,
			text_align:'center',
			vertical_align:'middle',
			margin_size:0,
		},
		{
			stamp_text:'青木',
			font_family:'',
			font_size:38,
			text_align:'center',
			vertical_align:'middle',
			margin_size:0,
		},
		{
			stamp_text:'代',
			font_family:null,
			font_size:30,
			text_align:'right',
			vertical_align:'bottom',
			margin_size:0,
		},
	],
};


var obj = new StampJs('#date_stamp', dataset);
obj.render();


設定値

var dataset = {
	type:null,  //未使用
	frame:{
		stamp_type:'rect',  //rect|circle
		stamp_width:120,    //0～
		stamp_height:120,   //0～
		line_weight:3,  //1～
		stamp_color:'red',  //red|black
		border_direction:'N',   //N|H|V
		text_placement:'H',     //H|V
		text_direction:'V', //H|V    
		option_position:'non',  //non|left|right|top|bottom
	},
	data:[
		{
			stamp_text:'太一郎',
			font_family:'', //@see CSS font-family
			font_size:30,   //1～
			text_align:'center',    //'left', 'center', 'right'
			vertical_align:'middle',    //'top', 'middle', 'bottom'
			margin_size:0,  //0～
		},
        ...
};

frame.option_position<>'non'の場合、
data[]の最後の設定をoptionのデータとする
