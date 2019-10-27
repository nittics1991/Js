/**
*   Template展開
*
*   @param array definiton
*
*   @example [
*       ["select", {name:"data", class:"selection"}],
*        [
*              ["option", {value:"1"}, "first"],
*              ["option", {value:"2"}, "second"],
*       ],
*       [function(val) {return val * 10;}, [12], this],
*   ]
*/
let TemplateParser = {
    _close_tags = ['hr', 'br'],
    
    build:function(definiton) {
        if (!TemplateParser._isArray(definiton)) {
            _this._throwError(def);
        }
        
        let _this = this;
        
        let _elements = definiton.map(function(def, index, arr) {
            let _result = null;
            
            //TAG作成
            if (TemplateParser._isString(def)) {
                
                
                
                
                
                
                
                
            //子Element作成
            } else if (TemplateParser._isArray(def)) {
                _result = TemplateParser.build(def);
                if (! TemplateParser._isString(def)) {
                    _this._throwError(def);
                }
                return _result;
            //
            } else if (TemplateParser._isFunction(def)) {
                
                
                
                
                _result = def.apply(
                if (! TemplateParser._isString(def)) {
                    _this._throwError(def);
                }
                return _result;
            } else {
                _this._throwError(def);
            }
        });
        return _elements.join("\n");
    },
    
    _isArray:function(val) {
        Object.prototype.toString.call(val) === '[object Array]';
    },
    
    _isString:function(val) {
        Object.prototype.toString.call(val) === '[object String]';
    },
    
    _isObject:function(val) {
        Object.prototype.toString.call(val) === '[object Object]';
    },
    
    _isFunction:function(val) {
        Object.prototype.toString.call(val) === '[object Function]';
    },
    
    _throwError:function(val) {
        throw "definition violation:\n\t"
            + JSON.stringify(val);
    },
};
