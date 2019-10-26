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
    this.start = '<div class=".stampjs_form">';
    this.end = '</div>';
    
    this.table_open = '<table class="{{class}}"><thead>';
    this.table_middle = '</thead><tbody>';
    this.table_close = '</tbody></table>';
    
    this.tr_open = '<tr>';
    this.tr_close = '</tr>';
    
    this.th = '<th>{{text}}</th>';
    
    this.td_open = '<td>';
    this.td_close = '</td>';
    
    this.td_text = '<td><input type="text" name="{{name}}" value="{{value}}"></input></td>';
    this.td_number = '<td><input type="number" name="{{name}}" value="{{value}}"></input></td>';
    
    this.input_radio = '<input type="radio" name="{{name}}" value="{{value}}" checked="{{checked}}">{{text}}</input>';
};
