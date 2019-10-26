/**
*   テンプレート
*
*/
let FormTemplate = function() {
    this.defineTemplate();
};

/**
*   取得
*
*   @param text id
*   @param array params
*/
FormTemplate.prototype.get = function(id, params = {}) {
    if (!(id in this)) {
        throw new Error("id not found:" + id);
    }
    
    let _template = this[id];
    let _params = params;
    
    Object.keys(_params).forEach(function(current) {
        let _regex = new RegExp('{{' + current + '}}', 'g');
        _template = _template.replace(_regex, _params[current]);
    });
    return _template;
};

/**
*   テンプレート定義
*
*   @return string
*/
FormTemplate.prototype.defineTemplate = function() {
    //どうするopen/close
    this.html_select_open = [
        '<select name="{{name}}">',
    ];
    
    this.html_option = [
        '<option value="{{key}}">{{value}}</option>',
    ];
    this.html_input_number = [
        '<input type="number" name="{{name}}" value="{{value}}"></inpit>',
    ];
    this.html_input_radio = [
        '<input type="radio" name="{{name}}" value="{{value}}" {{checked}}>{{text}}</inpit>',
    ];
    
    
    
    
    
    
    
};
