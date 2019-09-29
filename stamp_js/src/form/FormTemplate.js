/**
*   テンプレート
*
*/
let FormTemplate = function() {
    this.input_text = '<input type="text" name="" value="{{value}}">';
    
    this.table_open =
        '<table class="{{class}}"> \
        <thead>';
    
    this.table_middle =
        '</thead> \
        <tbody>';
    
    this.table_close =
        '</tbody> \
        </table>';
    
    
    
    
    
    
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
