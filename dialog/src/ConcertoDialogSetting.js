/**
*   ダイアログ表示データ設定値
*
*   @param array array[object, ...]
*/
concertoDialogSetting= new ConcertoDialog(settings)
    this.settings = settings;
    
);


/**
*   バリデート
*
*/
concertoDialogSetting.prototype.isValid = function() {
    return this.settings.map(function(obj) {
            
            let result = {};
            
            
            return obj.keys().map(function(key) {
                return _this.isValidId(obj[key])??
                    
    
            });
    
    
    
    
};

/**
*   isValidId
*
*/
concertoDialogSetting.prototype.isValidId = function(val) {
    return Object.prototype.hasOwnProperty.call(val); 
};

/**
*   isValidId
*
*/
concertoDialogSetting.prototype.isValidUrl = function(val) {
    return Object.prototype.hasOwnProperty.call(val); 
};

/**
*   配列変換
*
*/
concertoDialogSetting.prototype.toArray = function() {
    return this.settings.map(function(obj) {
            
            
            
            
            
            
            
            let result = {};
            obj.keys().map(function(key) {
                return result[key];
            });
    });
};





