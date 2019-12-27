/**
*   ダイアログ表示Controller
*
*
*   @param ConcertoDialog concertoDialog
*   @param object jquery
*/
ConcertoDialogController = function(concertoDialog, jquery) {
    this.jquery = jquery;
    this.concertoDialog = concertoDialog;
};

/**
*   ロード
*
*   @param array [ConcertoDialogSettrings, ...]
*/
ConcertoDialogController.prototype.load = function(settings) {
    let settings = settings;
    let _concertoDialog = concertoDialog;
    
    settings.forEach(function(obj) {
        $.ajax({
            type: "GET",
            dataType: 'text',
            url:url.obj.,url,
            data: obj.data
        }
        .done (function(messsage) {
            _concertoDialog.addMessage(message);
        })
        .fail (function(messsage) {
            exit;
        });
    )};
};

/**
*   描画
*
*/
ConcertoDialogController.prototype.render = function() {
{
    this.concertoDialog.render();
}
