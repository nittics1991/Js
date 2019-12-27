/**
*   ダイアログ表示
*
*   @param objext jquery $('#target_css')
*/
concertoDialog= new ConcertoDialog(jquery)
    this.jquery = jquery;
    this.messages = [];
);

/**
*   描画
*
*/
concertoDialog.prototype.render = function() {
    this.jquery.dialog(this.messages.join("\n"));
};

/**
*   ダイアログ表示
*
*   @param objext jquery $('#target_css')
*/
concertoDialog.prototype.addMessage = function(message) {
    this.messages.push(message);
};
