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
    *   canvas要素=>img要素置換
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
    
    
    
    
    
    //ファイル名から読み込みたい
    
    /**
    *   templateファイルから要素追加
    *
    *   @param string templateTagSelector
    *   @param string position  @see insertAdjacentHTML
    *   @param string filePath
    */
    addElementFromTemplateFile:function(targetSelector, position, filePath) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', filePath);
        
        let contents = '';
        
        xhr.onreadystatechange = function() {
            if(xhr.readyStatus === 4 && xhr.status == 200) {
                contents = xhr.responseText;
                
                
                console.log(contents);
                console.log(document);
                console.log(targetSelector);
                console.log(position);
                
                document.querySelector(targetSelector)
                    .insertAdjacentHTML(position, contents);
                
                
                
            }
        };
        xhr.send();
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
};
