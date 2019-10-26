/**
*   定義
*
*/

//array_spliceで内側にElementを挿入していく。
//arrayならtemplate
//array-arrayならネスト
//objectなら関数call(関数内で展開)
//展開して{{}}を置換
//最後にjoin

FormConfig:{
    stamp_types:[
        ['html_div',{cls:'stampjs_form'}],
        [
            ['html_form',{name:'stampjs_form'}],
            [
                ['html_div',{cls:'stampjs_button'}],
                [
                    //作成・保存・消去・ダウンロード・アップロード
                    ['html_button',{text:button_name}],
                    ['html_button',{text:button_name}],
                    ['html_button',{text:button_name}],
                    ['html_button',{text:button_name}],
                ],
                
                ['html_table',{cls:'stampjs_frame'}],
                [
                    ['thead',{}]
                    [
                        ['html_tr',{cls:'tr_frame_title'}],
                        [
                            ['html_th',{}],
                            ['html_th',{text:th_frame_title}],
                        ],
                    ],
                    
                    ['tbody',{}]
                    [
                        ['html_tr',{cls:'tr_stamp_types'}],
                        [
                            ['html_th',{}],
                            ['html_td',{}],
                            [
                                ['html_select',{name:'stamp_types'}],
                                [
                                    
                                    //call write option function
                                    ['html_option',{key:xxx, value:yyy}],
                                    //関数名を定義?
                                    {func:'func_wite_option', arg:['stamp_types']},
                                    
                                ],
                                
                                
                            ],
                        ],
                        
                        
                        
                        
                        
                        
                        
                        
                    ],
                    
                    
                    
                    
                ],
                
                
                
            ],
        ],
    ],
};
