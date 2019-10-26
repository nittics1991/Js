/**
*   定義
*
*/
FormConfig:{
    stamp_types:[
        ['html_div',{cls:'stampjs_form'}],
        [
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
                                
                                
                            ],
                            
                            
                        ],
                    ],
                    
                    
                    
                    
                    
                    
                    
                    
                ],
                
                
                
                
            ],
            
            
            
        ],
        
        
        ['html_div',{cls:'stampjs_form'}],
        ['html_div',{cls:'stampjs_form'}],
        ['html_div',{cls:'stampjs_form'}],
        ['html_div',{cls:'stampjs_form'}],
        ['html_div',{cls:'stampjs_form'}],
        
        
        
    ],
};
