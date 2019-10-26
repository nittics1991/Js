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
    this.html_div = [
        '<div class="{{cls}}">',
        '</div>',
    ];
    
    this.html_form = [
        '<form name="{{name}}">',
        '</form>',
    ];
    
    this.html_table = [
        '<table class="{{cls}}">',
        '</table>',
    ];
    
    this.html_thead = [
        '<thead>',
        '</thead>',
    ];
    
    this.html_tbody = [
        '<tbody>',
        '</tbody>',
    ];
    
    this.html_tr = [
        '<tr class="{{cls}}">',
        '</tr>',
    ];
    
    this.html_th = [
        '<th>{{text}}</th>',
    ];
    
    this.html_td = [
        '<td>',
        '</td>',
    ];
    
    this.html_select = [
        '<select name="{{name}}">',
        '</select>',
    ];
    
    this.html_option = [
        '<option value="{{key}}" {{selected}}>{{value}}</option>',
    ];
    
    this.html_input_number = [
        '<input type="number" name="{{name}}" value="{{value}}"></inpit>',
    ];
    
    this.html_input_radio = [
        '<input type="radio" name="{{name}}" value="{{value}}" {{checked}}>{{text}}</inpit>',
    ];
    
    this.html_button = [
        '<button name="{{name}}">{{text}}</button>',
    ];
};
