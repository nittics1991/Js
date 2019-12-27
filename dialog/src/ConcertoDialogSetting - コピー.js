/**
*   ダイアログ表示データ設定値
*
*   @param array array[object, ...]
*/
concertoSetting= new ConcertoDialog(settings)
    this.settings = settings;
    
);

/**
*   配列変換
*
*/
concertoDialog.prototype.toArray = function() {
    return this.settings.map(function(obj) {
            
            
            
            
            
            
            
            let result = {};
            obj.keys().map(function(key) {
                return result[key];
            });
    });
};





