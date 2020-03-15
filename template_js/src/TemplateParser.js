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
    _non_close_tags: ['hr', 'br'],
    
    build:function(definiton) {
        let _this = this;
        let _elements = [];
        let _pos = 0;
        let _result = null;
        let _attributes = [];
        
        if (!TemplateParser._isArray(definiton)) {
            TemplateParser._throwError(def);
        //TAG
        } else if (TemplateParser._isString(definiton[0])
            && TemplateParser._isObject(definiton[1])
        ) {
            
            _attributes = definiton[1].keys.map(function(key) {
                return key + '="' +  definiton[1][key] + '"';
            });
            
            _result = '<' + definiton[0] +
                ' ' +
                _attributes.join(' ') +
                '>';
            
            _elements.push(_result);
            _pos++;
            
            if (this._non_close_tags.indexOf(key) !== -1) {
                _elements.push('</' + definiton[0] + '>');
            }
        //子Elements
        } else if (TemplateParser._isArray(definiton[0])) {
            _result = TemplateParser.build(def);
            if (! TemplateParser._isString(_result)) {
                TemplateParser._throwError(def);
            }
            _elements = _elements.splice(_pos, 0, _result);
        //関数
        } else if (TemplateParser._isFunction(definiton[0])
            && TemplateParser._isArray(definiton[1])
        ) {
            _result = definiton[0].apply(
                definiton[2] || this,
                definiton[1]
            );
            if (! TemplateParser._isString(_result)) {
                TemplateParser._throwError(def);
            }
            _elements = _elements.splice(_pos, 0, _result);
        } else {
            TemplateParser._throwError(def);
        }
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
