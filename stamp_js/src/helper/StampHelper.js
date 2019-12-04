/**
*   ヘルパー
*
*/
let StampHelper =  {
    /**
    *   ファイルダウンロード
    *
    *   @param string content
    *   @param string fileName
    */
    downloadFile:function(content, fileName) {
        let blob = new Blob([content], {'type':'text/plain'})
        
        try {
            StampHelper._msDownload(blob, fileName);
        } catch (e) {
            StampHelper._downloadByAnchor(blob, fileName);
        }
    },
    
    /**
    *   ファイルダウンロード(IE)
    *
    *   @param Blob blob
    *   @param string fileName
    */
    _msDownload:function(blob, fileName) {
        window.navigator.msSaveBlob(blob, fileName); 
    },
    
    /**
    *   ファイルダウンロード(Anchor利用)
    *
    *   @param Blob blob
    *   @param string fileName
    */
    _downloadByAnchor:function(blob, fileName) {
        let anchor = document.createElement('a');
        anchor.href = window.URL.createObjectURL(blob);
        anchor.download = fileName;
        anchor.target = '_blank';
        anchor.click();
        
    },
    
    /**
    *   canvas => png変換
    *
    *   @param string canvasSelector
    *   @return text dataUri
    */
    canvasToImage:function(canvasSelector) {
        let canvas = document.querySelector(canvasSelector);
        return canvas.toDataURL();
    },
    
    /**
    *   canvas => png変換
    *
    *   @param string canvasSelector
    *   @return text dataUri
    */
    exchangeToImage:function(canvasSelector) {
        let canvas = document.querySelector(canvasSelector);
        let imgUri = StampHelper.canvasToImage(canvasSelector);
        let html = '<img src="' + imgUri + '">';
        
        canvas.parentNode.insertAdjacentHTML('afterbegin', html);
        canvas.parentNode.removeChild(canvas);
    },
    
    
    
    
    
    
    
    
    /**
    *   ファイルアップロード
    *
    *   @param string templateTagSelector
    */
    openUploadFile:function(templateTagSelector) {
        
        
        
        
        
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
};
