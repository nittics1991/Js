/**
*
*
*
*/


setTimeout(ConcertoDialogController.load, 3);

/**
*
*
*
*/
ConcertoDialog = function() {
    this.messages = [];
};

ConcertoDialog.prototype.addMessage = function(message) {
   this->messages.push(messsage);
};

ConcertoDialog.prototype.render = function(target_css) {
   $(target_css).dialog(this.message.join("\n"));
};


let concertoDialog = new ConcertoDialog();


/**
*
*
*
*/
ConcertoDialogController = function() {
    this.messages = [];
};

ConcertoDialogController.prototype.addMessage = function(message) {
   this->messages.push(messsage);
};


let urls = [
    //'alaem_aa_ajax',    //count message > 0 return messsage
    
    
    
];

urls.forEach(function(url) {
    let _concertoDialog = concertoDialog;
    $.ajax({
        type: "GET",
        dataType: 'text',
        url:url
    }
    .done (function(messsage) {
        _concertoDialog.addMessage(message);
    })
    .fail (function(messsage) {
        //
    });
    );
    
};


let dialog = $('dialog_css').options{};

concertoDialog.render(dialog);

