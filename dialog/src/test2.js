
setTimeout(ConcertoDialogController.load, 3);

/**
*
*
*
*/
ConcertoDialogController = function(concertoDialog, jquery) {
    this.concertoDialog = concertoDialog;
    this.jquery = jquery;
};

ConcertoDialogController.prototype.load = function(urls) {
    let urls = urls;
    let _concertoDialog = concertoDialog;
    
    urls.forEach(function(url) {
        $.ajax({
            type: "GET",
            dataType: 'text',
            url:url
        }
        .done (function(messsage) {
            _concertoDialog.addMessage(message);
        })
        .fail (function(messsage) {
            exit;
        });
    )};
    concertoDialog.render(dialog);
};
